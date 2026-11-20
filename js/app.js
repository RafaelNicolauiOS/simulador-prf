/* Simulador PRF — Certo ou Errado (estilo CEBRASPE) */
(function () {
  'use strict';

  var BANCO = window.QUESTOES || [];
  var STORE = 'prf-simulador-v1';
  var $ = function (s) { return document.querySelector(s); };

  /* ---------- Persistência (somente no navegador) ---------- */
  function carregar() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; }
  }
  function salvar() {
    try { localStorage.setItem(STORE, JSON.stringify(db)); } catch (e) { /* sem storage */ }
  }
  var db = carregar();
  db.q = db.q || {};       // { id: { t: tentativas, c: acertos, ult: 'C'|'E'|null (última acertou?) } }
  db.hist = db.hist || []; // [{ d, modo, c, e, b, n }]

  /* ---------- Rodadas sem repetição ----------
   * Por disciplina: itens já respondidos ficam fora das sessões até que
   * todos os itens da disciplina tenham sido respondidos; então começa
   * uma nova rodada. db.ciclo = { disciplina: { rodada, visto: { id: 1 } } } */
  var TOTAL_DISC = {};
  BANCO.forEach(function (q) { TOTAL_DISC[q.disciplina] = (TOTAL_DISC[q.disciplina] || 0) + 1; });
  if (!db.ciclo) {            // migração: o que já foi respondido conta como visto
    db.ciclo = {};
    BANCO.forEach(function (q) { if (db.q[q.id]) ciclo(q.disciplina).visto[q.id] = 1; });
  }
  var avisosRodada = [];
  function ciclo(d) { return (db.ciclo[d] = db.ciclo[d] || { rodada: 1, visto: {} }); }
  function pendente(q) { return !ciclo(q.disciplina).visto[q.id]; }
  function restantes(d) {
    var c = ciclo(d);
    return BANCO.filter(function (q) { return q.disciplina === d && !c.visto[q.id]; }).length;
  }
  function fecharCiclos() {
    Object.keys(TOTAL_DISC).forEach(function (d) {
      if (restantes(d) === 0) {
        var c = ciclo(d);
        avisosRodada.push(d + ': rodada ' + c.rodada + ' concluída');
        c.rodada++; c.visto = {};
      }
    });
    salvar();
  }

  /* ---------- Utilitários ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* Comentário em parágrafos: cada linha vira um <p>; "Correto."/"Errado." e rótulos como "Dica de prova:" em negrito. */
  var ROTULOS = /^(Dica de prova|Dica|Macete|Atenção|Resumo|Observação|Lembre-se|Conferência|Interpretação|Passo a passo|Resolução)([^:]{0,30}):/;
  function comentarioHtml(s) {
    return String(s).split(/\n+/).map(function (l, i) {
      var h = esc(l);
      if (i === 0) h = h.replace(/^(Correto\.|Errado\.)/, '<b>$1</b>');
      else h = h.replace(ROTULOS, '<b>$1$2:</b>');
      return '<p' + (/^• /.test(l) ? ' class="item"' : '') + '>' + h + '</p>';
    }).join('');
  }
  function embaralhar(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function unicos(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }
  function fmtTempo(ms) {
    var s = Math.floor(ms / 1000), m = Math.floor(s / 60), h = Math.floor(m / 60);
    var mm = String(m % 60).padStart(2, '0'), ss = String(s % 60).padStart(2, '0');
    return h ? h + ':' + mm + ':' + ss : mm + ':' + ss;
  }
  function mostrar(view) {
    ['home', 'quiz', 'result'].forEach(function (v) { $('#view-' + v).hidden = v !== view; });
    window.scrollTo(0, 0);
  }

  /* ---------- Tela inicial ---------- */
  var selDisc = $('#disciplina'), boxTemas = $('#temas'), selFonte = $('#fonte'), selTopico = $('#topico');
  var COM_TOPICO = '__edital';

  function montarTopicos() {
    var daDisc = BANCO.filter(function (q) { return q.disciplina === selDisc.value && q.topico; });
    var ts = unicos(daDisc.map(function (q) { return q.topico; })).sort(function (a, b) {
      return a.localeCompare(b, 'pt-BR', { numeric: true });
    });
    $('#topico-field').hidden = !ts.length;
    var opts = '<option value="">Todos (sem filtro)</option>';
    if (ts.length) opts += '<option value="' + COM_TOPICO + '">Só itens por tópico do edital (' + daDisc.length + ')</option>';
    ts.forEach(function (t) {
      var c = daDisc.filter(function (q) { return q.topico === t; }).length;
      opts += '<option value="' + esc(t) + '">' + esc(t) + ' (' + c + ')</option>';
    });
    selTopico.innerHTML = opts;
  }
  var GERAL = 'Inéditas (banco geral)', PROVAS = '__provas';
  function fonteDe(q) { return q.fonte || GERAL; }

  function montarFontes() {
    var fs = unicos(BANCO.filter(function (q) { return q.disciplina === selDisc.value; }).map(fonteDe));
    var provas = fs.filter(function (f) { return f !== GERAL; }).sort(function (a, b) {
      return b.slice(-4) - a.slice(-4) || a.localeCompare(b);
    });
    var cont = function (f) { return BANCO.filter(function (q) { return q.disciplina === selDisc.value && (f === PROVAS ? !!q.fonte : fonteDe(q) === f); }).length; };
    var opts = '<option value="">Todas as origens</option>';
    if (provas.length) opts += '<option value="' + PROVAS + '">Provas recentes – todas (' + cont(PROVAS) + ')</option>';
    provas.forEach(function (f) { opts += '<option value="' + esc(f) + '">' + esc(f) + ' (' + cont(f) + ')</option>'; });
    if (fs.indexOf(GERAL) >= 0) opts += '<option value="' + esc(GERAL) + '">' + esc(GERAL) + ' (' + cont(GERAL) + ')</option>';
    selFonte.innerHTML = opts;
  }

  function montarDisciplinas() {
    var ORDEM = ['Língua Portuguesa', 'Raciocínio Lógico-Matemático', 'Informática', 'Física', 'Ética e Cidadania',
      'Geopolítica', 'Língua Inglesa', 'Língua Espanhola', 'Legislação de Trânsito', 'Direito Administrativo',
      'Direito Constitucional', 'Direito Penal', 'Direito Processual Penal', 'Legislação Especial', 'Direitos Humanos'];
    var pos = function (d) { var i = ORDEM.indexOf(d); return i < 0 ? 99 : i; };
    var ds = unicos(BANCO.map(function (q) { return q.disciplina; })).sort(function (a, b) { return pos(a) - pos(b); });
    var cont = function (d) { return BANCO.filter(function (q) { return q.disciplina === d; }).length; };
    selDisc.innerHTML = ds.map(function (d) { return '<option value="' + esc(d) + '">' + esc(d) + ' (' + cont(d) + ')</option>'; }).join('');
    if (ds.indexOf('Informática') >= 0) selDisc.value = 'Informática';
    montarFontes();
    montarTopicos();
    montarTemas();
  }
  function montarTemas() {
    var temas = unicos(BANCO.filter(function (q) { return q.disciplina === selDisc.value; })
      .map(function (q) { return q.tema; }));
    boxTemas.innerHTML = temas.map(function (t) {
      return '<label class="chip"><input type="checkbox" value="' + esc(t) + '" checked><span>' + esc(t) + '</span></label>';
    }).join('');
    atualizarInfo();
  }
  function filtrarBanco() {
    var temas = Array.prototype.map.call(boxTemas.querySelectorAll('input:checked'), function (i) { return i.value; });
    var filtro = $('#filtro').value, fonte = selFonte.value, topico = selTopico.value;
    return BANCO.filter(function (q) {
      if (q.disciplina !== selDisc.value || temas.indexOf(q.tema) < 0) return false;
      if (fonte === PROVAS ? !q.fonte : fonte && fonteDe(q) !== fonte) return false;
      if (topico === COM_TOPICO ? !q.topico : topico && q.topico !== topico) return false;
      var s = db.q[q.id];
      if (filtro === 'pendentes') return pendente(q);
      if (filtro === 'erradas') return s && s.ult === false;
      return true;
    });
  }
  function atualizarInfo() {
    var n = filtrarBanco().length, d = selDisc.value, c = ciclo(d), falta = restantes(d), tot = TOTAL_DISC[d] || 0;
    var feitos = tot - falta, pct = tot ? Math.round(feitos / tot * 100) : 0;
    $('#rodada').innerHTML = '<div class="rodada-head"><span><b>Rodada ' + c.rodada + '</b> · ' + esc(d) + '</span>' +
      '<span><b>' + falta + '</b> de ' + tot + ' para responder</span></div>' +
      '<div class="tbar-track"><div class="tbar-fill" style="width:' + pct + '%"></div></div>';
    var info;
    if ($('#filtro').value === 'pendentes') {
      info = n + (n === 1 ? ' item ainda não respondido' : ' itens ainda não respondidos') + ' com esses filtros.';
      if (!n && falta) info = 'Você já respondeu todos os itens deste filtro nesta rodada. Ainda faltam ' + falta +
        ' em outros assuntos de ' + d + '.';
    } else {
      info = n + (n === 1 ? ' item disponível' : ' itens disponíveis') + ' com esses filtros (podem se repetir).';
    }
    $('#setup-info').textContent = info;
    $('#liberar').hidden = !($('#filtro').value === 'pendentes' && !n && falta);
    $('#setup button[type=submit]').disabled = n === 0;
    rotularDisciplinas();
  }
  function rotularDisciplinas() {
    Array.prototype.forEach.call(selDisc.options, function (o) {
      var d = o.value, falta = restantes(d), tot = TOTAL_DISC[d];
      o.textContent = d + ' (' + (falta === tot ? tot : 'faltam ' + falta + ' de ' + tot) + ')';
    });
  }

  function montarStats() {
    var ids = Object.keys(db.q), t = 0, c = 0;
    ids.forEach(function (id) { t += db.q[id].t; c += db.q[id].c; });
    var pct = t ? Math.round((c / t) * 100) : 0;
    var faltaTotal = Object.keys(TOTAL_DISC).reduce(function (s, d) { return s + restantes(d); }, 0);
    var html = (avisosRodada.length ? '<div class="aviso-rodada">🎉 ' + avisosRodada.map(esc).join('<br>') +
      '. Os itens dessa disciplina voltaram a ficar disponíveis.</div>' : '') +
      '<div class="stat-grid">' +
        '<div class="stat"><b>' + ids.length + '<span class="muted" style="font-size:.9rem;font-weight:500"> / ' + BANCO.length + '</span></b><small>itens já resolvidos</small></div>' +
        '<div class="stat"><b>' + (t ? pct + '%' : '—') + '</b><small>taxa de acerto</small></div>' +
        '<div class="stat stat-wide"><b>' + faltaTotal + '<span class="muted" style="font-size:.9rem;font-weight:500"> / ' + BANCO.length +
        '</span></b><small>itens ainda não respondidos na rodada atual (todas as disciplinas)</small></div>' +
      '</div>';
    if (db.hist.length) {
      html += '<h3>Últimas sessões</h3><ul class="hist">' + db.hist.slice(-5).reverse().map(function (h) {
        var d = new Date(h.d);
        return '<li><span>' + d.toLocaleDateString('pt-BR') + ' · ' + (h.modo === 'prova' ? (h.sim ? 'Simulado ' + h.sim.slice(1) : 'Prova completa') : h.modo === 'simulado' ? 'Simulado' : 'Treino') + '</span>' +
          '<span><b>' + (h.c - h.e) + '</b> <span class="muted">líq. (' + h.c + '✓ ' + h.e + '✗ de ' + h.n + ')</span></span></li>';
      }).join('') + '</ul>';
      html += '<button type="button" class="link-btn" id="zerar">Zerar histórico</button>';
    } else {
      html += '<p class="muted">Nenhuma sessão ainda. Seu progresso fica salvo neste navegador.</p>';
    }
    $('#stats').innerHTML = html;
    avisosRodada = [];
    var z = $('#zerar');
    if (z) z.onclick = function () {
      if (confirm('Apagar todo o histórico e estatísticas salvos neste navegador?')) {
        db = { q: {}, hist: [], ciclo: {}, sims: {} }; avisosRodada = []; salvar(); montarStats(); atualizarInfo();
      }
    };
  }

  selDisc.addEventListener('change', function () { montarFontes(); montarTopicos(); montarTemas(); });
  selFonte.addEventListener('change', atualizarInfo);
  selTopico.addEventListener('change', atualizarInfo);
  boxTemas.addEventListener('change', atualizarInfo);
  $('#filtro').addEventListener('change', atualizarInfo);

  $('#liberar').addEventListener('click', function () {
    var c = ciclo(selDisc.value), filtroAtual = $('#filtro').value;
    $('#filtro').value = 'todas';
    filtrarBanco().forEach(function (q) { delete c.visto[q.id]; });
    $('#filtro').value = filtroAtual;
    salvar(); atualizarInfo();
  });

  /* ---------- Prova completa (Edital PRF nº 1/2021, item 9.12) ---------- */
  var PROVA = [
    { bloco: 'I', minimo: 15, itens: [['Língua Portuguesa', 18], ['Raciocínio Lógico-Matemático', 6], ['Informática', 7],
      ['Física', 5], ['Ética e Cidadania', 6], ['Geopolítica', 5], ['LINGUA', 8]] },
    { bloco: 'II', minimo: 10, itens: [['Legislação de Trânsito', 30]] },
    { bloco: 'III', minimo: 10, itens: [['Direito Administrativo', 7], ['Direito Constitucional', 7], ['Direito Penal', 5],
      ['Direito Processual Penal', 5], ['Legislação Especial', 6], ['Direitos Humanos', 5]] }
  ];
  var MINIMO_TOTAL = 50;
  var SIMULADOS = window.SIMULADOS || [];
  var POR_ID = {};
  BANCO.forEach(function (q) { POR_ID[q.id] = q; });
  db.sims = db.sims || {};   // { S01: { liq, d, ok } }

  function montarSimuladosFixos() {
    var sel = $('#prova-qual'), atual = sel.value;
    sel.innerHTML = '<option value="">Aleatória (itens ainda não respondidos)</option>' + SIMULADOS.map(function (sm) {
      var r = db.sims[sm.id];
      return '<option value="' + sm.id + '">' + esc(sm.nome) + (r ? ' — feito: ' + r.liq + ' pts' + (r.ok ? ' ✓' : ' ✗') : '') + '</option>';
    }).join('');
    if (atual) sel.value = atual;
  }
  function itensSimulado(id) {
    var sm = SIMULADOS.filter(function (x) { return x.id === id; })[0];
    if (!sm) return null;
    var lingua = $('#lingua').value === 'Língua Espanhola' ? sm.esp : sm.ing;
    var base = sm.i.split(',').map(function (p) { var a = p.split(':'); return { q: POR_ID[a[0]], bloco: a[1] }; });
    var ling = lingua.split(',').map(function (id2) { return { q: POR_ID[id2], bloco: 'I' }; });
    // língua estrangeira entra no fim do Bloco I, como na prova
    var fimI = 0; base.forEach(function (x, i) { if (x.bloco === 'I') fimI = i + 1; });
    var lista = base.slice(0, fimI).concat(ling, base.slice(fimI));
    return lista.filter(function (x) { return x.q; });
  }
  function modoAtual() { return document.querySelector('input[name=modo]:checked').value; }

  function montarProva() {
    var lingua = $('#lingua').value, lista = [];
    PROVA.forEach(function (b) {
      b.itens.forEach(function (par) {
        var disc = par[0] === 'LINGUA' ? lingua : par[0];
        var todos = BANCO.filter(function (q) { return q.disciplina === disc; });
        var pend = todos.filter(pendente);
        // só repete itens quando a disciplina não tem pendentes suficientes (fim da rodada)
        var pool = pend.length >= par[1] ? pend : todos;
        if (pool === todos) pool = pend.concat(embaralhar(todos.filter(function (q) { return !pendente(q); })).slice(0, par[1] - pend.length));
        // metade Certo, metade Errado (aprox.), para não favorecer chute
        var cs = embaralhar(pool.filter(function (q) { return q.gabarito === 'C'; }));
        var es = embaralhar(pool.filter(function (q) { return q.gabarito === 'E'; }));
        var nC = Math.round(par[1] / 2 + (Math.random() < 0.5 ? -0.5 : 0.5) * (par[1] % 2));
        var escolha = cs.slice(0, nC).concat(es.slice(0, par[1] - nC));
        if (escolha.length < par[1]) escolha = escolha.concat(embaralhar(pool).filter(function (q) { return escolha.indexOf(q) < 0; }).slice(0, par[1] - escolha.length));
        embaralhar(escolha).forEach(function (q) { lista.push({ q: q, bloco: b.bloco }); });
      });
    });
    return lista;
  }

  function resumoProva() {
    $('#prova-resumo').innerHTML = '<b>120 itens · nota = acertos − erros</b>' + PROVA.map(function (b) {
      var n = b.itens.reduce(function (s, p) { return s + p[1]; }, 0);
      return '<div style="margin-top:8px"><b>Bloco ' + b.bloco + '</b> (' + n + ' itens, mínimo ' + b.minimo + ' pontos): ' +
        b.itens.map(function (p) { return (p[0] === 'LINGUA' ? 'Língua estrangeira' : p[0]) + ' ' + p[1]; }).join(' · ') + '</div>';
    }).join('') + '<div style="margin-top:8px">Mínimo de ' + MINIMO_TOTAL + ' pontos no total. Distribuição por disciplina conforme a prova objetiva de 2021; o edital fixa apenas o total de cada bloco.</div>';
  }

  function aplicarModo() {
    var prova = modoAtual() === 'prova';
    $('#filtros').hidden = prova;
    $('#prova-opts').hidden = !prova;
    if (prova) {
      resumoProva();
      montarSimuladosFixos();
      var qual = $('#prova-qual').value;
      $('#setup-info').textContent = (qual ? 'Simulado fixo: sempre os mesmos 120 itens, para você comparar sua evolução. ' :
        'Prova aleatória com itens que você ainda não respondeu. ') + 'Tempo oficial: 4h30 para a prova objetiva e a discursiva.';
      $('#setup button[type=submit]').disabled = false;
    } else atualizarInfo();
  }
  document.querySelectorAll('input[name=modo]').forEach(function (i) { i.addEventListener('change', aplicarModo); });
  $('#prova-qual').addEventListener('change', aplicarModo);

  $('#setup').addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (modoAtual() === 'prova') {
      var qual = $('#prova-qual').value;
      var itens = qual ? itensSimulado(qual) : montarProva();
      iniciar(itens.map(function (x) { return x.q; }), 'prova', itens.map(function (x) { return x.bloco; }));
      S.simId = qual || null;
      return;
    }
    var qtd = +$('#quantidade').value;
    var lista = embaralhar(filtrarBanco());
    if (qtd) lista = lista.slice(0, qtd);
    iniciar(lista, document.querySelector('input[name=modo]:checked').value);
  });

  /* ---------- Sessão ---------- */
  var S = null, tick = null;

  function iniciar(lista, modo, blocos) {
    if (!lista.length) return;
    S = { lista: lista, modo: modo, blocos: blocos || null, i: 0, resp: {}, revelado: {}, inicio: Date.now(), fim: null };
    var sim = modo !== 'treino';
    $('#timer').hidden = !sim;
    $('#mapa-wrap').hidden = !sim;
    $('#branco').hidden = !sim;
    $('#finalizar').textContent = modo === 'prova' ? 'Finalizar prova' : 'Finalizar simulado';
    clearInterval(tick);
    if (sim) {
      tick = setInterval(function () { $('#timer').textContent = fmtTempo(Date.now() - S.inicio); }, 1000);
      $('#timer').textContent = '00:00';
    }
    mostrar('quiz');
    render();
  }

  function render() {
    var q = S.lista[S.i], n = S.lista.length, r = S.resp[q.id];
    $('#contador').textContent = 'Item ' + (S.i + 1) + ' de ' + n + (S.blocos ? ' · Bloco ' + S.blocos[S.i] : '');
    $('#progress-bar').style.width = ((S.i + 1) / n * 100) + '%';
    $('#q-tema').textContent = S.modo === 'prova' ? q.disciplina : q.tema;
    $('#q-id').textContent = '#' + q.id;
    $('#q-fonte').textContent = q.fonte ? q.fonte + (q.ref ? ' · ' + q.ref : '') : (q.topico ? 'Edital PRF · item ' + q.topico.split(' ')[0] : '');
    $('#q-fonte').hidden = !q.fonte && !q.topico;
    $('#q-texto').textContent = q.enunciado;

    var travado = S.modo === 'treino' && S.revelado[q.id];
    document.querySelectorAll('.btn-answer').forEach(function (b) {
      var v = b.dataset.resp;
      b.classList.toggle('sel', r === v);
      b.classList.toggle('dim', !!r && r !== v);
      b.disabled = !!travado;
    });

    var fb = $('#feedback');
    if (travado) {
      var ok = r === q.gabarito;
      fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = '<h4>' + (ok ? '✓ Você acertou' : '✗ Você errou') + ' — gabarito: ' +
        (q.gabarito === 'C' ? 'CERTO' : 'ERRADO') + '</h4><div class="coment-corpo">' + comentarioHtml(q.comentario) + '</div>';
      fb.hidden = false;
    } else {
      fb.hidden = true;
    }

    $('#anterior').disabled = S.i === 0;
    var ultimo = S.i === n - 1;
    if (S.modo === 'treino') {
      $('#proxima').textContent = ultimo ? 'Ver resultado' : 'Próxima';
      $('#proxima').disabled = !travado;
    } else {
      $('#proxima').textContent = ultimo ? 'Finalizar' : 'Próxima';
      $('#proxima').disabled = false;
      $('#branco').disabled = !r;
      renderMapa();
    }
  }

  function renderMapa() {
    $('#mapa').innerHTML = S.lista.map(function (q, idx) {
      var r = S.resp[q.id];
      return '<button type="button" data-i="' + idx + '" class="' + (r ? 'done ' : '') + (idx === S.i ? 'atual' : '') + '">' +
        (idx + 1) + '<small>' + (r || '') + '</small></button>';
    }).join('');
  }

  function responder(v) {
    var q = S.lista[S.i];
    if (S.modo === 'treino') {
      if (S.revelado[q.id]) return;
      S.resp[q.id] = v;
      S.revelado[q.id] = true;
      registrar(q, v);
      render();
    } else {
      S.resp[q.id] = S.resp[q.id] === v ? undefined : v;
      render();
    }
  }

  function registrar(q, v) {
    var s = db.q[q.id] || { t: 0, c: 0 };
    var ok = v === q.gabarito;
    s.t++; if (ok) s.c++; s.ult = ok;
    db.q[q.id] = s;
    ciclo(q.disciplina).visto[q.id] = 1;
    salvar();
  }

  function avancar() {
    if (S.i < S.lista.length - 1) { S.i++; render(); }
    else finalizar();
  }

  function finalizar() {
    if (S.modo !== 'treino') {
      var brancos = S.lista.filter(function (q) { return !S.resp[q.id]; }).length;
      var msg = brancos ? 'Você deixou ' + brancos + ' item(ns) em branco. Finalizar mesmo assim?' : (S.modo === 'prova' ? 'Finalizar e corrigir a prova?' : 'Finalizar e corrigir o simulado?');
      if (!confirm(msg)) return;
      S.lista.forEach(function (q) { if (S.resp[q.id]) registrar(q, S.resp[q.id]); });
    }
    clearInterval(tick);
    S.fim = Date.now();
    resultado();
  }

  /* ---------- Resultado ---------- */
  function resultado() {
    var c = 0, e = 0, b = 0, porTema = {};
    S.lista.forEach(function (q) {
      var r = S.resp[q.id];
      var chave = S.modo === 'prova' ? q.disciplina : q.tema;
      var t = porTema[chave] = porTema[chave] || { c: 0, n: 0 };
      t.n++;
      if (!r) b++;
      else if (r === q.gabarito) { c++; t.c++; }
      else e++;
    });
    var liq = c - e, n = S.lista.length;
    db.hist.push({ d: Date.now(), modo: S.modo, c: c, e: e, b: b, n: n, sim: S.simId || undefined });
    if (db.hist.length > 50) db.hist = db.hist.slice(-50);
    salvar();

    $('#r-liquida').textContent = liq;
    $('#r-certas').textContent = c;
    $('#r-erradas').textContent = e;
    $('#r-brancos').textContent = b;
    $('#r-tempo').textContent = fmtTempo(S.fim - S.inicio);
    var pct = Math.round((Math.max(liq, 0) / n) * 100);
    $('#r-msg').textContent = 'Nota líquida = acertos − erros. Você aproveitou ' + pct + '% do total possível (' + n + ' pontos).' +
      (e > 0 && b === 0 && liq < n / 2 ? ' Dica: na CEBRASPE, deixar em branco itens de que você não tem segurança pode elevar a nota.' : '');

    renderBlocos(liq);

    $('#r-temas').innerHTML = Object.keys(porTema).map(function (k) {
      var t = porTema[k], p = Math.round(t.c / t.n * 100);
      return '<div class="tbar"><div class="tbar-head"><span>' + esc(k) + '</span><span class="muted">' + t.c + '/' + t.n + '</span></div>' +
        '<div class="tbar-track"><div class="tbar-fill" style="width:' + p + '%"></div></div></div>';
    }).join('');

    $('#revisao').innerHTML = S.lista.map(function (q, idx) {
      var r = S.resp[q.id], cls = !r ? 'blank' : r === q.gabarito ? 'ok' : 'bad';
      var sua = !r ? 'em branco' : r === 'C' ? 'Certo' : 'Errado';
      return '<div class="rev ' + cls + '"><div class="rev-head"><span>' + (idx + 1) + '. ' + esc(q.tema) + (q.fonte ? ' · ' + esc(q.fonte) : '') + ' · #' + q.id + '</span>' +
        '<span>Sua resposta: <span class="pill ' + (cls === 'blank' ? '' : cls) + '">' + sua + '</span> · Gabarito: <b>' +
        (q.gabarito === 'C' ? 'Certo' : 'Errado') + '</b></span></div>' +
        '<p>' + esc(q.enunciado) + '</p><div class="coment">' + comentarioHtml(q.comentario) + '</div></div>';
    }).join('');

    var erradas = S.lista.filter(function (q) { return S.resp[q.id] && S.resp[q.id] !== q.gabarito; });
    $('#refazer-erradas').disabled = !erradas.length;
    $('#refazer-erradas').onclick = function () { iniciar(embaralhar(erradas), S.modo === 'prova' ? 'simulado' : S.modo); };
    mostrar('result');
  }

  function renderBlocos(liq) {
    var box = $('#r-blocos');
    if (S.modo !== 'prova' || !S.blocos) { box.hidden = true; box.innerHTML = ''; return; }
    var reprovado = [];
    var html = PROVA.map(function (b) {
      var c = 0, e = 0, n = 0;
      S.lista.forEach(function (q, i) {
        if (S.blocos[i] !== b.bloco) return;
        n++;
        var r = S.resp[q.id];
        if (r) { if (r === q.gabarito) c++; else e++; }
      });
      var nota = c - e, ok = nota >= b.minimo;
      if (!ok) reprovado.push('Bloco ' + b.bloco + ' abaixo de ' + b.minimo);
      return '<div class="bloco ' + (ok ? 'ok' : 'bad') + '"><span><b>Bloco ' + b.bloco + '</b> · ' + c + ' acertos, ' + e + ' erros, ' +
        (n - c - e) + ' em branco</span><span><b>' + nota + '</b> / mín. ' + b.minimo + '</span><span class="st">' + (ok ? 'OK' : 'ABAIXO') + '</span></div>';
    }).join('');
    if (liq < MINIMO_TOTAL) reprovado.push('total abaixo de ' + MINIMO_TOTAL);
    if (S.simId) { db.sims[S.simId] = { liq: liq, d: Date.now(), ok: !reprovado.length }; salvar(); }
    html += '<div class="veredito ' + (reprovado.length ? 'bad' : 'ok') + '">' + (reprovado.length
      ? 'Pelos critérios do edital, você seria eliminado na prova objetiva: ' + reprovado.join('; ') + '.'
      : 'Pelos critérios do edital, você passaria na prova objetiva (nota total ' + liq + ' de 120).') + '</div>';
    box.innerHTML = '<div class="blocos">' + html + '</div>';
    box.hidden = false;
  }

  /* ---------- Eventos ---------- */
  document.querySelectorAll('.btn-answer').forEach(function (b) {
    b.addEventListener('click', function () { responder(b.dataset.resp); });
  });
  $('#proxima').addEventListener('click', avancar);
  $('#anterior').addEventListener('click', function () { if (S.i > 0) { S.i--; render(); } });
  $('#branco').addEventListener('click', function () { delete S.resp[S.lista[S.i].id]; render(); });
  $('#finalizar').addEventListener('click', finalizar);
  $('#mapa').addEventListener('click', function (ev) {
    var b = ev.target.closest('button'); if (!b) return;
    S.i = +b.dataset.i; render();
  });
  function voltarInicio() {
    clearInterval(tick); S = null;
    fecharCiclos(); montarStats(); aplicarModo(); mostrar('home');
  }
  $('#sair').addEventListener('click', function () {
    if (confirm('Sair da sessão atual? O progresso desta sessão será descartado.')) voltarInicio();
  });
  $('#nova').addEventListener('click', voltarInicio);
  $('#brand').addEventListener('click', function (ev) {
    ev.preventDefault();
    if (!S || $('#view-quiz').hidden || confirm('Sair da sessão atual?')) voltarInicio();
  });

  document.addEventListener('keydown', function (ev) {
    if (!S || $('#view-quiz').hidden || ev.metaKey || ev.ctrlKey || ev.altKey) return;
    var k = ev.key.toLowerCase();
    if (k === 'enter' && document.activeElement && document.activeElement.tagName === 'BUTTON') return;
    if (k === 'c') responder('C');
    else if (k === 'e') responder('E');
    else if (k === 'arrowright' || k === 'enter') { if (!$('#proxima').disabled) avancar(); }
    else if (k === 'arrowleft') { if (S.i > 0) { S.i--; render(); } }
  });

  fecharCiclos();
  montarDisciplinas();
  montarStats();
  aplicarModo();
})();

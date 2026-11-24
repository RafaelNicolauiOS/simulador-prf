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
  db.hist = db.hist || []; // [{ d, modo, c, e, b, n, sim, por: { disciplina: { c, e, b, n } } }]
  // Portfólio de erros: itens errados ou em branco em simulados/provas
  // { id: { desde, vezes, ult: 'erro'|'branco', tent, acertos, rec, recEm } }
  db.port = db.port || {};

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
    ['home', 'quiz', 'result', 'portfolio', 'evolucao'].forEach(function (v) { $('#view-' + v).hidden = v !== view; });
    document.querySelectorAll('.topnav [data-view]').forEach(function (a) { a.classList.toggle('ativo', a.dataset.view === view || (view !== 'portfolio' && view !== 'evolucao' && a.dataset.view === 'home')); });
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
        db = { q: {}, hist: [], ciclo: {}, sims: {}, port: {} }; avisosRodada = []; salvar(); montarStats(); atualizarInfo();
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
    var p = db.port[q.id];
    if (p) {                       // nova tentativa de um item do portfólio
      p.tent++;
      if (ok) { p.acertos++; p.rec = true; if (!p.recEm) p.recEm = Date.now(); }
      else p.rec = false;
    }
    salvar();
  }
  function separar(q, branco) {
    var p = db.port[q.id];
    if (!p) p = db.port[q.id] = { desde: Date.now(), vezes: 0, tent: 0, acertos: 0, rec: false, recEm: null };
    p.vezes++; p.ult = branco ? 'branco' : 'erro'; p.rec = false;
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
      S.separadas = 0;
      S.lista.forEach(function (q) {
        var r = S.resp[q.id];
        if (!r || r !== q.gabarito) { separar(q, !r); S.separadas++; }
      });
      salvar();
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
    var por = {};
    S.lista.forEach(function (q) {
      var k = por[q.disciplina] = por[q.disciplina] || { c: 0, e: 0, b: 0, n: 0 }, r = S.resp[q.id];
      k.n++; if (!r) k.b++; else if (r === q.gabarito) k.c++; else k.e++;
    });
    db.hist.push({ d: Date.now(), modo: S.modo, c: c, e: e, b: b, n: n, sim: S.simId || undefined, por: por });
    if (db.hist.length > 300) db.hist = db.hist.slice(-300);
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
    var avisoPort = $('#r-port');
    if (S.modo !== 'treino' && S.separadas) {
      avisoPort.innerHTML = '📌 <b>' + S.separadas + '</b> ' + (S.separadas === 1 ? 'questão errada ou em branco foi separada' : 'questões erradas ou em branco foram separadas') +
        ' no seu portfólio, com material de estudo do tópico. <button type="button" class="link-btn" id="ir-port">Abrir portfólio</button>';
      avisoPort.hidden = false;
      $('#ir-port').onclick = function () { clearInterval(tick); S = null; fecharCiclos(); abrirPortfolio(); };
    } else avisoPort.hidden = true;

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


  /* ======================= Portfólio de erros ======================= */
  var ESTUDO = window.ESTUDO || {};
  function chaveEstudo(q) { return q.disciplina + '|' + (q.topico ? q.topico : 'tema:' + q.tema); }
  function rotuloChave(k) { var t = k.split('|')[1]; return t.indexOf('tema:') === 0 ? t.slice(5) : t; }
  function itensPortfolio() {
    return Object.keys(db.port).map(function (id) { return { q: POR_ID_GLOBAL[id], p: db.port[id] }; })
      .filter(function (x) { return x.q; });
  }
  var POR_ID_GLOBAL = {};
  BANCO.forEach(function (q) { POR_ID_GLOBAL[q.id] = q; });
  var ORDEM_DISC = ['Língua Portuguesa', 'Raciocínio Lógico-Matemático', 'Informática', 'Física', 'Ética e Cidadania',
    'Geopolítica', 'Língua Inglesa', 'Língua Espanhola', 'Legislação de Trânsito', 'Direito Administrativo',
    'Direito Constitucional', 'Direito Penal', 'Direito Processual Penal', 'Legislação Especial', 'Direitos Humanos'];
  function ordemDisc(a, b) { var x = ORDEM_DISC.indexOf(a), y = ORDEM_DISC.indexOf(b); return (x < 0 ? 99 : x) - (y < 0 ? 99 : y); }

  function htmlEstudo(k) {
    var e = ESTUDO[k];
    if (!e) return '<p class="muted">Material de estudo deste tópico ainda não disponível.</p>';
    var lista = function (titulo, arr, cls) {
      return arr && arr.length ? '<h4 class="' + cls + '">' + titulo + '</h4><ul>' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '';
    };
    return '<div class="estudo"><p class="estudo-resumo">' + esc(e.resumo) + '</p>' +
      lista('📘 Pontos-chave', e.pontos, 'h-pontos') + lista('💡 Macetes', e.macetes, 'h-macetes') +
      lista('🎯 Dicas de prova', e.dicas, 'h-dicas') + lista('⚠️ Pegadinhas da banca', e.pegadinhas, 'h-pegadinhas') + '</div>';
  }

  function abrirPortfolio() { renderPortfolio(); mostrar('portfolio'); }

  function renderPortfolio() {
    var todos = itensPortfolio();
    var pend = todos.filter(function (x) { return !x.p.rec; }), recup = todos.length - pend.length;
    $('#port-stats').innerHTML =
      '<div class="stat"><b>' + todos.length + '</b><small>questões separadas</small></div>' +
      '<div class="stat"><b>' + pend.length + '</b><small>pendentes para revisar</small></div>' +
      '<div class="stat"><b>' + recup + '</b><small>recuperadas (acertou depois)</small></div>' +
      '<div class="stat"><b>' + (todos.length ? Math.round(recup / todos.length * 100) + '%' : '—') + '</b><small>taxa de recuperação</small></div>';

    var selD = $('#port-disc'), atualD = selD.value;
    var discs = unicos(todos.map(function (x) { return x.q.disciplina; })).sort(ordemDisc);
    selD.innerHTML = '<option value="">Todas as disciplinas</option>' + discs.map(function (d) {
      var n = todos.filter(function (x) { return x.q.disciplina === d && !x.p.rec; }).length;
      return '<option value="' + esc(d) + '">' + esc(d) + ' (' + n + ' pendentes)</option>';
    }).join('');
    if (discs.indexOf(atualD) >= 0) selD.value = atualD;

    var status = $('#port-status').value, d = selD.value;
    var vis = todos.filter(function (x) {
      if (d && x.q.disciplina !== d) return false;
      if (status === 'pendentes') return !x.p.rec;
      if (status === 'recuperadas') return x.p.rec;
      return true;
    });
    var pendVis = vis.filter(function (x) { return !x.p.rec; });
    $('#port-treinar').disabled = !pendVis.length;
    $('#port-treinar').textContent = 'Treinar ' + pendVis.length + ' pendente' + (pendVis.length === 1 ? '' : 's') + ' (modo treino)';

    if (!todos.length) {
      $('#port-lista').innerHTML = '<div class="card vazio"><h3>Seu portfólio está vazio</h3><p class="muted">Faça um simulado ou uma prova completa. Ao finalizar, as questões que você errar ou deixar em branco são separadas aqui automaticamente, agrupadas por tópico e com material de estudo.</p></div>';
      return;
    }
    if (!vis.length) { $('#port-lista').innerHTML = '<p class="muted">Nenhuma questão com esses filtros.</p>'; return; }

    // agrupa disciplina > tópico
    var grupos = {};
    vis.forEach(function (x) {
      var g = grupos[x.q.disciplina] = grupos[x.q.disciplina] || {};
      var k = chaveEstudo(x.q);
      (g[k] = g[k] || []).push(x);
    });
    var html = Object.keys(grupos).sort(ordemDisc).map(function (disc) {
      var topicos = Object.keys(grupos[disc]).sort(function (a, b) {
        return grupos[disc][b].filter(function (x) { return !x.p.rec; }).length - grupos[disc][a].filter(function (x) { return !x.p.rec; }).length ||
          rotuloChave(a).localeCompare(rotuloChave(b), 'pt-BR', { numeric: true });
      });
      return '<section class="port-disc"><h2>' + esc(disc) + '</h2>' + topicos.map(function (k) {
        var itens = grupos[disc][k], np = itens.filter(function (x) { return !x.p.rec; }).length;
        return '<article class="card port-top"><div class="port-top-head"><div><h3>' + esc(rotuloChave(k)) + '</h3>' +
          '<span class="muted">' + itens.length + ' separada' + (itens.length === 1 ? '' : 's') + ' · ' +
          (np ? '<b class="txt-bad">' + np + ' pendente' + (np === 1 ? '' : 's') + '</b>' : '<b class="txt-ok">tudo recuperado</b>') + '</span></div>' +
          '<button type="button" class="btn btn-sm" data-treinar="' + esc(k) + '"' + (np ? '' : ' disabled') + '>Treinar tópico</button></div>' +
          '<details class="port-det" open><summary>Material de estudo</summary>' + htmlEstudo(k) + '</details>' +
          '<details class="port-det"><summary>Questões (' + itens.length + ')</summary>' + itens.map(function (x) {
            var q = x.q, p = x.p;
            return '<div class="rev ' + (p.rec ? 'ok' : 'bad') + '"><div class="rev-head"><span>#' + q.id + (q.fonte ? ' · ' + esc(q.fonte) : '') + '</span>' +
              '<span>' + (p.rec ? '<span class="pill ok">Recuperada</span>' : '<span class="pill bad">' + (p.ult === 'branco' ? 'Em branco' : 'Errada') + '</span>') +
              ' · separada ' + p.vezes + 'x · tentativas depois: ' + p.tent + '</span></div>' +
              '<p>' + esc(q.enunciado) + '</p><p class="coment"><b>Gabarito: ' + (q.gabarito === 'C' ? 'Certo' : 'Errado') + '</b></p><div class="coment">' + comentarioHtml(q.comentario) + '</div></div>';
          }).join('') + '</details></article>';
      }).join('') + '</section>';
    }).join('');
    $('#port-lista').innerHTML = html;
    $('#port-lista').querySelectorAll('[data-treinar]').forEach(function (b) {
      b.onclick = function () {
        var k = b.getAttribute('data-treinar');
        var lista = itensPortfolio().filter(function (x) { return !x.p.rec && chaveEstudo(x.q) === k; }).map(function (x) { return x.q; });
        iniciar(embaralhar(lista), 'treino');
      };
    });
  }
  $('#port-disc').addEventListener('change', renderPortfolio);
  $('#port-status').addEventListener('change', renderPortfolio);
  $('#port-treinar').addEventListener('click', function () {
    var d = $('#port-disc').value;
    var lista = itensPortfolio().filter(function (x) { return !x.p.rec && (!d || x.q.disciplina === d); }).map(function (x) { return x.q; });
    iniciar(embaralhar(lista), 'treino');
  });

  /* ======================= Painel de evolução ======================= */
  function svgLinhas(series, opts) {
    // series: [{ nome, cls, pts: [{ y, rot }] }] — eixo x = ordem; eixo y de 0 a yMax
    var W = 640, H = 240, L = 44, R = 16, T = 16, B = 34;
    var n = Math.max.apply(null, series.map(function (s) { return s.pts.length; }));
    var yMax = opts.yMax, yMin = opts.yMin || 0;
    var x = function (i) { return L + (n <= 1 ? (W - L - R) / 2 : i * (W - L - R) / (n - 1)); };
    var y = function (v) { return T + (1 - (v - yMin) / (yMax - yMin)) * (H - T - B); };
    var g = '';
    opts.ticks.forEach(function (t) {
      g += '<line class="grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(t) + '" y2="' + y(t) + '"/>' +
        '<text class="ax" x="' + (L - 8) + '" y="' + (y(t) + 4) + '" text-anchor="end">' + opts.fmt(t) + '</text>';
    });
    var passo = Math.max(1, Math.ceil(n / 8));
    for (var i = 0; i < n; i += passo) g += '<text class="ax" x="' + x(i) + '" y="' + (H - 12) + '" text-anchor="middle">' + (opts.xRot ? opts.xRot(i) : i + 1) + '</text>';
    series.forEach(function (s) {
      var d = s.pts.map(function (p, i) { return (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(p.y).toFixed(1); }).join(' ');
      g += '<path class="ln ' + s.cls + '" d="' + d + '"/>';
      s.pts.forEach(function (p, i) {
        g += '<g class="pt"><circle class="hit" cx="' + x(i) + '" cy="' + y(p.y) + '" r="12"/><circle class="dot ' + s.cls + '" cx="' + x(i) + '" cy="' + y(p.y) + '" r="4.5"/>' +
          '<title>' + esc(p.rot) + '</title></g>';
      });
      var u = s.pts[s.pts.length - 1];
      if (u && series.length > 1) g += '<text class="lbl" x="' + Math.min(x(s.pts.length - 1) + 8, W - R) + '" y="' + (y(u.y) - 8) + '" text-anchor="end">' + esc(s.nome) + '</text>';
    });
    return '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(opts.titulo) + '">' + g + '</svg>';
  }
  function legenda(series) {
    return series.length > 1 ? '<div class="legenda">' + series.map(function (s) { return '<span><i class="sw ' + s.cls + '"></i>' + esc(s.nome) + '</span>'; }).join('') + '</div>' : '';
  }
  function media(arr) { return arr.length ? arr.reduce(function (a, b) { return a + b; }, 0) / arr.length : 0; }
  function sinal(v) { return (v > 0 ? '+' : '') + v; }

  function abrirEvolucao() { renderEvolucao(); mostrar('evolucao'); }

  function renderEvolucao() {
    var provas = db.hist.filter(function (h) { return h.modo !== 'treino' && h.n; });
    var aprov = provas.map(function (h) { return Math.round((h.c - h.e) / h.n * 1000) / 10; });
    var port = itensPortfolio(), recup = port.filter(function (x) { return x.p.rec; }).length;
    var taxaRec = port.length ? Math.round(recup / port.length * 100) : null;
    var k = Math.min(3, Math.floor(aprov.length / 2));
    var melhora = k ? Math.round((media(aprov.slice(-k)) - media(aprov.slice(0, k))) * 10) / 10 : null;
    var melhor = aprov.length ? Math.max.apply(null, aprov) : null;

    $('#evo-stats').innerHTML =
      '<div class="stat"><b>' + (taxaRec === null ? '—' : taxaRec + '%') + '</b><small>dos erros separados já recuperados (' + recup + ' de ' + port.length + ')</small></div>' +
      '<div class="stat"><b class="' + (melhora > 0 ? 'txt-ok' : melhora < 0 ? 'txt-bad' : '') + '">' + (melhora === null ? '—' : sinal(melhora) + ' p.p.') + '</b><small>melhoria geral: ' + (k > 1 ? 'média das ' + k + ' últimas provas × ' + k + ' primeiras' : 'última prova × primeira') + '</small></div>' +
      '<div class="stat"><b>' + provas.length + '</b><small>simulados e provas feitos</small></div>' +
      '<div class="stat"><b>' + (melhor === null ? '—' : melhor + '%') + '</b><small>melhor aproveitamento (nota líquida ÷ itens)</small></div>';

    // Gráfico 1: aproveitamento por prova
    var c1 = $('#evo-chart1');
    if (provas.length < 2) {
      c1.innerHTML = '<p class="muted vazio-graf">Faça pelo menos 2 simulados ou provas para ver a curva de evolução.</p>';
    } else {
      var yMin = Math.min(0, Math.floor(Math.min.apply(null, aprov) / 25) * 25);
      var ticks = []; for (var t = yMin; t <= 100; t += 25) ticks.push(t);
      c1.innerHTML = svgLinhas([{ nome: 'Aproveitamento', cls: 's1', pts: provas.map(function (h, i) {
        return { y: aprov[i], rot: (h.sim ? 'Simulado ' + h.sim.slice(1) : h.modo === 'prova' ? 'Prova completa' : 'Simulado') + ' · ' +
          new Date(h.d).toLocaleDateString('pt-BR') + ' · ' + aprov[i] + '% (' + (h.c - h.e) + ' líq. de ' + h.n + ')' };
      }) }], { yMax: 100, yMin: yMin, ticks: ticks, fmt: function (v) { return v + '%'; }, titulo: 'Aproveitamento por simulado ou prova' });
    }

    // Gráfico 2: separadas × recuperadas (acumulado por dia)
    var c2 = $('#evo-chart2');
    if (!port.length) {
      c2.innerHTML = '<p class="muted vazio-graf">Sem erros separados ainda.</p>';
    } else {
      var dia = function (ts) { var d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime(); };
      var dias = unicos(port.map(function (x) { return dia(x.p.desde); }).concat(port.filter(function (x) { return x.p.recEm; }).map(function (x) { return dia(x.p.recEm); }))).sort();
      var sep = dias.map(function (d) { return port.filter(function (x) { return dia(x.p.desde) <= d; }).length; });
      var rec = dias.map(function (d) { return port.filter(function (x) { return x.p.recEm && dia(x.p.recEm) <= d; }).length; });
      var max = Math.max.apply(null, sep), passo = Math.max(1, Math.ceil(max / 4 / 5) * 5), tk = [];
      for (var v = 0; v <= max + passo - 1; v += passo) tk.push(v);
      var fd = function (i) { return new Date(dias[i]).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }); };
      var series = [
        { nome: 'Separadas', cls: 's2', pts: sep.map(function (v2, i) { return { y: v2, rot: fd(i) + ': ' + v2 + ' separadas (acumulado)' }; }) },
        { nome: 'Recuperadas', cls: 's1', pts: rec.map(function (v2, i) { return { y: v2, rot: fd(i) + ': ' + v2 + ' recuperadas (acumulado)' }; }) }
      ];
      c2.innerHTML = legenda(series) + svgLinhas(series, { yMax: tk[tk.length - 1] || 1, ticks: tk, fmt: function (v3) { return v3; }, xRot: fd, titulo: 'Questões separadas e recuperadas' });
    }

    // Tabela por disciplina: primeiras × últimas provas
    var comPor = provas.filter(function (h) { return h.por; });
    var linhas = ORDEM_DISC.map(function (d) {
      var hs = comPor.filter(function (h) { return h.por[d] && h.por[d].n; });
      var pend = port.filter(function (x) { return x.q.disciplina === d && !x.p.rec; }).length;
      if (!hs.length && !pend) return '';
      var taxa = function (arr) {
        var c = 0, n = 0; arr.forEach(function (h) { c += h.por[d].c; n += h.por[d].n; });
        return n ? Math.round(c / n * 100) : null;
      };
      var meio = Math.ceil(hs.length / 2);
      var ini = hs.length >= 2 ? taxa(hs.slice(0, meio)) : taxa(hs), fim = hs.length >= 2 ? taxa(hs.slice(meio)) : null;
      var dv = ini !== null && fim !== null ? fim - ini : null;
      return '<tr><td>' + esc(d) + '</td><td class="c">' + (ini === null ? '—' : ini + '%') + '</td><td class="c">' + (fim === null ? '—' : fim + '%') +
        '</td><td class="c ' + (dv > 0 ? 'txt-ok' : dv < 0 ? 'txt-bad' : '') + '">' + (dv === null ? '—' : sinal(dv) + ' p.p.') + '</td><td class="c">' + pend + '</td></tr>';
    }).join('');
    $('#evo-tabela').innerHTML = linhas ? '<div class="table-wrap"><table><thead><tr><th>Disciplina</th><th>Acerto nas primeiras</th><th>Acerto nas últimas</th><th>Variação</th><th>Pendentes</th></tr></thead><tbody>' + linhas + '</tbody></table></div>' +
      '<p class="muted nota">"Primeiras" e "últimas" dividem ao meio os seus simulados e provas que tiveram essa disciplina. Acerto = acertos ÷ itens (brancos contam como não acertados).</p>'
      : '<p class="muted">Faça simulados ou provas para ver a evolução por disciplina.</p>';

    // Tópicos críticos
    var cont = {};
    port.filter(function (x) { return !x.p.rec; }).forEach(function (x) { var kk = chaveEstudo(x.q); cont[kk] = (cont[kk] || 0) + 1; });
    var top = Object.keys(cont).sort(function (a, b) { return cont[b] - cont[a]; }).slice(0, 8);
    $('#evo-criticos').innerHTML = top.length ? '<ol class="criticos">' + top.map(function (kk) {
      return '<li><span><b>' + esc(rotuloChave(kk)) + '</b> <span class="muted">· ' + esc(kk.split('|')[0]) + '</span></span><span class="txt-bad">' + cont[kk] + ' pendente' + (cont[kk] === 1 ? '' : 's') + '</span></li>';
    }).join('') + '</ol>' : '<p class="muted">Nenhum tópico com pendências. 👏</p>';
  }

  document.querySelectorAll('.topnav [data-view]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (S && !$('#view-quiz').hidden && !confirm('Sair da sessão atual? O progresso desta sessão será descartado.')) return;
      clearInterval(tick); S = null; fecharCiclos();
      var v = a.dataset.view;
      if (v === 'portfolio') abrirPortfolio();
      else if (v === 'evolucao') abrirEvolucao();
      else { montarStats(); aplicarModo(); mostrar('home'); }
    });
  });

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

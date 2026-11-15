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

  /* ---------- Utilitários ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
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
      if (filtro === 'ineditas') return !s;
      if (filtro === 'erradas') return s && s.ult === false;
      return true;
    });
  }
  function atualizarInfo() {
    var n = filtrarBanco().length;
    $('#setup-info').textContent = n + (n === 1 ? ' item disponível' : ' itens disponíveis') + ' com esses filtros.';
    $('#setup button[type=submit]').disabled = n === 0;
  }

  function montarStats() {
    var ids = Object.keys(db.q), t = 0, c = 0;
    ids.forEach(function (id) { t += db.q[id].t; c += db.q[id].c; });
    var pct = t ? Math.round((c / t) * 100) : 0;
    var html =
      '<div class="stat-grid">' +
        '<div class="stat"><b>' + ids.length + '<span class="muted" style="font-size:.9rem;font-weight:500"> / ' + BANCO.length + '</span></b><small>itens já resolvidos</small></div>' +
        '<div class="stat"><b>' + (t ? pct + '%' : '—') + '</b><small>taxa de acerto</small></div>' +
      '</div>';
    if (db.hist.length) {
      html += '<h3>Últimas sessões</h3><ul class="hist">' + db.hist.slice(-5).reverse().map(function (h) {
        var d = new Date(h.d);
        return '<li><span>' + d.toLocaleDateString('pt-BR') + ' · ' + (h.modo === 'simulado' ? 'Simulado' : 'Treino') + '</span>' +
          '<span><b>' + (h.c - h.e) + '</b> <span class="muted">líq. (' + h.c + '✓ ' + h.e + '✗ de ' + h.n + ')</span></span></li>';
      }).join('') + '</ul>';
      html += '<button type="button" class="link-btn" id="zerar">Zerar histórico</button>';
    } else {
      html += '<p class="muted">Nenhuma sessão ainda. Seu progresso fica salvo neste navegador.</p>';
    }
    $('#stats').innerHTML = html;
    var z = $('#zerar');
    if (z) z.onclick = function () {
      if (confirm('Apagar todo o histórico e estatísticas salvos neste navegador?')) {
        db = { q: {}, hist: [] }; salvar(); montarStats(); atualizarInfo();
      }
    };
  }

  selDisc.addEventListener('change', function () { montarFontes(); montarTopicos(); montarTemas(); });
  selFonte.addEventListener('change', atualizarInfo);
  selTopico.addEventListener('change', atualizarInfo);
  boxTemas.addEventListener('change', atualizarInfo);
  $('#filtro').addEventListener('change', atualizarInfo);

  $('#setup').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var qtd = +$('#quantidade').value;
    var lista = embaralhar(filtrarBanco());
    if (qtd) lista = lista.slice(0, qtd);
    iniciar(lista, document.querySelector('input[name=modo]:checked').value);
  });

  /* ---------- Sessão ---------- */
  var S = null, tick = null;

  function iniciar(lista, modo) {
    if (!lista.length) return;
    S = { lista: lista, modo: modo, i: 0, resp: {}, revelado: {}, inicio: Date.now(), fim: null };
    $('#timer').hidden = modo !== 'simulado';
    $('#mapa-wrap').hidden = modo !== 'simulado';
    $('#branco').hidden = modo !== 'simulado';
    clearInterval(tick);
    if (modo === 'simulado') {
      tick = setInterval(function () { $('#timer').textContent = fmtTempo(Date.now() - S.inicio); }, 1000);
      $('#timer').textContent = '00:00';
    }
    mostrar('quiz');
    render();
  }

  function render() {
    var q = S.lista[S.i], n = S.lista.length, r = S.resp[q.id];
    $('#contador').textContent = 'Item ' + (S.i + 1) + ' de ' + n;
    $('#progress-bar').style.width = ((S.i + 1) / n * 100) + '%';
    $('#q-tema').textContent = q.tema;
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
        (q.gabarito === 'C' ? 'CERTO' : 'ERRADO') + '</h4><p>' + esc(q.comentario) + '</p>';
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
    salvar();
  }

  function avancar() {
    if (S.i < S.lista.length - 1) { S.i++; render(); }
    else finalizar();
  }

  function finalizar() {
    if (S.modo === 'simulado') {
      var brancos = S.lista.filter(function (q) { return !S.resp[q.id]; }).length;
      var msg = brancos ? 'Você deixou ' + brancos + ' item(ns) em branco. Finalizar mesmo assim?' : 'Finalizar e corrigir o simulado?';
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
      var t = porTema[q.tema] = porTema[q.tema] || { c: 0, n: 0 };
      t.n++;
      if (!r) b++;
      else if (r === q.gabarito) { c++; t.c++; }
      else e++;
    });
    var liq = c - e, n = S.lista.length;
    db.hist.push({ d: Date.now(), modo: S.modo, c: c, e: e, b: b, n: n });
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
        '<p>' + esc(q.enunciado) + '</p><p class="coment">' + esc(q.comentario) + '</p></div>';
    }).join('');

    var erradas = S.lista.filter(function (q) { return S.resp[q.id] && S.resp[q.id] !== q.gabarito; });
    $('#refazer-erradas').disabled = !erradas.length;
    $('#refazer-erradas').onclick = function () { iniciar(embaralhar(erradas), S.modo); };
    mostrar('result');
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
    montarStats(); atualizarInfo(); mostrar('home');
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

  montarDisciplinas();
  montarStats();
})();

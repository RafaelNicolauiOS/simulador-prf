#!/usr/bin/env node
/*
 * Gera data/simulados.js: 20 simulados fixos no formato da prova objetiva PRF 2021
 * (120 itens; distribuição por disciplina da análise da prova de 2021).
 * Uso: node tools/gerar-simulados.js [quantidade=20]
 *
 * Os itens de cada disciplina são distribuídos em rodízio: um item só se repete
 * em outro simulado depois que todos os itens daquela disciplina já foram usados.
 * Em cada simulado, cada disciplina tem metade dos itens Certo e metade Errado
 * (o item ímpar alterna entre os simulados).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const N = +process.argv[2] || 20;
const raiz = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
const ctx = { window: {} };
vm.createContext(ctx);
for (const m of html.matchAll(/<script src="(data\/[^"?]+)/g)) {
  if (m[1].endsWith('simulados.js')) continue;
  vm.runInContext(fs.readFileSync(path.join(raiz, m[1]), 'utf8'), ctx);
}
const BANCO = ctx.window.QUESTOES;

// Distribuição (análise da prova objetiva PRF 2021) — total 120
const BLOCOS = [
  { bloco: 'I', itens: [['Língua Portuguesa', 18], ['Raciocínio Lógico-Matemático', 6], ['Informática', 7], ['Física', 5],
    ['Ética e Cidadania', 6], ['Geopolítica', 5], ['LINGUA', 8]] },
  { bloco: 'II', itens: [['Legislação de Trânsito', 30]] },
  { bloco: 'III', itens: [['Direito Administrativo', 7], ['Direito Constitucional', 7], ['Direito Penal', 5],
    ['Direito Processual Penal', 5], ['Legislação Especial', 6], ['Direitos Humanos', 5]] }
];

// PRNG determinístico (mulberry32) para o resultado ser reprodutível
function rng(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function embaralhar(a, r) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function seedDe(s) { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; }

// Fila em rodízio por disciplina e gabarito
const filas = {};
function fila(disc, gab) {
  const k = disc + '|' + gab;
  if (!filas[k]) {
    const itens = BANCO.filter(q => q.disciplina === disc && q.gabarito === gab).map(q => q.id);
    filas[k] = { ordem: embaralhar(itens, rng(seedDe(k))), pos: 0, voltas: 0 };
  }
  return filas[k];
}
function tirar(disc, gab, n, usados) {
  const f = fila(disc, gab), out = [];
  let guarda = 0;
  while (out.length < n && guarda++ < f.ordem.length * 3) {
    const id = f.ordem[f.pos];
    f.pos++;
    if (f.pos >= f.ordem.length) { f.pos = 0; f.voltas++; }
    if (!usados.has(id)) { usados.add(id); out.push(id); }
  }
  return out;
}

const uso = {};
const simulados = [];
for (let s = 1; s <= N; s++) {
  const sim = { id: 'S' + String(s).padStart(2, '0'), nome: 'Simulado ' + String(s).padStart(2, '0'), itens: [], lingua: {} };
  const r = rng(seedDe(sim.id));
  for (const b of BLOCOS) {
    for (const [discBase, n] of b.itens) {
      const discs = discBase === 'LINGUA' ? ['Língua Inglesa', 'Língua Espanhola'] : [discBase];
      for (const disc of discs) {
        const nC = Math.floor(n / 2) + ((n % 2) && (s % 2) ? 1 : 0);
        const usados = new Set();
        const ids = embaralhar(tirar(disc, 'C', nC, usados).concat(tirar(disc, 'E', n - nC, usados)), r);
        if (ids.length !== n) throw new Error('Itens insuficientes em ' + disc);
        ids.forEach(id => { uso[id] = (uso[id] || 0) + 1; });
        if (discBase === 'LINGUA') sim.lingua[disc] = ids.map(id => ({ id, bloco: b.bloco }));
        else ids.forEach(id => sim.itens.push({ id, bloco: b.bloco }));
      }
    }
  }
  simulados.push(sim);
}

// Relatório de repetição por disciplina
const rel = {};
for (const q of BANCO) {
  const u = uso[q.id] || 0;
  const k = rel[q.disciplina] = rel[q.disciplina] || { banco: 0, usados: 0, max: 0, ocorrencias: 0 };
  k.banco++; if (u) k.usados++; k.max = Math.max(k.max, u); k.ocorrencias += u;
}
console.log('Disciplina'.padEnd(30), 'banco', 'necessários', 'itens usados', 'máx. repetições de um item');
for (const [d, k] of Object.entries(rel)) console.log(d.padEnd(30), String(k.banco).padStart(5), String(k.ocorrencias).padStart(11), String(k.usados).padStart(12), String(k.max).padStart(10));

const compacto = simulados.map(s => ({
  id: s.id, nome: s.nome,
  i: s.itens.map(x => x.id + ':' + x.bloco).join(','),
  ing: s.lingua['Língua Inglesa'].map(x => x.id).join(','),
  esp: s.lingua['Língua Espanhola'].map(x => x.id).join(',')
}));
const out = '/* Gerado por tools/gerar-simulados.js — ' + N + ' simulados fixos no formato da prova objetiva PRF 2021. Não edite à mão. */\n' +
  'window.SIMULADOS = ' + JSON.stringify(compacto, null, 1) + ';\n';
fs.writeFileSync(path.join(raiz, 'data', 'simulados.js'), out);
console.log('\nGerado data/simulados.js com', N, 'simulados.');

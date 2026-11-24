#!/usr/bin/env node
/*
 * Valida o material de estudo (window.ESTUDO) contra o banco de questões.
 * Uso: node tools/validar-estudo.js                → todas as disciplinas
 *      node tools/validar-estudo.js "Física" ...   → só as disciplinas indicadas
 *      node tools/validar-estudo.js --chaves "Física"  → lista as chaves esperadas
 *
 * Chave de cada entrada: "<disciplina>|<topico>" para itens com tópico do edital,
 * ou "<disciplina>|tema:<tema>" para itens antigos sem tópico.
 * Campos obrigatórios: resumo (texto), pontos, macetes, dicas, pegadinhas (listas de textos).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const raiz = path.join(__dirname, '..');
const args = process.argv.slice(2);
const listar = args[0] === '--chaves';
const discs = listar ? args.slice(1) : args;

const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
const ctx = { window: {} };
vm.createContext(ctx);
const scripts = [...html.matchAll(/<script src="(data\/[^"?]+)/g)].map(m => m[1]);
// inclui arquivos de estudo existentes mesmo que ainda não estejam no index.html
for (const f of fs.readdirSync(path.join(raiz, 'data'))) {
  if (f.startsWith('estudo-') && !scripts.includes('data/' + f)) scripts.push('data/' + f);
}
let erros = 0;
for (const s of scripts) {
  if (!fs.existsSync(path.join(raiz, s))) { console.warn('Aviso: arquivo ainda não existe:', s); continue; }
  try { vm.runInContext(fs.readFileSync(path.join(raiz, s), 'utf8'), ctx, { filename: s }); }
  catch (e) { console.error('ERRO ao carregar', s, '\n ', e.message); erros++; }
}
const Q = ctx.window.QUESTOES || [];
const E = ctx.window.ESTUDO || {};
const chave = q => q.disciplina + '|' + (q.topico ? q.topico : 'tema:' + q.tema);
const esperadas = [...new Set(Q.filter(q => !discs.length || discs.includes(q.disciplina)).map(chave))];

if (listar) { esperadas.forEach(k => console.log(k)); process.exit(0); }

let ok = 0;
for (const k of esperadas) {
  const e = E[k];
  if (!e) { console.error('Faltando:', k); erros++; continue; }
  if (typeof e.resumo !== 'string' || e.resumo.length < 80) { console.error('Resumo ausente/curto:', k); erros++; }
  for (const c of ['pontos', 'macetes', 'dicas', 'pegadinhas']) {
    if (!Array.isArray(e[c]) || e[c].length < 2 || e[c].some(x => typeof x !== 'string' || x.length < 15)) {
      console.error('Lista inválida (mín. 2 itens) em', c, ':', k); erros++;
    }
  }
  ok++;
}
const sobrando = Object.keys(E).filter(k => (!discs.length || discs.includes(k.split('|')[0])) && !esperadas.includes(k));
sobrando.forEach(k => console.warn('Aviso: chave sem itens correspondentes no banco:', k));
console.log('Entradas esperadas:', esperadas.length, '| conferidas:', ok);
console.log(erros ? 'FALHOU com ' + erros + ' erro(s).' : 'OK');
process.exit(erros ? 1 : 0);

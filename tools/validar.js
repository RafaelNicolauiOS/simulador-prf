#!/usr/bin/env node
/*
 * Valida arquivos de questões do simulador.
 * Uso: node tools/validar.js data/arquivo1.js [data/arquivo2.js ...]
 *      node tools/validar.js --todos      (todos os scripts carregados em index.html)
 * Verifica: sintaxe, campos obrigatórios, IDs únicos, gabarito C/E,
 * comentário coerente ("Correto." para C, "Errado." para E) e,
 * para itens com "topico", exatamente 5 C e 5 E por tópico.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

let files = process.argv.slice(2);
const raiz = path.join(__dirname, '..');
if (files[0] === '--todos') {
  const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
  files = [...html.matchAll(/<script src="(data\/[^"?]+)/g)].map(m => path.join(raiz, m[1]));
}
if (!files.length) { console.error('Informe os arquivos.'); process.exit(2); }

const ctx = { window: {} };
vm.createContext(ctx);
let erros = 0;
const porArquivo = {};
for (const f of files) {
  const antes = (ctx.window.QUESTOES || []).length;
  try { vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f }); }
  catch (e) { console.error('ERRO de sintaxe/execução em', f, '\n ', e.message); erros++; continue; }
  porArquivo[f] = (ctx.window.QUESTOES || []).slice(antes);
}
const todas = ctx.window.QUESTOES || [];
const ids = new Map();
for (const q of todas) {
  const tag = q.id || JSON.stringify(q).slice(0, 60);
  for (const c of ['id', 'disciplina', 'tema', 'gabarito', 'enunciado', 'comentario']) {
    if (!q[c] || typeof q[c] !== 'string') { console.error('Campo ausente/ inválido', c, 'em', tag); erros++; }
  }
  if (ids.has(q.id)) { console.error('ID duplicado:', q.id); erros++; }
  ids.set(q.id, 1);
  if (q.gabarito !== 'C' && q.gabarito !== 'E') { console.error('Gabarito inválido em', tag); erros++; }
  const pref = q.gabarito === 'C' ? 'Correto' : 'Errado';
  if (q.comentario && !q.comentario.startsWith(pref)) { console.error('Comentário incoerente com gabarito em', tag); erros++; }
  if (q.enunciado && q.enunciado.length < 25) { console.error('Enunciado curto demais em', tag); erros++; }
}
const topicos = {};
for (const q of todas) if (q.topico) {
  const k = q.disciplina + ' | ' + q.topico;
  topicos[k] = topicos[k] || { C: 0, E: 0 };
  topicos[k][q.gabarito]++;
}
for (const [k, v] of Object.entries(topicos)) {
  if (v.C !== 5 || v.E !== 5) { console.error('Tópico desequilibrado (esperado 5C/5E):', k, v); erros++; }
}
for (const [f, qs] of Object.entries(porArquivo)) {
  const c = qs.filter(q => q.gabarito === 'C').length;
  console.log(path.relative(raiz, f) + ': ' + qs.length + ' itens (' + c + ' C / ' + (qs.length - c) + ' E)');
}
console.log('Tópicos com itens por edital:', Object.keys(topicos).length);
console.log(erros ? 'FALHOU com ' + erros + ' erro(s).' : 'OK');
process.exit(erros ? 1 : 0);

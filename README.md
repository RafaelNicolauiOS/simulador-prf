# Simulador PRF — Certo ou Errado

Simulador de questões no estilo **CEBRASPE** (julgamento de itens Certo/Errado) para o concurso da **PRF**.

Cobre **todas as 15 disciplinas** do Edital PRF nº 1/2021: **2.401 itens**, com 10 itens (5 C / 5 E) para cada um dos 215 subtópicos do edital, além de itens adaptados de provas recentes da banca.
Página estática: HTML, CSS e JavaScript puros, sem build.

## Recursos
- **Modo Treino**: gabarito e comentário logo após cada item.
- **Modo Simulado**: cronômetro, folha de respostas, opção de deixar em branco e correção ao final.
- **Nota líquida CEBRASPE**: acertos − erros (em branco não pontua).
- Filtros por assunto, por **origem** (PRF 2021, PC-PE 2024, PF 2025, FUB 2025, SEPLAG-AL 2026, Câmara 2026 ou banco geral), por itens não respondidos e por itens que você errou.
- Página **Relação de matérias** (`relacao.html`): edital de Informática, Direitos Humanos e Direito Constitucional da PRF × incidência nas provas CEBRASPE recentes.
- Desempenho por assunto, revisão comentada e “Refazer erradas”.
- Filtro **Tópico do edital PRF**: 10 itens por subtópico do Edital PRF nº 1/2021, 5 Certo e 5 Errado em cada.
- Validação do banco: `node tools/validar.js --todos`.
- Atalhos: `C` = Certo, `E` = Errado, `→`/`Enter` = próxima, `←` = anterior.
- Progresso salvo no navegador (localStorage).

## Rodar localmente
```bash
python3 -m http.server 8000
```
Depois abra http://localhost:8000.

## Adicionar questões
Edite `data/informatica.js` (banco geral) ou `data/informatica-provas.js` (itens adaptados de provas, com os campos `fonte` e `ref`). O formato está documentado no topo de cada arquivo.
Para outra disciplina, crie `data/<disciplina>.js` no mesmo formato e inclua o `<script>` em `index.html`.

> Os itens são escritos no estilo da banca, para estudo. Os itens com origem em uma prova foram adaptados com redação própria a partir dos assuntos cobrados e não reproduzem o texto oficial.

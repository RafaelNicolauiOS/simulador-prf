# Simulador PRF — Certo ou Errado

Simulador de questões no estilo **CEBRASPE** (julgamento de itens Certo/Errado) para o concurso da **PRF**.

Disciplinas: **Informática** (215 itens, sendo 100 organizados pelos 10 tópicos do edital PRF 2021), **Direitos Humanos** (67 itens) e **Direito Constitucional** (69 itens).
Página estática: HTML, CSS e JavaScript puros, sem build.

## Recursos
- **Modo Treino**: gabarito e comentário logo após cada item.
- **Modo Simulado**: cronômetro, folha de respostas, opção de deixar em branco e correção ao final.
- **Nota líquida CEBRASPE**: acertos − erros (em branco não pontua).
- Filtros por assunto, por **origem** (PRF 2021, PC-PE 2024, PF 2025, FUB 2025, SEPLAG-AL 2026, Câmara 2026 ou banco geral), por itens não respondidos e por itens que você errou.
- Página **Relação de matérias** (`relacao.html`): edital de Informática, Direitos Humanos e Direito Constitucional da PRF × incidência nas provas CEBRASPE recentes.
- Desempenho por assunto, revisão comentada e “Refazer erradas”.
- Filtro **Tópico do edital PRF** (Informática): 10 itens por tópico do Edital PRF nº 1/2021, 5 Certo e 5 Errado em cada.
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

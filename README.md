# Simulador PRF — Certo ou Errado

Simulador de questões no estilo **CEBRASPE** (julgamento de itens Certo/Errado) para o concurso da **PRF**.
Página estática: HTML, CSS e JavaScript puros, sem build.

## Recursos
- **Modo Treino**: gabarito e comentário logo após cada item.
- **Modo Simulado**: cronômetro, folha de respostas, opção de deixar em branco e correção ao final.
- **Nota líquida CEBRASPE**: acertos − erros (em branco não pontua).
- Filtros por assunto, por itens não respondidos e por itens que você errou.
- Desempenho por assunto, revisão comentada e “Refazer erradas”.
- Atalhos: `C` = Certo, `E` = Errado, `→`/`Enter` = próxima, `←` = anterior.
- Progresso salvo no navegador (localStorage).

## Rodar localmente
```bash
python3 -m http.server 8000
```
Depois abra http://localhost:8000.

## Adicionar questões
Edite `data/informatica.js` (o formato está documentado no topo do arquivo).
Para outra disciplina, crie `data/<disciplina>.js` no mesmo formato e inclua o `<script>` em `index.html`.

> As questões são inéditas, elaboradas no estilo da banca para estudo. Não são itens oficiais de provas anteriores.

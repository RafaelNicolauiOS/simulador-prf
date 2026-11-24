/* Material de estudo — RLM e Física. Chave: "<disciplina>|<topico>". */
window.ESTUDO = window.ESTUDO || {};
Object.assign(window.ESTUDO, {

  /* ===================== RACIOCÍNIO LÓGICO-MATEMÁTICO ===================== */

  'Raciocínio Lógico-Matemático|1 Equações do 1º e 2º graus e sistemas lineares': {
    resumo: 'Resolver uma equação é encontrar o valor da incógnita que torna a igualdade verdadeira. Na de 1º grau (ax + b = 0), isola-se x: x = −b/a. Na de 2º grau (ax² + bx + c = 0), usa-se Bhaskara ou, mais rápido, soma e produto das raízes. Sistemas lineares traduzem problemas com duas ou mais grandezas desconhecidas (veículos e eixos, turnos e quilômetros) e são resolvidos por substituição ou por adição/eliminação.',
    pontos: [
      '1º grau: ax + b = 0 ⇒ x = −b/a. Ex.: 3x − 12 = 2x + 8 ⇒ x = 20.',
      'Bhaskara: Δ = b² − 4ac; x = (−b ± √Δ)/(2a). Δ > 0: duas raízes reais distintas; Δ = 0: uma raiz dupla; Δ < 0: nenhuma raiz real.',
      'Soma das raízes = −b/a; produto = c/a. Ex.: 2x² − 8x + 6 = 0 ⇒ soma 4, produto 3 (raízes 1 e 3).',
      'Sistema 2×2 por substituição: isole uma variável numa equação e substitua na outra.',
      'Por adição: multiplique as equações para que uma variável se cancele ao somar. Ex.: x + y = 10 e x − y = 4 ⇒ 2x = 14 ⇒ x = 7, y = 3.',
      'Problema dos eixos: 50 veículos (2 ou 3 eixos) e 120 eixos ⇒ se todos tivessem 2 eixos seriam 100; os 20 eixos extras são de 20 veículos pesados.',
      'Sistema 3×3 em escada: resolva a equação mais simples primeiro e vá substituindo. Ex.: x + y + z = 6, x − y = 1, y − z = 1 ⇒ y = 2, x = 3, z = 1.',
      'Equação incompleta ax² + c = 0 ⇒ x = ±√(−c/a); ax² + bx = 0 ⇒ x(ax + b) = 0 ⇒ x = 0 ou x = −b/a.'
    ],
    macetes: [
      'Método da suposição (“todos são do tipo menor”): a diferença do total dividida pela diferença unitária dá a quantidade do tipo maior. Serve para eixos, rodas, notas de valores diferentes.',
      'Soma e produto evitam Bhaskara: procure dois números com soma −b/a e produto c/a. x² − 5x + 6 = 0 ⇒ 2 e 3.',
      'Divisão com diferença: “84 km, o segundo fez 12 km a mais” ⇒ primeiro = (84 − 12)/2 = 36 km.',
      'Teste a alternativa: em item Certo/Errado, substituir o valor afirmado na equação costuma ser mais rápido que resolvê-la.'
    ],
    dicas: [
      'A banca apresenta o resultado pronto (“foram fiscalizados 20 veículos pesados”): substitua e confira as duas condições do enunciado.',
      'Itens sobre raízes pedem soma, produto, sinal do Δ ou número de soluções reais — memorize −b/a e c/a.',
      'Traduza o português com cuidado: “o triplo de um número, diminuído de 12” é 3x − 12; “o triplo da diferença” seria 3(x − 12).',
      'Em sistemas com três equações, some todas quando os coeficientes forem simétricos: muitas vezes surge x + y + z direto.'
    ],
    pegadinhas: [
      'Esquecer o sinal na soma das raízes: é −b/a, não b/a. Em x² − 7x + 10 = 0 a soma é 7.',
      'Dividir os dois lados por x e perder a raiz x = 0 em equações como x² = 5x (raízes 0 e 5).',
      'Item que pede o valor de uma variável, mas o candidato responde com a outra (pesados × leves). Releia o que foi perguntado.',
      'Afirmar que Δ < 0 significa “raízes negativas”: significa que não há raízes reais.'
    ]
  },

  'Raciocínio Lógico-Matemático|2.1 Análise gráfica de funções': {
    resumo: 'Analisar o gráfico de uma função é ler, a partir da curva, onde ela corta os eixos, onde cresce ou decresce, seus valores máximo e mínimo e seu sinal. Na função afim o gráfico é uma reta; na quadrática, uma parábola cujo vértice concentra o máximo ou o mínimo. A interseção com o eixo x (abscissas) vem de f(x) = 0 e com o eixo y (ordenadas) vem de x = 0. Saber ler esses elementos permite julgar afirmações sem desenhar nada.',
    pontos: [
      'Raiz/zero: ponto em que o gráfico corta o eixo x (f(x) = 0). Ex.: f(x) = 2x − 6 corta em (3, 0).',
      'Corte no eixo y: ponto (0, f(0)). Na afim f(x) = ax + b é (0, b); na quadrática é (0, c).',
      'Afim: a > 0 crescente, a < 0 decrescente, a = 0 constante. f(x) = −3x + 1 é decrescente em todo ℝ.',
      'Parábola: a > 0 concavidade para cima (tem mínimo); a < 0 para baixo (tem máximo).',
      'Vértice: xv = −b/(2a); yv = −Δ/(4a) ou simplesmente f(xv). Ex.: f(x) = −x² + 6x ⇒ xv = 3, yv = 9 (máximo).',
      'f(x) = x² − 9 corta o eixo x em −3 e 3, pontos que distam 6 unidades.',
      'Módulo: f(x) = |x − k| tem gráfico em “V”, com mínimo 0 em x = k.',
      'Exponencial a^x passa por (0, 1) e não toca o eixo x; logarítmica logₐ x passa por (1, 0) e só existe para x > 0.'
    ],
    macetes: [
      'Sinal de a diz o “humor” da parábola: a positivo sorri (∪, mínimo), a negativo fica triste (∩, máximo).',
      'O vértice fica exatamente no meio das raízes: xv = (x₁ + x₂)/2. Em −x² + 6x, raízes 0 e 6 ⇒ xv = 3.',
      'Distância entre as raízes = √Δ/|a|. Em x² − 9: √36/1 = 6.',
      'Para saber se o gráfico passa por um ponto (p, q), basta checar se f(p) = q.'
    ],
    dicas: [
      'O CEBRASPE costuma juntar duas afirmações (concavidade E valor máximo): as duas precisam estar certas.',
      'Ao ler gráficos, verifique se a pergunta é sobre o valor de x (abscissa) ou de f(x) (ordenada) no ponto de máximo.',
      'Intervalos de crescimento da parábola mudam no vértice: a < 0 cresce antes de xv e decresce depois.'
    ],
    pegadinhas: [
      'Confundir abscissa (eixo x) com ordenada (eixo y): “intercepta o eixo das abscissas” significa f(x) = 0.',
      'Dizer que o valor máximo de −x² + 6x é 3: 3 é o x do vértice; o valor máximo é f(3) = 9.',
      'Achar que toda função com a > 0 é crescente em todo o domínio — vale para a afim, não para a parábola.',
      'Afirmar que uma exponencial corta o eixo x: ela se aproxima dele, mas nunca o toca.'
    ]
  },

  'Raciocínio Lógico-Matemático|2.2 Funções afim, quadrática, exponencial e logarítmica': {
    resumo: 'As quatro famílias de funções do edital têm leis e propriedades próprias. A afim f(x) = ax + b varia a taxa constante; a quadrática f(x) = ax² + bx + c tem gráfico parabólico; a exponencial f(x) = k · a^x multiplica por a a cada unidade de x; e a logarítmica é a inversa da exponencial: logₐ b = x ⇔ a^x = b. A banca cobra cálculo de valores, propriedades de logaritmos e potências.',
    pontos: [
      'Calcular valor numérico: substitua x. f(x) = 3x + 2 ⇒ f(4) = 14; g(x) = 2 · 3^x ⇒ g(2) = 18.',
      'Definição de log: logₐ b = x ⇔ a^x = b (a > 0, a ≠ 1, b > 0). log₂ 64 = 6, pois 2⁶ = 64.',
      'Log base 10: log 1.000 = 3; log 0,01 = −2; log 1 = 0 em qualquer base.',
      'Propriedades: log(a·b) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n · log a.',
      'Mudança de base: logₐ b = log b / log a.',
      'Potências: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ.',
      'Exponencial crescente se a > 1 e decrescente se 0 < a < 1; o mesmo vale para a logarítmica.',
      'Taxa da afim: a = Δy/Δx. Se f(1) = 5 e f(3) = 11, a = 6/2 = 3.'
    ],
    macetes: [
      'Log é “o expoente que falta”: log₃ 27 pergunta “3 elevado a quanto dá 27?” ⇒ 3.',
      'Em base 10, conte os zeros: log 10ⁿ = n; log 0,001 = −3 (três casas decimais).',
      'Valores úteis: log 2 ≈ 0,301; log 3 ≈ 0,477; log 5 = 1 − log 2 ≈ 0,699.',
      'Potências de 2 de cor até 2¹⁰ = 1.024 economizam tempo em log₂ e em meia-vida.'
    ],
    dicas: [
      'Itens combinam logs: log 1.000 + log 0,01 = 3 + (−2) = 1. Calcule cada parcela separadamente.',
      'Diferença de logs em bases distintas: log₃ 27 − log₂ 8 = 3 − 3 = 0 — não tente juntar bases diferentes.',
      'Em função exponencial com coeficiente, eleve primeiro e multiplique depois: 2 · 3² = 18, não 6² = 36.'
    ],
    pegadinhas: [
      'log(a + b) não é log a + log b. A propriedade só vale para produto.',
      'Calcular 2 · 3^x como (2 · 3)^x. A potência aplica-se só à base 3.',
      'Achar que log de número entre 0 e 1 é positivo: log 0,01 = −2.',
      'Esquecer a condição de existência: log de zero ou de número negativo não existe nos reais.'
    ]
  },

  'Raciocínio Lógico-Matemático|2.3 Aplicações de funções': {
    resumo: 'Nas aplicações, a função modela uma situação real: custo com parte fixa e parte variável (afim), lançamento vertical, lucro e receita (quadrática) e decaimento ou crescimento percentual constante (exponencial). O trabalho é identificar o tipo de função, montar ou interpretar a lei e calcular o valor pedido. Na quadrática, máximo de lucro, receita ou altura ocorre no vértice.',
    pontos: [
      'Custo afim: C(x) = fixo + variável · x. Guincho com taxa R$ 120 + R$ 4/km: 35 km ⇒ 120 + 140 = R$ 260.',
      'Altura h(t) = 20t − 5t²: vértice em t = −20/(2 · (−5)) = 2 s, altura máxima h(2) = 20 m.',
      'Lucro L(x) = −x² + 40x − 300: xv = 20; L(20) = −400 + 800 − 300 = 100 (mil reais).',
      'Receita R(p) = p(1.000 − 50p) = 1.000p − 50p²: pv = 10; R(10) = 10 · 500 = R$ 5.000.',
      'Meia-vida: Q(t) = Q₀ · (1/2)^(t/T). 800 mg com T = 6 h, após 18 h (3 meias-vidas): 800 → 400 → 200 → 100 mg.',
      'Crescimento a taxa fixa i: Q(t) = Q₀ · (1 + i)^t. 10% ao ano por 2 anos ⇒ fator 1,21.',
      'Ponto de equilíbrio (receita = custo): iguale as funções e resolva a equação.'
    ],
    macetes: [
      'Raízes ajudam a achar o vértice: R(p) = p(1.000 − 50p) zera em p = 0 e p = 20 ⇒ máximo em p = 10.',
      'Meia-vida: conte quantas meias-vidas cabem no tempo e divida por 2 esse número de vezes.',
      'Fator multiplicativo: “cai 20% ao ano” ⇒ multiplique por 0,8 a cada ano; “sobe 5%” ⇒ por 1,05.'
    ],
    dicas: [
      'O item costuma afirmar o valor máximo e o ponto em que ocorre: confira os dois (“20 m no instante 2 s”).',
      'Em custo afim, a taxa fixa é cobrada uma vez só, independentemente da distância.',
      'Leia as unidades: lucro “em milhares de reais” com x “em milhares de unidades” — 100 significa R$ 100 mil.'
    ],
    pegadinhas: [
      'Confundir o instante do máximo com o valor máximo (t = 2 s versus h = 20 m).',
      'Em decaimento, subtrair metade da quantidade inicial a cada período (decaimento linear) em vez de dividir a quantidade atual por 2.',
      'Multiplicar a taxa fixa pela quantidade, como se fosse custo por unidade.'
    ]
  },

  'Raciocínio Lógico-Matemático|3.1 Razão e proporção': {
    resumo: 'Razão é o quociente entre duas grandezas (a/b) e indica quantas vezes uma contém a outra. Proporção é a igualdade entre duas razões, a/b = c/d, na qual o produto dos meios é igual ao produto dos extremos. A divisão proporcional reparte um total em partes diretamente ou inversamente proporcionais a números dados. É a base de regra de três, porcentagem e escalas.',
    pontos: [
      'Propriedade fundamental: a/b = c/d ⇔ a · d = b · c.',
      'Razão aplicada: autuados/fiscalizados = 3/20 com 400 fiscalizados ⇒ 400 · 3/20 = 60 autuados.',
      'Soma das partes: se a/b = 3/5 e a + b = 64, cada “parte” vale 64/8 = 8 ⇒ a = 24, b = 40.',
      'Constante de proporcionalidade: a/3 = b/5 = c/7 = k e a + b + c = 75 ⇒ 15k = 75 ⇒ k = 5 ⇒ c = 35.',
      'Divisão inversamente proporcional a 2 e 3: divida diretamente proporcional a 1/2 e 1/3 (ou a 3 e 2). 150 ⇒ 90 e 60.',
      'Taxas: 36 acidentes em 240 mil veículos ⇒ 36/2,4 = 15 por 100 mil veículos.',
      'Grandezas diretamente proporcionais: razão constante; inversamente proporcionais: produto constante.'
    ],
    macetes: [
      'Método das partes: some os termos da razão, divida o total e multiplique de volta.',
      'Inversa com dois números: troque-os de lugar. Inversamente a 2 e 3 = diretamente a 3 e 2.',
      'Para comparar razões, use frações equivalentes ou multiplicação cruzada (evita dividir).'
    ],
    dicas: [
      'O CEBRASPE pergunta pela parte “correspondente ao número 2” numa divisão inversa: a maior parte vai para o menor número.',
      'Taxas por 100 mil, por mil ou por 100 são razões: monte a regra de três com o total dado.',
      'Confira se a razão é parte/parte (3 para 5) ou parte/todo (3 em 8): elas levam a resultados diferentes.'
    ],
    pegadinhas: [
      'Em divisão inversa, dar a parte maior para o número maior (como se fosse direta).',
      'Ler a razão 3/5 como “3 de cada 5 do total” quando o enunciado diz a/b (parte para parte).',
      'Erro de escala na taxa: 36 em 240.000 é 15 por 100.000, não 1,5.'
    ]
  },

  'Raciocínio Lógico-Matemático|3.2 Regra de três simples e composta': {
    resumo: 'A regra de três resolve problemas com grandezas proporcionais quando um dos valores é desconhecido. Na simples há duas grandezas; na composta, três ou mais. O passo decisivo é classificar cada grandeza em relação à incógnita: diretamente proporcional (aumenta junto) ou inversamente proporcional (uma aumenta, a outra diminui). Depois, monta-se a proporção invertendo as razões inversas.',
    pontos: [
      'Simples direta: 450 veículos em 90 min ⇒ em 40 min: 450 · 40/90 = 200 veículos.',
      'Simples inversa: 3 bombas enchem em 10 h ⇒ 5 bombas: 3 · 10/5 = 6 h (produto constante: 30 bomba·hora).',
      'Composta: compare cada grandeza com a incógnita, mantendo as demais fixas.',
      'Ex.: 6 agentes, 240 veículos, 4 h. Com 9 agentes e 4 h: 240 · 9/6 = 360 veículos.',
      'Ex.: 4 máquinas, 6 h/dia, 10 dias ⇒ 12 km. 6 máquinas, 8 h/dia, 10 dias ⇒ 12 · (6/4) · (8/6) = 24 km.',
      'Ex.: 8 agentes, 6 h/dia, 5 dias ⇒ 1.200 autos. 10 agentes, 8 h/dia ⇒ dias = 5 · (8/10) · (6/8) = 3 dias.',
      'Converta tempos para a mesma unidade antes de montar (1 h 30 min = 90 min).'
    ],
    macetes: [
      'Método do “trabalho total”: produção é proporcional a (trabalhadores × horas/dia × dias). Iguale “esforço por unidade produzida”.',
      'Mais máquinas, menos tempo: inversa. Mais tempo, mais produção: direta.',
      'Na composta, a incógnita = valor conhecido × (fator de cada grandeza), com fator > 1 quando a mudança aumenta a incógnita e < 1 quando diminui.',
      'Simplifique as frações antes de multiplicar: 8/10 · 6/8 = 6/10.'
    ],
    dicas: [
      'Itens trazem três ou quatro grandezas e afirmam o resultado: verifique pela constância de produção/(homens · horas · dias).',
      'Pergunte-se sempre: “se esta grandeza dobrar, a incógnita dobra ou cai à metade?”.',
      'Cuidado com dificuldade e eficiência: tarefa mais difícil exige mais tempo (direta com o tempo).'
    ],
    pegadinhas: [
      'Tratar tudo como direta: com mais bombas o tempo diminui (3 bombas 10 h ⇒ 5 bombas 6 h, e não 16,7 h).',
      'Misturar minutos e horas (1 h 30 min não é 1,3 h; é 1,5 h).',
      'Classificar a grandeza comparando-a com outra grandeza conhecida em vez de compará-la com a incógnita.'
    ]
  },

  'Raciocínio Lógico-Matemático|4 Porcentagem': {
    resumo: 'Porcentagem é uma razão de denominador 100: p% = p/100. Calcular p% de um valor é multiplicá-lo por p/100. Variações percentuais usam fatores multiplicativos: aumento de i% multiplica por (1 + i) e desconto de i% multiplica por (1 − i). Aumentos e descontos sucessivos se compõem multiplicando os fatores, nunca somando as taxas.',
    pontos: [
      'p% de V = V · p/100. 30% de 1.200 = 360.',
      'Variação percentual = (final − inicial)/inicial. De R$ 6,00 para R$ 6,30: 0,30/6 = 5%.',
      'Desconto de 20%: × 0,8. R$ 880 ⇒ 880 · 0,8 = R$ 704.',
      'Aumentos sucessivos de 20%: 1,2 · 1,2 = 1,44 ⇒ aumento total de 44%.',
      'Aumento de 10% seguido de desconto de 10%: 1,1 · 0,9 = 0,99 ⇒ perda de 1%.',
      'Porcentagem de porcentagem: 40% de 35% de 80 mil = 0,4 · 0,35 · 80.000 = 11.200.',
      'Valor original a partir do final: se após aumento de 25% o preço é 150, o original é 150/1,25 = 120.'
    ],
    macetes: [
      'Aumento de 20% = multiplicar por 1,2; desconto de 15% = multiplicar por 0,85.',
      '10% = dividir por 10; 5% = metade de 10%; 1% = dividir por 100. Monte qualquer taxa com esses blocos.',
      'x% de y = y% de x: 8% de 50 = 50% de 8 = 4.',
      'Pontos percentuais × porcentagem: de 10% para 12% subiu 2 pontos percentuais, mas 20% em termos relativos.'
    ],
    dicas: [
      'Itens de taxas sucessivas quase sempre testam a soma indevida das taxas: multiplique os fatores.',
      'Para variação percentual, divida pelo valor inicial (o “de onde partiu”).',
      'Em cadeias (“35% são mulheres e, destas, 40%...”), multiplique as taxas em sequência.'
    ],
    pegadinhas: [
      'Somar taxas sucessivas: dois aumentos de 20% não são 40%, são 44%.',
      'Achar que aumento de x% e desconto de x% se anulam: o resultado é sempre uma perda de x²/100 %.',
      'Calcular a variação dividindo pelo valor final: de 6,00 para 6,30 é 5%, não 4,76%.',
      'Desfazer um aumento de 25% com desconto de 25%: o correto é desconto de 20% (1/1,25 = 0,8).'
    ]
  },

  'Raciocínio Lógico-Matemático|5.1 Sequências numéricas': {
    resumo: 'Uma sequência numérica é uma lista ordenada de números que segue uma lei de formação. Essa lei pode ser um termo geral (aₙ em função de n), uma recorrência (cada termo calculado a partir do anterior) ou um padrão observável nas diferenças ou razões entre termos. O objetivo é descobrir a regra e aplicá-la para obter termos ou somas.',
    pontos: [
      'Termo geral: aₙ = n² + 1 gera 2, 5, 10, 17, 26, 37, ...',
      'Diferenças sucessivas: se as diferenças crescem de forma constante (3, 5, 7, 9), a sequência é quadrática.',
      'Razão constante: 3, 6, 12, 24, ... (× 2) ⇒ 7º termo = 3 · 2⁶ = 192.',
      'Recorrência: a₁ = 2 e aₙ₊₁ = 3aₙ − 1 ⇒ 2, 5, 14, 41 (a₄ = 41).',
      'Quadrados: 1 + 4 + 9 + 16 + 25 = 55 (soma dos 5 primeiros).',
      'Passo fixo: 12, 19, 26, ... (de 7 em 7) ⇒ 10º termo = 12 + 9 · 7 = 75.',
      'Sequências alternadas: separe termos de posição ímpar e par e analise cada uma.'
    ],
    macetes: [
      'Primeiro teste: diferença constante (PA)? Razão constante (PG)? Diferenças das diferenças constantes (quadrática)?',
      'Para o termo n de sequência com passo fixo, some (n − 1) passos ao primeiro, não n passos.',
      'Soma dos n primeiros quadrados: n(n + 1)(2n + 1)/6. Para n = 5: 5 · 6 · 11/6 = 55.',
      'Sequências de letras e figuras: transforme em números (posição no alfabeto, número de lados) e procure o padrão.'
    ],
    dicas: [
      'Recorrências devem ser calculadas termo a termo, com atenção aos índices (a₄ exige três aplicações a partir de a₁).',
      'O CEBRASPE costuma afirmar o “próximo termo” ou o “n-ésimo termo”: confira contando as posições.',
      'Se o enunciado dá o termo geral, não procure padrão: apenas substitua n.'
    ],
    pegadinhas: [
      'Erro de contagem de posições (off-by-one): 10º termo com passo 7 a partir de 12 é 75, não 82.',
      'Assumir que uma sequência é PA só porque os primeiros termos parecem crescer uniformemente; confira pelo menos três diferenças.',
      'Na recorrência, aplicar a regra sobre o índice em vez de sobre o termo anterior.'
    ]
  },

  'Raciocínio Lógico-Matemático|5.2 Progressão aritmética e geométrica': {
    resumo: 'A progressão aritmética (PA) soma uma razão constante r a cada termo; a progressão geométrica (PG) multiplica por uma razão constante q. Ambas têm fórmulas para o termo geral e para a soma de termos, e a PG com |q| < 1 tem soma infinita finita. Problemas de marcos quilométricos igualmente espaçados são PA; crescimentos ou quedas pela metade, pelo dobro ou por taxa fixa são PG.',
    pontos: [
      'PA – termo geral: aₙ = a₁ + (n − 1) · r. Em 7, 12, ..., 102: 102 = 7 + (n − 1) · 5 ⇒ n = 20.',
      'PA – soma: Sₙ = (a₁ + aₙ) · n/2. 5, 9, 13, ... (10 termos): a₁₀ = 41; S = 46 · 5 = 230.',
      'PA – interpolação: 10 postos do km 30 ao km 210 ⇒ 9 intervalos ⇒ r = 180/9 = 20 km.',
      'PG – termo geral: aₙ = a₁ · qⁿ⁻¹. 640 caindo à metade por 4 anos: 640 · (1/2)⁴ = 40.',
      'PG – soma finita: Sₙ = a₁(qⁿ − 1)/(q − 1). 1 + 2 + 4 + ... + 2⁹ = 1.023.',
      'PG – soma infinita (|q| < 1): S = a₁/(1 − q). 8 + 4 + 2 + 1 + ... = 8/(1/2) = 16.',
      'Termo médio: na PA, b = (a + c)/2; na PG, b² = a · c.'
    ],
    macetes: [
      'n termos têm n − 1 intervalos: postos, estacas e marcos sempre pedem (n − 1).',
      'Soma de PA = média do primeiro com o último × número de termos.',
      'Termos equidistantes dos extremos têm a mesma soma na PA (a₁ + aₙ = a₂ + aₙ₋₁).',
      'Soma infinita de PG decrescente: primeiro termo dividido por “1 menos a razão”.'
    ],
    dicas: [
      'Distinguir PA de PG é o primeiro passo: “de 7 em 7 km” é PA; “cai à metade” é PG.',
      'Itens com “após n anos” na PG: conte os períodos (após 4 anos ⇒ multiplicar 4 vezes pela razão).',
      'Para contar termos de uma PA, use n = (aₙ − a₁)/r + 1.'
    ],
    pegadinhas: [
      'Dividir a distância total pelo número de postos em vez do número de intervalos (180/10 = 18 é errado; correto 180/9 = 20).',
      'Usar n em vez de n − 1 no expoente da PG ou no termo geral da PA.',
      'Aplicar a soma infinita a PG com |q| ≥ 1, que não converge.'
    ]
  },

  'Raciocínio Lógico-Matemático|6 Contagem, probabilidade e estatística': {
    resumo: 'A contagem usa o princípio multiplicativo: se uma escolha tem m opções e outra, independente, n opções, há m · n possibilidades. Quando a ordem importa (funções distintas, senhas) usa-se arranjo/permutação; quando não importa (comissões, grupos) usa-se combinação. Probabilidade é casos favoráveis sobre casos possíveis (equiprováveis). Na estatística descritiva, média, moda e mediana resumem os dados.',
    pontos: [
      'Princípio multiplicativo: senhas de 4 dígitos distintos de 0 a 9: 10 · 9 · 8 · 7 = 5.040.',
      'Arranjo (ordem importa): A(n, p) = n!/(n − p)!. Motorista e comandante entre 6: 6 · 5 = 30.',
      'Combinação (ordem não importa): C(n, p) = n!/[p!(n − p)!]. 3 agentes entre 8: C(8, 3) = 56.',
      'Permutação: n! ; com repetições: n!/(a! b! ...). Anagramas de ARARA: 5!/(3! 2!) = 10.',
      'Probabilidade: P = favoráveis/possíveis. 2 brancas de 5B e 3P sem reposição: (5/8)(4/7) = 5/14.',
      'Evento complementar: P(não A) = 1 − P(A). “Pelo menos um” costuma sair mais rápido pelo complemento.',
      'Eventos independentes: P(A e B) = P(A) · P(B); mutuamente exclusivos: P(A ou B) = P(A) + P(B).',
      'Moda: valor mais frequente (em 3, 5, 5, 7, 8, 5, 9 a moda é 5). Mediana: valor central após ordenar.'
    ],
    macetes: [
      'Pergunta-chave: “se eu trocar a ordem, muda o resultado?” Sim ⇒ arranjo; não ⇒ combinação.',
      'C(n, p) = C(n, n − p): C(10, 8) = C(10, 2) = 45.',
      'Sem reposição: multiplique frações reduzindo numerador e denominador a cada retirada.',
      'Restrições primeiro: preencha as posições com condição (não começar por zero, ser par) antes das livres.'
    ],
    dicas: [
      'Termos como “funções distintas”, “ordem”, “senha”, “placa” sinalizam arranjo; “grupo”, “comissão”, “equipe” sinalizam combinação.',
      'Itens de probabilidade com urnas: verifique se é com ou sem reposição — muda o denominador da segunda retirada.',
      'A banca mistura estatística no mesmo tópico: tenha prontas as definições de moda, média e mediana.'
    ],
    pegadinhas: [
      'Usar combinação quando os cargos são distintos (motorista e comandante): são 30 maneiras, não 15.',
      'Somar probabilidades de eventos que devem ocorrer juntos (o “e” multiplica).',
      'Calcular senhas com dígitos distintos como 10⁴ = 10.000, ignorando a restrição de não repetir.',
      'Mediana sem ordenar os dados antes.'
    ]
  },

  'Raciocínio Lógico-Matemático|7.1 Leitura de tabelas e gráficos': {
    resumo: 'A interpretação de tabelas e gráficos exige extrair corretamente os valores e fazer contas simples com eles: participações percentuais, variações, diferenças e ângulos de setores. Tabelas de dupla entrada cruzam duas variáveis (sexo e resultado, por exemplo). Gráficos de barras ou linhas mostram evolução; gráficos de setores mostram a divisão de um todo em 360°.',
    pontos: [
      'Participação: parte/total. Fevereiro com 150 de 500 acidentes (120 + 150 + 90 + 140) ⇒ 30%.',
      'Setor circular: ângulo = percentual × 360°. 35% ⇒ 0,35 · 360° = 126°.',
      'Variação percentual entre anos: (final − inicial)/inicial. De 240 para 330 ⇒ 90/240 = 37,5%.',
      'Diferença entre categorias percentuais: (45% − 20%) de 2.400 = 25% de 2.400 = 600.',
      'Dupla entrada: some linhas e colunas para obter totais. Aprovados 120 + 90 = 210 de 350 ⇒ 60%.',
      'Percentual dentro de um grupo: mulheres aprovadas/total de mulheres = 90/150 = 60%.',
      'Média por período: total dividido pelo número de períodos.'
    ],
    macetes: [
      'Cada 1% do gráfico de setores vale 3,6°; 25% = 90°; 50% = 180°.',
      'Antes de calcular, monte o total da tabela: quase todo item depende dele.',
      'Diferença entre percentuais do mesmo total: subtraia as taxas primeiro e aplique uma vez só.'
    ],
    dicas: [
      'Identifique o “todo” da pergunta: percentual sobre o total geral ou sobre uma linha/coluna específica.',
      'Em itens de variação, determine o ano-base (o inicial) — ele é o denominador.',
      'Verifique a unidade e a escala do eixo (milhares, centenas) antes de afirmar valores absolutos.'
    ],
    pegadinhas: [
      'Confundir variação percentual com diferença em pontos percentuais.',
      'Calcular a variação usando o valor final como base: de 240 para 330 é 37,5%, não 27,3%.',
      'Em tabela de dupla entrada, usar o total geral quando a pergunta é “entre as mulheres” ou “entre os homens”.'
    ]
  },

  'Raciocínio Lógico-Matemático|7.2 Médias e desvios': {
    resumo: 'Medidas de tendência central (médias, mediana, moda) indicam um valor típico dos dados; medidas de dispersão (desvio médio, variância, desvio padrão) indicam o quanto os dados se afastam da média. A média aritmética é a soma dividida pela quantidade; a média harmônica é a correta para velocidades em trechos iguais. Somar uma constante aos dados desloca a média, mas não altera a dispersão.',
    pontos: [
      'Média aritmética: (4 + 8 + 10 + 14)/4 = 9.',
      'Média ponderada: Σ(valor · peso)/Σ(pesos).',
      'Velocidade média em trechos iguais (ida e volta): média harmônica 2 · v₁ · v₂/(v₁ + v₂). 60 e 40 km/h ⇒ 4.800/100 = 48 km/h.',
      'Desvio médio absoluto: média de |xᵢ − média|. Em 1, 3, 5, 7, 9 (média 5): (4 + 2 + 0 + 2 + 4)/5 = 2,4.',
      'Variância populacional: média dos quadrados dos desvios. Em 2, 4, 6, 8 (média 5): (9 + 1 + 1 + 9)/4 = 5.',
      'Desvio padrão = √variância; tem a mesma unidade dos dados.',
      'Somar constante k: média + k, dispersão inalterada. Multiplicar por k: média × k, desvio padrão × |k|, variância × k².',
      'Variância amostral divide por n − 1 em vez de n.'
    ],
    macetes: [
      'Atalho da variância: média dos quadrados − quadrado da média. Em 2, 4, 6, 8: (4 + 16 + 36 + 64)/4 − 25 = 30 − 25 = 5.',
      'Ida e volta com velocidades diferentes: a média é sempre MENOR que a média aritmética das velocidades.',
      'Dados simétricos em torno de um valor: esse valor é média e mediana ao mesmo tempo.'
    ],
    dicas: [
      'O CEBRASPE adora a velocidade média de ida e volta: use 2v₁v₂/(v₁ + v₂), nunca (v₁ + v₂)/2.',
      'Itens conceituais sobre propriedades (somar ou multiplicar constantes) são frequentes — memorize o efeito em cada medida.',
      'Verifique se a variância pedida é populacional (÷ n) ou amostral (÷ n − 1).'
    ],
    pegadinhas: [
      'Responder 50 km/h (média aritmética) para ida a 60 e volta a 40 km/h: o correto é 48 km/h.',
      'Dizer que somar 10 a todos os dados aumenta o desvio padrão em 10: ele não muda.',
      'Esquecer o módulo no desvio médio (a soma dos desvios com sinal é sempre zero).',
      'Confundir variância com desvio padrão (um é o quadrado do outro).'
    ]
  },

  'Raciocínio Lógico-Matemático|8 Teoria dos conjuntos': {
    resumo: 'Conjuntos agrupam elementos e se relacionam por união (∪), interseção (∩), diferença (−) e complementar. Os problemas típicos usam diagramas de Venn com quantidades, e o princípio da inclusão-exclusão evita contar duas vezes quem pertence a mais de um conjunto. Também se cobram relações de inclusão (⊂) e o número de subconjuntos.',
    pontos: [
      'Inclusão-exclusão (2 conjuntos): n(A ∪ B) = n(A) + n(B) − n(A ∩ B). 120 + 80 − 30 = 170.',
      '3 conjuntos: n(A∪B∪C) = n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C).',
      'Ex.: 50 + 40 + 30 − 15 − 10 − 8 + 5 = 92 usam alguma rodovia; de 100, 8 não usam nenhuma.',
      'Número de subconjuntos de um conjunto com n elementos: 2ⁿ. Com 5 elementos: 32.',
      'Complementar: n(Aᶜ) = n(U) − n(A). 200 − 140 = 60.',
      'Igualdade: se A ⊂ B e B ⊂ A, então A = B. O conjunto vazio é subconjunto de qualquer conjunto.',
      'Diferença A − B: elementos de A que não estão em B; n(A − B) = n(A) − n(A ∩ B).'
    ],
    macetes: [
      'No diagrama de Venn, preencha de dentro para fora: primeiro a interseção tripla, depois as duplas, depois o “só A”.',
      '“Somente A” = n(A) − interseções com os outros + interseção tripla (para não descontá-la duas vezes).',
      'Subconjuntos próprios: 2ⁿ − 1 (exclui o próprio conjunto).'
    ],
    dicas: [
      'Diferencie “pelo menos uma” (união), “ambas” (interseção) e “apenas uma” (união menos interseção).',
      'Em pesquisas, nenhuma = total − união. Sempre calcule a união antes.',
      'Símbolos: ∈ relaciona elemento e conjunto; ⊂ relaciona dois conjuntos. A banca troca um pelo outro.'
    ],
    pegadinhas: [
      'Somar os conjuntos sem descontar a interseção (120 + 80 = 200 em vez de 170).',
      'Na fórmula de três conjuntos, esquecer de somar de volta a interseção tripla.',
      'Dizer que um conjunto de n elementos tem 2n subconjuntos (são 2ⁿ).',
      'Confundir “apenas A e B” com “A e B” (o segundo inclui quem está nos três).'
    ]
  },

  'Raciocínio Lógico-Matemático|9.1 Escalas': {
    resumo: 'Escala é a razão entre uma medida no desenho e a medida real correspondente, na mesma unidade: E = d/D. A escala 1:500.000 significa que 1 cm no mapa equivale a 500.000 cm (5 km) no terreno. Para áreas, a razão é o quadrado da escala linear; para volumes, o cubo. A conversão correta de unidades é o centro de quase todos os itens.',
    pontos: [
      '1:500.000 ⇒ 1 cm = 5 km. 4 cm ⇒ 20 km.',
      'Encontrar a escala: 12 cm representam 36 km = 3.600.000 cm ⇒ 1:300.000.',
      'Distância no mapa: 60 km = 6.000.000 cm; em 1:250.000 ⇒ 6.000.000/250.000 = 24 cm.',
      'Áreas: escala ao quadrado. Em 1:1.000, 1 cm² do desenho = (1.000 cm)² = (10 m)² = 100 m².',
      'Volumes: escala ao cubo (maquete 1:100 ⇒ volume real 10⁶ vezes maior).',
      'Combinação com velocidade: 7,5 cm em 1:400.000 = 30 km; a 60 km/h leva 30 min.',
      '1 km = 1.000 m = 100.000 cm.'
    ],
    macetes: [
      'Corte cinco zeros do denominador para ler a escala em “km por cm”: 1:250.000 ⇒ 1 cm = 2,5 km.',
      'Corte dois zeros para ler em “m por cm”: 1:1.000 ⇒ 1 cm = 10 m.',
      'Quanto maior o denominador, menor a escala (mais redução, menos detalhe).'
    ],
    dicas: [
      'Coloque desenho e realidade na mesma unidade antes de dividir.',
      'Itens de área em planta são a pegadinha favorita: eleve a escala ao quadrado.',
      'Problemas compostos (escala + tempo de viagem) exigem duas etapas: primeiro a distância real, depois t = d/v.'
    ],
    pegadinhas: [
      'Usar a escala linear para áreas: em 1:1.000, 1 cm² corresponde a 100 m², e não a 10 m².',
      'Erro de conversão cm ↔ km (100.000, não 1.000).',
      'Afirmar que 1:500.000 é escala “maior” que 1:50.000 — é menor (reduz mais).'
    ]
  },

  'Raciocínio Lógico-Matemático|9.2 Figuras espaciais em diferentes posições': {
    resumo: 'Este tópico exige visualizar sólidos geométricos (cubo, prismas, pirâmides, cilindro, cone, esfera) e reconhecer seus elementos — faces, arestas e vértices — e como aparecem quando observados de posições diferentes. A relação de Euler, V − A + F = 2, vale para poliedros convexos e permite encontrar um elemento a partir dos outros dois. Dados e cubos girados testam a noção de faces opostas e adjacentes.',
    pontos: [
      'Relação de Euler: V − A + F = 2. Cubo: 8 − 12 + 6 = 2.',
      'Poliedro com 10 faces e 16 arestas: V = 2 + 16 − 10 = 8 vértices.',
      'Pirâmide de base com n lados: n + 1 faces, n + 1 vértices, 2n arestas. Base quadrada: 5, 5 e 8.',
      'Prisma de base com n lados: n + 2 faces, 2n vértices, 3n arestas. Prisma triangular: 5, 6 e 9.',
      'Dado convencional: faces opostas somam 7 (1–6, 2–5, 3–4). Face 2 para cima ⇒ face 5 na mesa.',
      'Vistas: cilindro deitado visto de frente (eixo paralelo ao plano frontal) é um retângulo; visto pela ponta, um círculo.',
      'Cone em pé visto de frente: triângulo; visto de cima: círculo (com o ponto do vértice).'
    ],
    macetes: [
      'Contagem de arestas pela soma dos lados: A = (soma dos lados de todas as faces)/2, pois cada aresta pertence a duas faces.',
      'Em cubos girados, fixe uma face e acompanhe só as quatro vizinhas; a oposta nunca aparece ao lado dela.',
      'Euler “Vai Ana Faz 2”: V − A + F = 2.'
    ],
    dicas: [
      'Itens afirmam números de faces/arestas/vértices — confira com as fórmulas de prisma e pirâmide em vez de imaginar a figura.',
      'Ao julgar vistas, identifique a direção do eixo do sólido em relação ao observador.',
      'Em questões de dados, lembre-se de que as faces opostas nunca aparecem juntas em uma mesma vista.'
    ],
    pegadinhas: [
      'Aplicar Euler a poliedros não convexos sem verificar (a relação pode falhar).',
      'Contar só as faces laterais da pirâmide e esquecer a base.',
      'Confundir faces adjacentes com faces opostas em dados (a face de baixo é a oposta à de cima).'
    ]
  },

  'Raciocínio Lógico-Matemático|9.3 Projeções, planificações e cortes': {
    resumo: 'A planificação abre a superfície de um sólido no plano, mostrando todas as suas faces; a projeção ortogonal mostra a “sombra” do sólido sobre um plano, com raios perpendiculares a ele; o corte (seção plana) é a figura obtida ao interceptar o sólido por um plano. Reconhecer esses três processos permite julgar que figura plana surge de cada sólido.',
    pontos: [
      'Planificação do cubo: 6 quadrados congruentes (existem 11 planificações diferentes).',
      'Cilindro: dois círculos e um retângulo de lados 2πr e h. r = 3 cm, h = 10 cm ⇒ retângulo 6π cm × 10 cm.',
      'Cone: um círculo (base) e um setor circular (superfície lateral) cujo arco mede 2πr.',
      'Pirâmide: um polígono (base) e triângulos (faces laterais).',
      'Projeção ortogonal da esfera sobre qualquer plano: círculo.',
      'Cortes do cubo: o plano pelas extremidades das três arestas de um mesmo vértice gera triângulo equilátero; é possível obter também quadrado, retângulo, trapézio, pentágono e hexágono regular.',
      'Cortes do cilindro: perpendicular ao eixo ⇒ círculo; paralelo ao eixo ⇒ retângulo; oblíquo ⇒ elipse.',
      'Cortes do cone: paralelo à base ⇒ círculo; pelo eixo ⇒ triângulo isósceles.'
    ],
    macetes: [
      'Retângulo lateral do cilindro = “rótulo da lata” desenrolado: comprimento é o perímetro da base.',
      'Número de lados do corte = número de faces que o plano atravessa. Cubo tem 6 faces ⇒ corte com no máximo 6 lados.',
      'Em uma planificação válida do cubo, nunca há 4 quadrados em volta de um mesmo vértice.'
    ],
    dicas: [
      'Itens trazem medidas da planificação do cilindro: confira se o lado usou 2πr (comprimento da circunferência), e não πr ou 2r.',
      'Para cortes, imagine em quantas faces o plano “entra”: isso dá o número de lados da seção.',
      'Projeção depende da posição do sólido; só a esfera tem projeção igual em todas as direções.'
    ],
    pegadinhas: [
      'Dizer que a planificação do cone tem triângulo: a lateral é um setor circular.',
      'Usar o diâmetro em vez do perímetro da base como lado do retângulo do cilindro.',
      'Afirmar que um corte plano do cubo nunca gera hexágono — o plano pelo centro, perpendicular a uma diagonal, gera hexágono regular.'
    ]
  },

  'Raciocínio Lógico-Matemático|10.1 Áreas e volumes': {
    resumo: 'Áreas medem superfícies (unidades ao quadrado) e volumes medem espaço ocupado (unidades ao cubo). As fórmulas básicas das figuras planas e dos sólidos resolvem a maior parte dos itens, sempre com atenção às unidades e às conversões, especialmente 1 m³ = 1.000 L. Quando o enunciado fixa π = 3,14, use esse valor.',
    pontos: [
      'Retângulo: b · h; triângulo: b · h/2 (base 8 cm e altura 5 cm ⇒ 20 cm²).',
      'Trapézio: (B + b) · h/2. Bases 10 m e 6 m, altura 4 m ⇒ 32 m².',
      'Círculo: π r² (r = 10 m ⇒ 314 m²); circunferência: 2π r.',
      'Paralelepípedo: a · b · c. Caçamba 4 × 2 × 0,5 = 4 m³.',
      'Cilindro: π r² h. r = 1 m, h = 2 m ⇒ 6,28 m³ = 6.280 L.',
      'Cone e pirâmide: (área da base · altura)/3. Esfera: (4/3) π r³; superfície da esfera: 4π r².',
      'Conversões: 1 m³ = 1.000 L; 1 dm³ = 1 L; 1 m² = 10.000 cm²; 1 ha = 10.000 m².'
    ],
    macetes: [
      'Dobrar todas as dimensões: área × 4, volume × 8.',
      'Cone = 1/3 do cilindro de mesma base e altura; pirâmide = 1/3 do prisma.',
      'Losango: (D · d)/2. Triângulo equilátero de lado L: L²√3/4.'
    ],
    dicas: [
      'O CEBRASPE pede volume em litros: calcule em m³ e multiplique por 1.000.',
      'Confira se o enunciado dá raio ou diâmetro.',
      'Em figuras compostas, decomponha em retângulos, triângulos e círculos e some (ou subtraia) as áreas.'
    ],
    pegadinhas: [
      'Esquecer de dividir por 2 na área do triângulo ou do trapézio.',
      'Converter m³ para litros multiplicando por 100 em vez de 1.000.',
      'Usar o diâmetro como raio: círculo de diâmetro 10 tem área 25π, não 100π.',
      'Converter m² para cm² multiplicando por 100 (o correto é 10.000).'
    ]
  },

  'Raciocínio Lógico-Matemático|10.2 Estimativas': {
    resumo: 'Estimar é obter rapidamente um valor aproximado, suficiente para decidir se uma afirmação é verdadeira, sem fazer a conta exata. Arredondam-se os números para valores redondos próximos e controla-se o sentido do erro (se a estimativa ficou acima ou abaixo do valor real). É uma habilidade valiosa em provas Certo/Errado, em que muitas vezes basta saber se o resultado está em um intervalo.',
    pontos: [
      'Raízes: 7² = 49 e 8² = 64 ⇒ √50 está entre 7 e 8 (≈ 7,07).',
      'Porcentagem: 3% de 9.870 ≈ 3% de 10.000 = 300; como 9.870 < 10.000, o valor exato é 296,1 (entre 290 e 300).',
      '0,49 × 802 < 0,5 × 802 = 401; e 0,49 · 802 = 392,98 < 400.',
      '199 × 21 = 200 · 21 − 21 = 4.179 (entre 4.000 e 4.200).',
      'Consumo: 1.150 km a 12 km/L ⇒ 1.150/12 ≈ 95,8 L (entre 90 e 100 L).',
      'Ao arredondar um fator para cima, o produto estimado fica acima do real; arredonde os dois fatores em sentidos opostos para compensar.'
    ],
    macetes: [
      'Truque do “número redondo menos um pouco”: 199 × 21 = 200 × 21 − 1 × 21.',
      'Quadrados perfeitos até 20² de cor para localizar raízes.',
      'Dividir por 12: 1.200/12 = 100; ajuste o que sobra ou falta (50/12 ≈ 4).'
    ],
    dicas: [
      'Itens “está entre X e Y” pedem só o intervalo: estime e verifique os limites, sem calcular casas decimais.',
      'Se a estimativa ficar muito perto de um limite do intervalo, faça a conta exata para não errar.',
      'Registre sempre se arredondou para cima ou para baixo para saber de que lado está o valor real.'
    ],
    pegadinhas: [
      'Arredondar demais e mudar a conclusão: 0,49 × 802 parece “≈ 400”, mas é 392,98, inferior a 400.',
      'Achar que √50 ≈ 25 (confundir raiz com metade).',
      'Ignorar que pequenos erros em fatores grandes geram grandes erros absolutos.'
    ]
  },

  'Raciocínio Lógico-Matemático|10.3 Aplicações de métrica': {
    resumo: 'As aplicações de métrica envolvem converter unidades de comprimento, área, tempo e velocidade e usá-las em situações práticas: perímetro de cercas, área de faixas pintadas, distância percorrida por rodas e por veículos. A conversão entre km/h e m/s (fator 3,6) é essencial em temas de trânsito. A organização das unidades antes da conta evita a maioria dos erros.',
    pontos: [
      'km/h → m/s: divida por 3,6 (72 km/h = 20 m/s; 90 km/h = 25 m/s). m/s → km/h: multiplique por 3,6.',
      'Distância com velocidade: 90 km/h = 25 m/s ⇒ em 2 s percorre 50 m.',
      'Perímetro do retângulo: 2(a + b). Terreno 40 m × 25 m ⇒ 130 m de arame por volta.',
      'Faixa pintada: largura × comprimento. 0,1 m × 2.000 m = 200 m².',
      'Roda: cada volta percorre 2π r. r = 0,3 m e 1.000 voltas ⇒ 2 · 3,14 · 0,3 · 1.000 = 1.884 m.',
      'Comprimento: 1 km = 1.000 m; 1 m = 100 cm; 1 cm = 10 mm.',
      'Tempo: 1 h = 60 min = 3.600 s; 0,1 h = 6 min.'
    ],
    macetes: [
      'Velocidades “redondas” em m/s: 36 km/h = 10; 54 = 15; 72 = 20; 90 = 25; 108 = 30 m/s.',
      'Distância em 1 s a v km/h ≈ v/3,6 metros: útil para distância de reação.',
      'Converta tudo para metros antes de calcular áreas (10 cm = 0,1 m).'
    ],
    dicas: [
      'O CEBRASPE mistura cm, m e km no mesmo item: padronize a unidade logo na primeira leitura.',
      'Em itens de rodas, confira se foi dado raio ou diâmetro.',
      'Para cercas com várias voltas, multiplique o perímetro pelo número de voltas.'
    ],
    pegadinhas: [
      'Multiplicar por 3,6 ao passar de km/h para m/s (o certo é dividir).',
      'Calcular área de faixa com largura em cm e comprimento em km, gerando valor absurdo.',
      'Usar π r (meia circunferência) ou 2r (diâmetro) como distância de uma volta da roda.'
    ]
  },

  /* ================================ FÍSICA ================================ */

  'Física|1 Cinemática escalar e vetorial': {
    resumo: 'A cinemática descreve o movimento sem se preocupar com suas causas. No movimento uniforme (MU) a velocidade é constante; no uniformemente variado (MUV) a aceleração é constante e valem as equações horárias e a equação de Torricelli. Na abordagem vetorial, deslocamento e velocidade têm módulo, direção e sentido, e devem ser somados como vetores. Queda livre é um MUV com aceleração g = 10 m/s².',
    pontos: [
      'Velocidade média: vm = Δs/Δt. 180 km em 2,5 h ⇒ 72 km/h.',
      'MU: s = s₀ + v · t. Encontro de móveis em sentidos opostos: t = distância/(v₁ + v₂) ⇒ 300/(60 + 90) = 2 h.',
      'MUV: v = v₀ + a · t; s = s₀ + v₀ · t + a · t²/2. Do repouso com a = 2 m/s² por 10 s: 100 m e 20 m/s.',
      'Torricelli: v² = v₀² + 2 · a · Δs. 20 m/s freando a 5 m/s²: d = 400/10 = 40 m.',
      'Queda livre (g = 10 m/s²): h = 5t²; v = 10t. De 45 m: t = 3 s, v = 30 m/s.',
      'Deslocamento vetorial: 6 km leste + 8 km norte ⇒ |d| = √(36 + 64) = 10 km (distância percorrida = 14 km).',
      'Conversão: km/h ÷ 3,6 = m/s. 108 km/h = 30 m/s.',
      'No MUV, vm = (v₀ + v)/2.'
    ],
    macetes: [
      'Torricelli quando o tempo não aparece no problema; equação horária quando ele aparece.',
      'Frenagem: a distância cresce com o quadrado da velocidade — dobrar a velocidade quadruplica a distância de frenagem.',
      'Triângulos 3-4-5 e 6-8-10 resolvem a maioria dos deslocamentos perpendiculares.',
      'Velocidade relativa: sentidos opostos somam; mesmo sentido subtraem.'
    ],
    dicas: [
      'A banca afirma o resultado numérico com erro em um passo (esquecer o “/2” em a t²/2, ou o “2” em Torricelli).',
      'Converta tempos em horas com cuidado: 5 min = 1/12 h ⇒ 10 km em 5 min = 120 km/h.',
      'Itens vetoriais costumam trocar distância percorrida por deslocamento.'
    ],
    pegadinhas: [
      'Distância percorrida × deslocamento: 6 km + 8 km em direções perpendiculares dão deslocamento de 10 km, não 14 km.',
      'Converter 2 h 30 min como 2,3 h (é 2,5 h).',
      'Converter km/h em m/s multiplicando por 3,6.',
      'Esquecer o fator 2 de Torricelli: v² = v₀² + 2aΔs.'
    ]
  },

  'Física|2 Movimento circular': {
    resumo: 'No movimento circular, a trajetória é uma circunferência. No movimento circular uniforme (MCU) o módulo da velocidade é constante, mas sua direção muda continuamente, o que exige uma aceleração centrípeta voltada para o centro. Grandezas angulares (velocidade angular ω, período T, frequência f) relacionam-se com as lineares pelo raio. Em curvas de rodovia, o atrito lateral fornece a força centrípeta.',
    pontos: [
      'Período e frequência: T = 1/f. 120 rpm = 2 Hz ⇒ T = 0,5 s.',
      'Velocidade angular: ω = 2π f = 2π/T. f = 5 Hz ⇒ ω = 10π rad/s.',
      'Velocidade linear: v = ω · R. ω = 50 rad/s e R = 0,3 m ⇒ v = 15 m/s.',
      'Aceleração centrípeta: ac = v²/R = ω² R. v = 20 m/s e R = 100 m ⇒ 4 m/s².',
      'Força centrípeta: Fc = m v²/R. 1.000 kg, 10 m/s, R = 50 m ⇒ 2.000 N.',
      'Curva plana com atrito: v_máx = √(μ g R). μ = 0,5, R = 80 m ⇒ √400 = 20 m/s.',
      'Polias ligadas por correia (ou engrenagens): mesma velocidade linear ⇒ f₁R₁ = f₂R₂. Polias no mesmo eixo: mesma ω.',
      'rpm → Hz: divida por 60.'
    ],
    macetes: [
      'Correia: “a velocidade é da correia” ⇒ v igual; eixo: “gira junto” ⇒ ω igual.',
      'Polia menor gira mais rápido: frequência inversamente proporcional ao raio.',
      'ac depende de v²: dobrar a velocidade quadruplica a aceleração e a força centrípeta.',
      'Na curva com atrito, a velocidade máxima não depende da massa do veículo.'
    ],
    dicas: [
      'Itens de MCU testam o conceito de que a aceleração não é nula mesmo com velocidade escalar constante.',
      'Converta rpm em Hz antes de calcular período ou ω.',
      'Em curvas, identifique quem faz o papel de centrípeta: atrito (pista plana), componente da normal (pista inclinada) ou tração.'
    ],
    pegadinhas: [
      'Dizer que no MCU a aceleração é nula: existe aceleração centrípeta v²/R.',
      'Usar ω = f em vez de ω = 2πf.',
      'Achar que dobrar v dobra ac (na verdade quadruplica).',
      'Afirmar que a força centrípeta é uma força a mais no diagrama: ela é a resultante das forças radiais.'
    ]
  },

  'Física|3 Leis de Newton e aplicações': {
    resumo: 'As leis de Newton relacionam forças e movimento. A 1ª (inércia) diz que, sem força resultante, o corpo mantém repouso ou MRU; a 2ª afirma que a força resultante produz aceleração, F = m · a; a 3ª (ação e reação) diz que forças surgem em pares de mesmo módulo e direção, sentidos opostos, aplicadas em corpos diferentes. Peso, normal, tração e atrito são as forças mais cobradas.',
    pontos: [
      '2ª lei: F_R = m · a. Carro de 1.200 kg com a = 2 m/s² ⇒ F_R = 2.400 N.',
      'Peso: P = m · g. 80 kg ⇒ 800 N (g = 10 m/s²). Massa (kg) não muda; peso depende de g.',
      'Normal em superfície horizontal sem outras forças verticais: N = P.',
      'Atrito cinético: f = μ · N. Frenagem só por atrito em pista plana: a = μ · g (μ = 0,8 ⇒ 8 m/s²).',
      'Plano inclinado sem atrito: a = g · sen θ. Com θ = 30°: a = 5 m/s².',
      'Elevador: N = m(g + a) subindo acelerado; N = m(g − a) descendo acelerado.',
      'Sistemas de blocos ligados: a = F_R/(m₁ + m₂) e depois isole um bloco para achar a tração.',
      'Inércia: cinto de segurança impede que o corpo continue em movimento quando o carro freia.'
    ],
    macetes: [
      'Ação e reação nunca se anulam, porque atuam em corpos diferentes.',
      'Velocidade constante ⇒ resultante nula (equilíbrio dinâmico), mesmo com o corpo se movendo.',
      'Força resultante e aceleração têm sempre a mesma direção e sentido; a velocidade não necessariamente.',
      'Peso e normal não são par ação-reação: o par do peso é a atração da Terra pelo corpo.'
    ],
    dicas: [
      'A banca troca massa e peso, ou afirma que ação e reação se cancelam: são erros conceituais clássicos.',
      'Em itens numéricos, faça o diagrama de forças e escreva F_R = m · a no sentido do movimento.',
      'Itens de trânsito exploram a inércia (cinto, encosto de cabeça, carga solta).'
    ],
    pegadinhas: [
      'Achar que é necessária força para manter velocidade constante (isso contraria a 1ª lei; a força só compensa atritos).',
      'Considerar peso e normal como par ação-reação.',
      'Dizer que massa de 80 kg “pesa 80 kg”: o peso é 800 N.',
      'Somar forças como escalares quando elas têm direções diferentes.'
    ]
  },

  'Física|4 Trabalho': {
    resumo: 'Trabalho é a medida da energia transferida por uma força ao longo de um deslocamento. Para força constante, τ = F · d · cos θ, em que θ é o ângulo entre a força e o deslocamento; a unidade é o joule (J = N · m). Forças a favor do movimento realizam trabalho positivo (motor), contra o movimento, negativo (resistente), e perpendiculares não realizam trabalho. O teorema da energia cinética liga trabalho e variação de velocidade.',
    pontos: [
      'τ = F · d · cos θ. F = 50 N, d = 10 m, θ = 0° ⇒ 500 J; θ = 60° ⇒ 250 J.',
      'θ = 90° ⇒ τ = 0: a normal e a força centrípeta não realizam trabalho.',
      'Trabalho do peso: τ_P = ± m · g · h (positivo descendo, negativo subindo); independe da trajetória.',
      'Trabalho do atrito: τ = −μ · N · d (sempre negativo quando se opõe ao deslizamento).',
      'Teorema da energia cinética: τ_total = ΔEc = m v²/2 − m v₀²/2.',
      'Frear um carro de 1.000 kg de 20 m/s até parar exige trabalho resultante de −200.000 J (−200 kJ).',
      'Gráfico F × d: o trabalho é numericamente igual à área sob a curva.',
      'Força elástica: τ = k x²/2.'
    ],
    macetes: [
      'Força perpendicular ao movimento “não trabalha”: carregar uma mala na horizontal a velocidade constante ⇒ peso não realiza trabalho.',
      'Trabalho do peso só depende do desnível: escada, rampa ou elevador dão o mesmo m g h.',
      'cos 0° = 1, cos 60° = 0,5, cos 90° = 0, cos 180° = −1.'
    ],
    dicas: [
      'O CEBRASPE afirma que uma força “realiza trabalho” quando ela é perpendicular ao deslocamento: verifique o ângulo.',
      'Em frenagens, use o teorema da energia cinética em vez de calcular força e distância separadamente.',
      'Atenção ao sinal: trabalho negativo indica que a força retira energia do corpo.'
    ],
    pegadinhas: [
      'Esquecer o cos θ e usar F · d mesmo com força inclinada.',
      'Afirmar que a força centrípeta realiza trabalho no MCU (é perpendicular à velocidade, τ = 0).',
      'Achar que segurar um objeto parado “gasta trabalho” no sentido físico: sem deslocamento, τ = 0.',
      'Confundir trabalho (J) com potência (W).'
    ]
  },

  'Física|5 Potência': {
    resumo: 'Potência é a rapidez com que um trabalho é realizado ou com que a energia é transferida: P = τ/Δt, medida em watts (W = J/s). Para uma força constante agindo na direção da velocidade, P = F · v. O rendimento compara a potência útil com a total recebida. Conversões com cavalo-vapor e quilowatt-hora são frequentes.',
    pontos: [
      'Potência média: P = τ/Δt. 6.000 J em 20 s ⇒ 300 W.',
      'Potência instantânea: P = F · v. Força motriz de 2.000 N a 25 m/s ⇒ 50.000 W = 50 kW.',
      'Elevar carga: P = m g h/t. 500 kg a 12 m em 30 s ⇒ 60.000/30 = 2.000 W.',
      'Rendimento: η = P_útil/P_total (sempre < 1). Motor que recebe 80 kW e entrega 20 kW ⇒ η = 25%.',
      'Unidades: 1 kW = 1.000 W; 1 cv ≈ 735 W; 1 hp ≈ 746 W.',
      'Energia = potência × tempo: 1 kWh = 1.000 W · 3.600 s = 3,6 · 10⁶ J.',
      'A velocidade constante, F_motor = F_resistente; assim P = F_resistente · v.'
    ],
    macetes: [
      'kWh é energia, não potência: “quilowatt vezes hora”.',
      'Mesma potência ⇒ força e velocidade inversamente proporcionais: marcha reduzida dá mais força com menos velocidade.',
      'Converta km/h em m/s antes de usar P = F · v.'
    ],
    dicas: [
      'Itens trocam potência e energia ou pedem potência em kW com dados em W: preste atenção às unidades.',
      'Para máquinas que sobem cargas, a potência útil é m g h/t; a total depende do rendimento.',
      'Perdas = potência total − potência útil.'
    ],
    pegadinhas: [
      'Usar velocidade em km/h em P = F · v (o resultado fica 3,6 vezes maior).',
      'Achar que rendimento pode ultrapassar 100%.',
      'Afirmar que kWh é unidade de potência.',
      'Dividir o trabalho pelo tempo em minutos sem converter para segundos.'
    ]
  },

  'Física|6 Energia cinética, potencial e atrito': {
    resumo: 'Energia cinética é a energia associada ao movimento, Ec = m v²/2; energia potencial gravitacional é a associada à altura, Ep = m g h; e a potencial elástica, à deformação de uma mola, Ee = k x²/2. O atrito é uma força dissipativa: converte energia mecânica em energia térmica, sendo responsável pela frenagem dos veículos. Todas as energias são medidas em joules.',
    pontos: [
      'Ec = m v²/2. Carro de 1.000 kg a 20 m/s (72 km/h): Ec = 200.000 J = 200 kJ.',
      'Dobrar a velocidade quadruplica a Ec; dobrar a massa dobra a Ec.',
      'Ep = m g h. 2 kg a 5 m de altura: Ep = 100 J (g = 10 m/s²).',
      'Ee = k x²/2. Mola de k = 200 N/m comprimida 0,1 m: Ee = 1 J.',
      'Atrito estático: f ≤ μe · N (impede deslizamento); atrito cinético: f = μc · N (durante o deslizamento), normalmente μc < μe.',
      'Distância de frenagem só por atrito: d = v²/(2 μ g). v = 20 m/s e μ = 0,5 ⇒ d = 40 m.',
      'Energia dissipada pelo atrito: E = μ · N · d, transformada em calor.'
    ],
    macetes: [
      'Ec e distância de frenagem crescem com v²: de 60 para 120 km/h a distância de frenagem fica 4 vezes maior.',
      'O freio ABS mantém as rodas no limite do atrito estático (maior que o cinético), encurtando a frenagem e preservando a dirigibilidade.',
      'Ep depende da altura em relação a um referencial escolhido; o que importa nos problemas é a variação.'
    ],
    dicas: [
      'O CEBRASPE explora a relação quadrática entre velocidade, energia cinética e distância de frenagem.',
      'Em itens de atrito, verifique se o corpo está deslizando (cinético) ou na iminência (estático máximo).',
      'Atrito não depende da área de contato (modelo simples), mas sim da normal e do par de materiais.'
    ],
    pegadinhas: [
      'Achar que dobrar a velocidade dobra a energia cinética (ela quadruplica).',
      'Afirmar que o atrito é sempre contrário ao movimento do corpo: o atrito estático nos pneus é o que empurra o carro para frente.',
      'Dizer que a força de atrito depende da área de contato.',
      'Esquecer de converter km/h em m/s antes de calcular m v²/2.'
    ]
  },

  'Física|7 Conservação de energia': {
    resumo: 'Em um sistema onde só atuam forças conservativas (peso, força elástica), a energia mecânica, soma das energias cinética e potencial, permanece constante. Na presença de atrito ou resistência do ar, parte da energia mecânica é dissipada como calor, mas a energia total do universo se conserva. O princípio permite calcular velocidades e alturas sem conhecer a trajetória.',
    pontos: [
      'Em = Ec + Ep. Sem dissipação: Ec₁ + Ep₁ = Ec₂ + Ep₂.',
      'Queda de altura h a partir do repouso: v = √(2 g h). h = 20 m ⇒ v = 20 m/s; h = 5 m ⇒ v = 10 m/s.',
      'Lançamento vertical: altura máxima h = v₀²/(2g). v₀ = 30 m/s ⇒ h = 45 m.',
      'A velocidade final não depende da massa nem da trajetória (rampa lisa ou queda vertical dão o mesmo módulo).',
      'Com atrito: Em_inicial = Em_final + E_dissipada.',
      'Mola lançando bloco: k x²/2 = m v²/2.',
      'Choque a 72 km/h (20 m/s) equivale a cair de 20 m de altura.'
    ],
    macetes: [
      'v = √(20 · h) com g = 10: alturas 5, 20, 45, 80 m ⇒ velocidades 10, 20, 30, 40 m/s.',
      'Massa “cancela” quando só há peso e Ec: não perca tempo com ela.',
      'Energia dissipada = Em inicial − Em final.'
    ],
    dicas: [
      'Itens comparam corpos de massas diferentes soltos da mesma altura sem atrito: chegam com a mesma velocidade.',
      'A banca relaciona velocidade de impacto com queda de prédio — use v² = 2 g h.',
      'Quando houver atrito, monte o balanço de energia em vez de aplicar a conservação simples.'
    ],
    pegadinhas: [
      'Afirmar que, havendo atrito, a energia “desaparece”: ela se transforma em térmica; só a mecânica diminui.',
      'Achar que corpo mais pesado chega ao solo mais rápido (sem resistência do ar, não).',
      'Calcular v = 2 g h esquecendo a raiz quadrada.'
    ]
  },

  'Física|8 Quantidade de movimento e impulso': {
    resumo: 'Quantidade de movimento (momento linear) é o produto da massa pela velocidade, Q = m · v, uma grandeza vetorial medida em kg · m/s. Impulso é o efeito de uma força ao longo do tempo, I = F · Δt, medido em N · s. O teorema do impulso afirma que o impulso da força resultante é igual à variação da quantidade de movimento. Em sistemas isolados, a quantidade de movimento total se conserva.',
    pontos: [
      'Q = m · v. Carro de 1.000 kg a 20 m/s ⇒ Q = 20.000 kg · m/s.',
      'I = F · Δt (força constante). 500 N durante 4 s ⇒ 2.000 N · s.',
      'Teorema do impulso: I = ΔQ = m v − m v₀.',
      'Parar um carro de 1.000 kg a 20 m/s em 0,1 s ⇒ F média = 20.000/0,1 = 200.000 N; em 1 s ⇒ 20.000 N.',
      'Gráfico F × t: impulso = área sob a curva.',
      'Sistema isolado: Q_antes = Q_depois (explosões, recuo de arma, colisões).',
      'Recuo: corpo em repouso que se separa em duas partes ⇒ m₁ v₁ = m₂ v₂ em sentidos opostos.',
      'Inversão de sentido: bola de 0,5 kg que chega a 10 m/s e volta a 10 m/s ⇒ |ΔQ| = 10 kg · m/s.'
    ],
    macetes: [
      'Airbag, para-choque deformável e cinto aumentam o tempo de contato Δt e diminuem a força média, mantendo o mesmo ΔQ.',
      'Q é vetor: sentidos opostos entram com sinais opostos.',
      'Ec = Q²/(2m): com a mesma Q, o corpo de menor massa tem mais energia cinética.'
    ],
    dicas: [
      'A banca cobra a função dos dispositivos de segurança: eles não reduzem o impulso, reduzem a força pelo aumento do tempo.',
      'Em itens de ricochete, some os módulos das velocidades (ida e volta) ao calcular ΔQ.',
      'Identifique se o sistema é isolado (forças externas desprezíveis durante a interação) antes de conservar Q.'
    ],
    pegadinhas: [
      'Dizer que o airbag diminui a variação da quantidade de movimento: ela é a mesma; o que diminui é a força média.',
      'Tratar Q como escalar e calcular ΔQ = 0 quando o corpo inverte o sentido com a mesma velocidade.',
      'Confundir quantidade de movimento (m v) com energia cinética (m v²/2).'
    ]
  },

  'Física|9 Colisões': {
    resumo: 'Nas colisões, as forças internas são muito intensas e de curta duração, de modo que o sistema pode ser tratado como isolado e a quantidade de movimento total se conserva. A energia cinética, porém, só se conserva nas colisões perfeitamente elásticas. O coeficiente de restituição e classifica a colisão: e = 1 (elástica), 0 < e < 1 (parcialmente elástica) e e = 0 (perfeitamente inelástica, corpos seguem juntos, com a maior perda de energia).',
    pontos: [
      'Conservação: m₁ v₁ + m₂ v₂ = m₁ v₁′ + m₂ v₂′ (com sinais pelo sentido).',
      'Perfeitamente inelástica: v_final = (m₁ v₁ + m₂ v₂)/(m₁ + m₂). Carro de 1.000 kg a 20 m/s atinge outro de 1.000 kg parado ⇒ 10 m/s juntos.',
      'Energia perdida nesse exemplo: Ec antes = 200 kJ; depois = 2.000 · 10²/2 = 100 kJ ⇒ perda de 100 kJ (50%).',
      'Coeficiente de restituição: e = (velocidade relativa de afastamento)/(velocidade relativa de aproximação).',
      'Elástica (e = 1) frontal entre massas iguais: os corpos trocam de velocidades.',
      'Colisão frontal de veículos em sentidos opostos: Q total = m₁ v₁ − m₂ v₂.',
      'Em qualquer colisão de sistema isolado, Q se conserva; Ec só na elástica.'
    ],
    macetes: [
      'Q sempre conserva, Ec só “se for elástica”.',
      'Massas iguais, uma parada, grudando: velocidade final é a metade e metade da Ec é perdida.',
      'Massas iguais, elástica: “bilhar” — a que vinha para, a que estava parada sai com a mesma velocidade.'
    ],
    dicas: [
      'Itens classificam a colisão pelo que acontece depois: corpos juntos ⇒ perfeitamente inelástica (e = 0).',
      'Em batidas de frente, defina um sentido positivo e use sinal negativo para o veículo que vem ao contrário.',
      'Para verificar se houve perda de energia, compare as somas de m v²/2 antes e depois.'
    ],
    pegadinhas: [
      'Afirmar que a energia cinética se conserva em toda colisão: só na elástica.',
      'Achar que na colisão inelástica a quantidade de movimento não se conserva.',
      'Somar velocidades de veículos em sentidos opostos com o mesmo sinal ao calcular Q total.',
      'Dizer que na colisão perfeitamente inelástica toda a energia cinética é perdida (só se o Q total for zero).'
    ]
  }
});

/* Língua Espanhola — 10 itens inéditos por subtópico do Edital PRF nº 1/2021 (5 C + 5 E cada). */
(function () {
  var D = 'Língua Espanhola', n = 0;
  function q(topico, tema, gabarito, enunciado, comentario) {
    n++;
    return { id: 'ESP-' + String(n).padStart(3, '0'), disciplina: D, tema: tema, topico: topico,
             gabarito: gabarito, enunciado: enunciado, comentario: comentario };
  }
  var T1 = '1 Compreensão de texto em língua espanhola',
      T2 = '2 Itens gramaticais para compreensão semântica';
  var CT = 'Compreensão de texto', GR = 'Gramática';

  window.QUESTOES = (window.QUESTOES || []).concat([
    // ===== 1 Compreensão de texto em língua espanhola =====
    q(T1, CT, 'C', 'Considere o trecho: "La mayoría de los siniestros viales podría evitarse. El exceso de velocidad y el uso del celular al volante siguen siendo las principales causas." Segundo o trecho, grande parte dos acidentes de trânsito é evitável.',
      'Correto. "La mayoría de los siniestros viales podría evitarse" significa que a maioria dos sinistros de trânsito poderia ser evitada.'),
    q(T1, CT, 'C', 'Considere o trecho: "Desde que se instalaron cámaras en la carretera, las multas por exceso de velocidad aumentaron, pero los choques graves disminuyeron." De acordo com o trecho, após a instalação das câmeras, houve aumento das multas e redução dos acidentes graves.',
      'Correto. O texto informa que as multas aumentaram ("aumentaron") e os choques graves diminuíram ("disminuyeron").'),
    q(T1, CT, 'C', 'Considere o trecho: "Los agentes de la policía recibirán capacitación en primeros auxilios. Así, podrán atender a las víctimas hasta que llegue la ambulancia." Infere-se do trecho que a capacitação visa permitir que os policiais prestem atendimento inicial às vítimas.',
      'Correto. "Así" (assim, desse modo) introduz a finalidade da capacitação: atender às vítimas até a chegada da ambulância.'),
    q(T1, CT, 'C', 'Considere o trecho: "La quema de basura en zonas rurales contamina el aire y puede provocar incendios forestales. Por eso, las autoridades lanzaron una campaña de concientización." O trecho apresenta a campanha como resposta aos problemas causados pela queima de lixo.',
      'Correto. "Por eso" (por isso) indica que a campanha foi lançada em consequência dos danos descritos na primeira frase.'),
    q(T1, CT, 'C', 'Considere o trecho: "El nuevo sistema permite consultar en segundos si un vehículo tiene denuncia de robo. Sin embargo, todavía depende de una buena conexión a internet." O trecho aponta uma limitação do novo sistema.',
      'Correto. Introduzida por "Sin embargo" (no entanto), a limitação é a dependência de boa conexão com a internet.'),
    q(T1, CT, 'E', 'Considere o trecho: "La mayoría de los siniestros viales podría evitarse. El exceso de velocidad y el uso del celular al volante siguen siendo las principales causas." Segundo o trecho, o uso do celular ao volante deixou de ser uma das principais causas de acidentes.',
      'Errado. "Siguen siendo" significa "continuam sendo": o uso do celular permanece entre as principais causas.'),
    q(T1, CT, 'E', 'Considere o trecho: "Desde que se instalaron cámaras en la carretera, las multas por exceso de velocidad aumentaron, pero los choques graves disminuyeron." De acordo com o trecho, a instalação das câmeras provocou aumento dos choques graves.',
      'Errado. O trecho afirma que os choques graves diminuíram ("disminuyeron").'),
    q(T1, CT, 'E', 'Considere o trecho: "El conductor fue detenido en la frontera. Llevaba en el maletero cajas de cigarrillos sin documentación." Segundo o trecho, as caixas de cigarros estavam acompanhadas de documentação regular.',
      'Errado. "Sin documentación" significa "sem documentação". Observe-se ainda que "maletero" designa o porta-malas do veículo.'),
    q(T1, CT, 'E', 'Considere o trecho: "Aunque el uso del casco es obligatorio para los motociclistas, muchos todavía circulan sin él en las ciudades pequeñas." O trecho afirma que o uso do capacete é facultativo nas cidades pequenas.',
      'Errado. O uso é obrigatório ("obligatorio"); o trecho apenas informa que muitos motociclistas ainda descumprem a regra nas cidades pequenas.'),
    q(T1, CT, 'E', 'Considere o trecho: "Los incendios en el Pantanal destruyeron miles de hectáreas el año pasado. Expertos advierten que la sequía prolongada agrava el problema." Segundo o trecho, os especialistas atribuem o agravamento dos incêndios ao excesso de chuvas.',
      'Errado. Os especialistas apontam a seca prolongada ("la sequía prolongada") como fator de agravamento.'),

    // ===== 2 Itens gramaticais para compreensão semântica =====
    q(T2, GR, 'C', 'No trecho "El policía revisó los documentos del camionero y luego los devolvió.", o pronome "los", em "los devolvió", retoma "los documentos".',
      'Correto. "Los" é pronome complemento direto que retoma "los documentos": o policial devolveu os documentos.'),
    q(T2, GR, 'C', 'No trecho "Hubo un accidente grave en la ruta; sin embargo, nadie resultó herido.", a expressão "sin embargo" pode ser traduzida por "no entanto".',
      'Correto. "Sin embargo" é conectivo adversativo, equivalente a "no entanto", "contudo".'),
    q(T2, GR, 'C', 'No trecho "El operativo comenzará cuando lleguen los refuerzos.", a forma "lleguen" está no presente do subjuntivo e indica fato futuro ainda não realizado.',
      'Correto. Após "cuando" com referência futura, o espanhol emprega o presente do subjuntivo; em português, corresponde a "quando chegarem os reforços".'),
    q(T2, GR, 'C', 'No trecho "Los agentes encontraron una pistola en la guantera del coche.", o termo "guantera" refere-se ao porta-luvas do veículo.',
      'Correto. "Guantera" é o compartimento do painel conhecido em português como porta-luvas.'),
    q(T2, GR, 'C', 'No trecho "El conductor estaba embarazado por la situación y no supo qué responder.", a palavra "embarazado" não significa "envergonhado", mas sim "grávido", sendo, por isso, empregada de forma inadequada nesse contexto.',
      'Correto. "Embarazado(a)" é falso cognato e significa "grávido(a)"; para "envergonhado", o espanhol usa "avergonzado" ou "apenado", conforme a região.'),
    q(T2, GR, 'E', 'No trecho "Los vecinos llamaron a la policía porque oyeron un ruido extraño en la calle.", o vocábulo "extraño" significa "estranho", e "oyeron" corresponde a "olharam".',
      'Errado. "Extraño" significa de fato "estranho", mas "oyeron" é forma do verbo "oír" e significa "ouviram".'),
    q(T2, GR, 'E', 'No trecho "La carretera estaba cerrada, pero los camiones pudieron pasar por un desvío.", a conjunção "pero" expressa relação de causa.',
      'Errado. "Pero" é conjunção adversativa, equivalente a "mas"; não expressa causa.'),
    q(T2, GR, 'E', 'No trecho "Todavía no hay datos oficiales sobre el número de víctimas.", o advérbio "todavía" equivale a "contudo", estabelecendo oposição em relação a ideia anterior.',
      'Errado. "Todavía" significa "ainda": ainda não há dados oficiais. O falso cognato induz à confusão com o "todavia" do português.'),
    q(T2, GR, 'E', 'No trecho "Ayer los inspectores revisaron todos los vehículos de la flota.", a forma verbal "revisaron" indica ação habitual no presente.',
      'Errado. "Revisaron" está no pretérito perfeito simples (pretérito indefinido) e, com "ayer", indica ação concluída no passado: "revisaram".'),
    q(T2, GR, 'E', 'No trecho "El conductor dejó el coche en el taller para arreglar los frenos.", o termo "taller" designa uma loja de roupas, e "frenos" corresponde a "faróis".',
      'Errado. "Taller" é a oficina, e "frenos" são os freios; farol, em espanhol, é "faro".')
  ]);
})();

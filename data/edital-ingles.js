/* Língua Inglesa — 10 itens inéditos por subtópico do Edital PRF nº 1/2021 (5 C + 5 E cada). */
(function () {
  var D = 'Língua Inglesa', n = 0;
  function q(topico, tema, gabarito, enunciado, comentario) {
    n++;
    return { id: 'ING-' + String(n).padStart(3, '0'), disciplina: D, tema: tema, topico: topico,
             gabarito: gabarito, enunciado: enunciado, comentario: comentario };
  }
  var T1 = '1 Compreensão de texto em língua inglesa',
      T2 = '2 Itens gramaticais para compreensão semântica';
  var CT = 'Compreensão de texto', GR = 'Gramática';

  window.QUESTOES = (window.QUESTOES || []).concat([
    // ===== 1 Compreensão de texto em língua inglesa =====
    q(T1, CT, 'C', 'Considere o trecho: "Most road crashes are not accidents in the strict sense. They usually result from speeding, drunk driving or distraction, all of which can be prevented." Infere-se do trecho que a maioria das colisões nas estradas decorre de comportamentos evitáveis.',
      'Correto. O texto afirma que as colisões resultam de excesso de velocidade, direção sob efeito de álcool ou distração, e que todas essas causas "can be prevented" (podem ser evitadas).'),
    q(T1, CT, 'C', 'Considere o trecho: "Speed cameras were installed along the highway last year. Since then, the number of fatal crashes has dropped by almost a third." De acordo com o trecho, as mortes em colisões diminuíram após a instalação dos radares.',
      'Correto. "Since then" (desde então) remete à instalação dos radares, e "has dropped by almost a third" indica queda de quase um terço no número de colisões fatais.'),
    q(T1, CT, 'C', 'Considere o trecho: "Police officers on patrol now carry tablets that check vehicle records in seconds. Officers say the device saves time, although some complain that the connection fails in remote areas." O trecho apresenta uma vantagem e uma limitação do equipamento.',
      'Correto. A vantagem é a economia de tempo ("saves time"); a limitação é a falha de conexão em áreas remotas, introduzida pelo conectivo concessivo "although".'),
    q(T1, CT, 'C', 'Considere o trecho: "Wearing a seat belt is mandatory for all passengers, including those in the back seat. Even so, many people still ignore the rule on short trips." Conclui-se do trecho que o uso do cinto é obrigatório também no banco traseiro.',
      'Correto. "Mandatory for all passengers, including those in the back seat" significa obrigatório para todos os passageiros, inclusive os do banco traseiro.'),
    q(T1, CT, 'C', 'Considere o trecho: "Deforestation along new roads in the Amazon tends to spread quickly. Once a road is opened, illegal loggers find it easier to reach untouched areas." Segundo o trecho, a abertura de estradas facilita o acesso de madeireiros ilegais a áreas preservadas.',
      'Correto. O texto afirma que, aberta a estrada, madeireiros ilegais encontram mais facilidade ("find it easier") para alcançar áreas intocadas ("untouched areas").'),
    q(T1, CT, 'E', 'Considere o trecho: "Most road crashes are not accidents in the strict sense. They usually result from speeding, drunk driving or distraction, all of which can be prevented." Segundo o trecho, as colisões são, em regra, eventos imprevisíveis e inevitáveis.',
      'Errado. O texto sustenta o contrário: as colisões não são acidentes em sentido estrito, pois decorrem de causas que podem ser prevenidas.'),
    q(T1, CT, 'E', 'Considere o trecho: "Speed cameras were installed along the highway last year. Since then, the number of fatal crashes has dropped by almost a third." Depreende-se do trecho que o número de colisões fatais caiu para um terço do valor anterior.',
      'Errado. "Dropped by almost a third" indica redução de quase um terço (queda de cerca de 33%), e não que o número tenha passado a ser um terço do anterior.'),
    q(T1, CT, 'E', 'Considere o trecho: "The new app allows drivers to report potholes directly to the authorities. However, it is not yet available in rural areas." De acordo com o trecho, o aplicativo já está disponível em todas as regiões, inclusive nas zonas rurais.',
      'Errado. O trecho afirma que o aplicativo ainda não está disponível em áreas rurais ("it is not yet available in rural areas").'),
    q(T1, CT, 'E', 'Considere o trecho: "Electric vehicles produce no tailpipe emissions. Nevertheless, the electricity used to charge them may come from fossil fuels." O trecho afirma que veículos elétricos não causam nenhum impacto ambiental, em qualquer circunstância.',
      'Errado. Embora não emitam gases pelo escapamento, o texto ressalva ("Nevertheless") que a eletricidade usada na recarga pode vir de combustíveis fósseis, o que implica possível impacto ambiental.'),
    q(T1, CT, 'E', 'Considere o trecho: "Truck drivers who work long shifts are more likely to fall asleep at the wheel. For this reason, the law requires regular rest breaks." Segundo o trecho, a lei proíbe pausas durante a jornada dos caminhoneiros para reduzir o tempo das viagens.',
      'Errado. O trecho informa que a lei exige ("requires") pausas regulares para descanso, justamente para evitar que motoristas adormeçam ao volante.'),

    // ===== 2 Itens gramaticais para compreensão semântica =====
    q(T2, GR, 'C', 'No trecho "The officer stopped the car because the driver was not wearing a seat belt.", o conectivo "because" introduz a causa da ação descrita na oração principal.',
      'Correto. "Because" é conjunção causal, equivalente a "porque": a abordagem ocorreu porque o motorista não usava o cinto.'),
    q(T2, GR, 'C', 'No trecho "Drivers must slow down near schools. They should also watch out for children crossing the street.", o pronome "They" refere-se a "Drivers".',
      'Correto. "They" retoma o substantivo plural "Drivers", sujeito da frase anterior.'),
    q(T2, GR, 'C', 'No trecho "The police have arrested three suspects since Monday.", o emprego do present perfect indica ação iniciada no passado com relação com o momento presente.',
      'Correto. O present perfect com "since" expressa período que começou no passado (segunda-feira) e se estende até o presente.'),
    q(T2, GR, 'C', 'No trecho "Although the road was wet, the driver did not reduce his speed.", a substituição de "Although" por "Even though" preserva o sentido original.',
      'Correto. "Although" e "Even though" são conectivos concessivos equivalentes ("embora", "ainda que").'),
    q(T2, GR, 'C', 'No trecho "Officers eventually found the stolen truck near the border.", o advérbio "eventually" tem sentido equivalente a "finalmente" ou "por fim".',
      'Correto. "Eventually" é falso cognato: significa "finalmente, por fim, após algum tempo", e não "eventualmente" (ocasionalmente).'),
    q(T2, GR, 'E', 'No trecho "The driver pretended to be asleep when the officer approached the car.", o verbo "pretended" significa "pretendia", no sentido de "tinha a intenção de".',
      'Errado. "Pretend" é falso cognato: significa "fingir". O motorista fingiu estar dormindo; "pretender" em português corresponde a "intend".'),
    q(T2, GR, 'E', 'No trecho "Traffic was heavy; therefore, the ambulance took longer to arrive.", o conectivo "therefore" estabelece relação de oposição entre as orações.',
      'Errado. "Therefore" expressa conclusão ou consequência ("portanto"); a oposição seria expressa por conectivos como "however" ou "but".'),
    q(T2, GR, 'E', 'No trecho "Federal highway police will increase inspections during the holidays.", o verbo auxiliar "will" indica ação já concluída no passado.',
      'Errado. "Will" é auxiliar do futuro: o trecho informa que a polícia aumentará as fiscalizações durante o feriado.'),
    q(T2, GR, 'E', 'No trecho "The new equipment is expensive. Its main advantage, however, is accuracy.", o pronome "Its" refere-se a um substantivo que não aparece no texto, mas no contexto da conversa.',
      'Errado. "Its" é pronome possessivo que retoma "The new equipment", presente na frase anterior.'),
    q(T2, GR, 'E', 'No trecho "Drivers must not use mobile phones while driving.", a expressão "must not" indica que o uso do celular é opcional, ficando a critério do motorista.',
      'Errado. "Must not" (mustn’t) expressa proibição: os motoristas não devem (não podem) usar o celular enquanto dirigem. A ideia de opcionalidade seria expressa por "don’t have to".')
  ]);
})();

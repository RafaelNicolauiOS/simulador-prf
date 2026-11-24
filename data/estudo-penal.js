/* Material de estudo — Direito Penal e Processual Penal. */
window.ESTUDO = window.ESTUDO || {};
Object.assign(window.ESTUDO, {

  /* ===================== DIREITO PENAL ===================== */

  'Direito Penal|1 Princípios básicos': {
    resumo: 'Os princípios penais limitam o poder punitivo do Estado. O principal é a legalidade (CF, art. 5º, XXXIX, e CP, art. 1º): só lei em sentido estrito, anterior ao fato, pode criar crime e cominar pena, o que veda a analogia contra o réu e o uso de medida provisória em matéria penal. A eles se somam a culpabilidade (sem responsabilidade objetiva), a intranscendência (a pena não passa da pessoa do condenado), a individualização da pena e a insignificância, construção jurisprudencial que afasta a tipicidade material de lesões ínfimas.',
    pontos: [
      'Legalidade (CP, art. 1º): não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal; desdobra-se em reserva legal e anterioridade.',
      'Medida provisória não pode tratar de direito penal (CF, art. 62, § 1º, I, b).',
      'Analogia só é admitida em favor do réu (in bonam partem); analogia in malam partem é vedada.',
      'Irretroatividade: a lei penal mais grave nunca retroage, nem que ela própria diga o contrário; a mais benéfica sempre retroage (CF, art. 5º, XL).',
      'Intranscendência (CF, art. 5º, XLV): a pena não passa do condenado, mas a reparação do dano e o perdimento de bens podem alcançar os sucessores até o limite do patrimônio transferido.',
      'Culpabilidade: veda a responsabilidade objetiva; no crime agravado pelo resultado, este só é imputado se causado ao menos culposamente (CP, art. 19).',
      'Individualização da pena ocorre em três fases: legislativa (cominação), judicial (dosimetria) e executória (cumprimento).',
      'Insignificância (STF): exige mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão; o STJ não a admite em crimes contra a Administração Pública (Súmula 599) nem em violência doméstica contra a mulher (Súmula 589).'
    ],
    macetes: [
      'Requisitos da insignificância = MARI: Mínima ofensividade, Ausência de periculosidade, Reduzido grau de reprovabilidade, Inexpressividade da lesão.',
      'Individualização em 3 tempos: L-J-E (Legislador, Juiz, Execução).',
      'Analogia penal: "só para o bem" (in bonam partem).'
    ],
    dicas: [
      'A banca costuma trocar "valor pequeno do bem" por "requisito único" da insignificância: o valor sozinho não basta, os quatro vetores são cumulativos.',
      'Itens que mencionam "MP" ou "decreto" criando crime estão errados: só lei ordinária (ou complementar) federal.',
      'Saiba as súmulas do STJ: 599 (Administração Pública) e 589 (violência doméstica) vedam a insignificância.'
    ],
    pegadinhas: [
      '"A lei mais grave pode retroagir se ela própria assim dispuser": errado, a vedação é constitucional.',
      '"A individualização da pena restringe-se à fase judicial": errado, abrange também a legislativa e a executória.',
      '"Analogia é admitida desde que a conduta seja semelhante": errado se for para prejudicar o réu.'
    ]
  },

  'Direito Penal|2.2.1 Tempo do crime': {
    resumo: 'O art. 4º do CP adota a teoria da atividade: considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado. Isso é decisivo para aferir a imputabilidade (idade) e a lei aplicável. Nos crimes permanentes e continuados, porém, a conduta se prolonga no tempo, de modo que a lei nova, ainda que mais grave, se aplica se entrou em vigor antes de cessar a permanência ou a continuidade (Súmula 711 do STF). Atenção: a prescrição tem regra própria, correndo em regra da consumação (CP, art. 111, I).',
    pontos: [
      'CP, art. 4º: teoria da atividade (momento da ação ou omissão).',
      'A idade do agente é verificada na data da conduta: quem atira com 17 anos não é imputável, ainda que a vítima morra depois de ele completar 18 (CP, art. 27).',
      'No crime omissivo, o tempo do crime é o momento em que o agente deveria agir e não agiu.',
      'Súmula 711 do STF: a lei penal mais grave aplica-se ao crime continuado ou permanente se sua vigência é anterior à cessação da continuidade ou da permanência.',
      'Extorsão mediante sequestro é crime permanente: lei mais grave que entra em vigor durante o cativeiro se aplica.',
      'Prescrição antes do trânsito em julgado começa, em regra, do dia em que o crime se consumou (CP, art. 111, I), regra diversa da do art. 4º.'
    ],
    macetes: [
      'LUTA: Lugar = Ubiquidade; Tempo = Atividade.',
      'Permanente/continuado: "enquanto durar, a lei nova pega" (Súmula 711 STF).'
    ],
    dicas: [
      'CEBRASPE adora o caso do adolescente de 17 anos cuja vítima morre após ele completar 18: vale a data da conduta, logo inimputável (responde pelo ECA).',
      'Itens que atribuem ao tempo do crime a teoria do resultado ou da ubiquidade estão errados.'
    ],
    pegadinhas: [
      'Inverter as teorias: ubiquidade é para o lugar (art. 6º), não para o tempo.',
      'Afirmar que, no crime permanente, aplica-se a lei anterior por ser mais benéfica: errado, aplica-se a lei vigente ao fim da permanência.',
      'Confundir tempo do crime com termo inicial da prescrição (consumação).'
    ]
  },

  'Direito Penal|2.2.2 Conflito de leis penais no tempo': {
    resumo: 'Quando leis penais se sucedem, aplica-se a regra da irretroatividade da lei mais grave e da retroatividade da lei mais benéfica (CP, art. 2º). A abolitio criminis ocorre quando lei posterior deixa de considerar o fato crime: cessam a execução e os efeitos penais da condenação, mas permanecem os efeitos civis. A novatio legis in mellius retroage mesmo após o trânsito em julgado, cabendo ao juízo da execução aplicá-la (Súmula 611 do STF). Já as leis excepcionais ou temporárias têm ultra-atividade (CP, art. 3º).',
    pontos: [
      'Abolitio criminis (CP, art. 2º, caput): extingue a punibilidade (art. 107, III) e cessa os efeitos penais, inclusive a reincidência.',
      'Os efeitos extrapenais (civis), como o dever de indenizar, permanecem após a abolitio criminis.',
      'Lei posterior que de qualquer modo favorecer o agente aplica-se aos fatos anteriores, ainda que decididos por sentença transitada em julgado (art. 2º, parágrafo único).',
      'Súmula 611 do STF: após o trânsito em julgado, compete ao juízo das execuções aplicar a lei mais benigna.',
      'Lei excepcional ou temporária aplica-se ao fato praticado durante sua vigência, mesmo depois de autorrevogada (ultra-atividade, art. 3º).',
      'Súmula 501 do STJ: é vedada a combinação de leis; aplica-se integralmente a lei mais favorável (no caso, a de drogas).',
      'Abolitio criminis é causa de extinção da punibilidade, não de exclusão da ilicitude.'
    ],
    macetes: [
      'Abolitio: "apaga o penal, mantém o civil".',
      'Lei temporária = "fotografia do período": vale para o que ocorreu enquanto vigia.'
    ],
    dicas: [
      'Questões sobre coisa julgada: a lei benéfica a ultrapassa; quem aplica é o juiz da execução.',
      'Se o item disser que lei temporária expirada deixa de alcançar os fatos de sua vigência, está errado.'
    ],
    pegadinhas: [
      '"Abolitio criminis afasta a obrigação de indenizar": errado.',
      '"O STJ admite combinar as partes favoráveis de duas leis": errado (Súmula 501).',
      '"Abolitio exclui a ilicitude": errado, extingue a punibilidade.'
    ]
  },

  'Direito Penal|2.3.1 Lugar do crime': {
    resumo: 'O art. 6º do CP adota a teoria da ubiquidade (mista): considera-se praticado o crime tanto no lugar da ação ou omissão, no todo ou em parte, quanto no lugar onde se produziu ou deveria produzir-se o resultado. A regra serve para os crimes a distância, em que conduta e resultado ocorrem em países diferentes, garantindo a aplicação da lei brasileira se qualquer parte do iter tocar o território nacional. Não se confunde com a competência territorial interna, regida pelo CPP (art. 70), que adota em regra o lugar da consumação.',
    pontos: [
      'CP, art. 6º: lugar do crime é o da ação/omissão (no todo ou em parte) e o do resultado (produzido ou que deveria produzir-se).',
      'Basta que conduta ou resultado ocorra no Brasil para incidir a lei brasileira.',
      'Na tentativa, considera-se lugar do crime também onde o resultado deveria ocorrer.',
      'Disparo feito do Paraguai que mata vítima no Brasil: crime praticado também no Brasil.',
      'Explosivo remetido do Brasil que detona na Argentina: a lei brasileira incide, pois a conduta ocorreu aqui.',
      'Competência interna (CPP, art. 70): em regra, lugar em que se consumar a infração; o art. 6º do CP resolve conflitos internacionais.'
    ],
    macetes: [
      'LUTA: Lugar Ubiquidade, Tempo Atividade.',
      'Ubiquidade = "ubíquo, está em todo lugar": conduta + resultado.'
    ],
    dicas: [
      'Itens com "exclusivamente onde ocorreu a ação" ou "apenas onde se produziu o resultado" estão errados.',
      'Situações de fronteira (Paraguai, Bolívia) em rodovias federais são cenário comum.'
    ],
    pegadinhas: [
      '"A ubiquidade não se aplica à tentativa": errado, o art. 6º fala em "deveria produzir-se".',
      '"Exige-se que ação e resultado ocorram integralmente no Brasil": errado, basta parte.',
      'Confundir o art. 6º do CP com a regra de competência do art. 70 do CPP.'
    ]
  },

  'Direito Penal|2.3.2 Territorialidade': {
    resumo: 'O art. 5º do CP adota a territorialidade temperada: a lei brasileira aplica-se aos crimes cometidos no território nacional, sem prejuízo de convenções, tratados e regras de direito internacional (como as imunidades diplomáticas). O território abrange solo, subsolo, águas interiores, mar territorial e espaço aéreo correspondente. Por extensão, também são território brasileiro as embarcações e aeronaves públicas ou a serviço do governo brasileiro, onde estiverem, e as mercantes ou privadas brasileiras em alto-mar ou no espaço aéreo correspondente.',
    pontos: [
      'Territorialidade temperada (mitigada): regra geral com exceções de direito internacional (ex.: imunidade diplomática).',
      'Embarcações e aeronaves brasileiras públicas ou a serviço do governo: território brasileiro onde quer que se encontrem (art. 5º, § 1º).',
      'Embarcações e aeronaves brasileiras mercantes ou privadas: território brasileiro apenas em alto-mar ou espaço aéreo correspondente.',
      'Aplica-se a lei brasileira aos crimes a bordo de aeronaves ou embarcações estrangeiras privadas em pouso no território nacional, em voo no espaço aéreo, em porto ou no mar territorial brasileiro (art. 5º, § 2º).',
      'Crime entre estrangeiros em rodovia federal: lei brasileira, independentemente da nacionalidade.',
      'Embaixada estrangeira no Brasil não é território estrangeiro; é inviolável, mas crimes ali cometidos submetem-se à lei brasileira, ressalvadas as imunidades.'
    ],
    macetes: [
      'Navio/avião PÚBLICO = Brasil em qualquer lugar; PRIVADO = Brasil só no "nada de ninguém" (alto-mar).',
      'Estrangeiro privado aqui dentro = lei brasileira.'
    ],
    dicas: [
      'O CP não adota territorialidade absoluta; itens com "sem qualquer exceção" estão errados.',
      'Navio mercante brasileiro atracado em porto estrangeiro não é extensão do território nacional.'
    ],
    pegadinhas: [
      '"Embaixada é território estrangeiro": errado.',
      '"Aeronave da FAB em aeroporto estrangeiro deixa de ser território brasileiro": errado, é pública.',
      '"Não se aplica a lei brasileira em embarcação estrangeira privada no mar territorial": errado (art. 5º, § 2º).'
    ]
  },

  'Direito Penal|2.3.3 Extraterritorialidade': {
    resumo: 'O art. 7º do CP prevê hipóteses em que a lei brasileira alcança crimes cometidos no estrangeiro. Na extraterritorialidade incondicionada (inciso I), a lei brasileira se aplica sem qualquer condição, ainda que o agente tenha sido absolvido ou condenado no exterior: crimes contra a vida ou a liberdade do Presidente da República; contra o patrimônio ou a fé pública dos entes federativos e de suas entidades; contra a Administração Pública por quem está a seu serviço; e genocídio, quando o agente for brasileiro ou domiciliado no Brasil. Nas hipóteses condicionadas (inciso II e § 3º), exigem-se requisitos cumulativos.',
    pontos: [
      'Incondicionada (art. 7º, I): vida ou liberdade do Presidente; patrimônio ou fé pública da União, DF, Estados, Territórios, Municípios, empresas públicas, sociedades de economia mista, autarquias e fundações públicas; Administração Pública por quem está a seu serviço; genocídio (agente brasileiro ou domiciliado no Brasil).',
      'Falsificação de moeda nacional no exterior: incondicionada (fé pública da União).',
      'Condicionada (art. 7º, II): crimes que o Brasil se obrigou a reprimir por tratado; praticados por brasileiro; em aeronaves/embarcações brasileiras privadas no estrangeiro e lá não julgados.',
      'Condições (art. 7º, § 2º): entrar o agente no território nacional; ser o fato punível também no país em que praticado (dupla tipicidade); estar incluído entre os que autorizam extradição; não ter sido absolvido ou cumprido pena no estrangeiro; não ter sido perdoado nem extinta a punibilidade.',
      'Estrangeiro contra brasileiro fora do Brasil (§ 3º): condições do § 2º + não pedida ou negada a extradição + requisição do Ministro da Justiça.',
      'Art. 8º: a pena cumprida no estrangeiro atenua a imposta no Brasil quando diversas, ou nela é computada quando idênticas.'
    ],
    macetes: [
      'Incondicionada = "4 Ps": Presidente (vida/liberdade), Patrimônio/fé Pública, Poder público (Administração, por quem a serve), Povo exterminado (genocídio).',
      'Condições do § 2º = "ENTRA, DUPLA, EXTRADITA, NÃO JULGADO, NÃO PERDOADO".'
    ],
    dicas: [
      'Crime contra a HONRA do Presidente não está no inciso I; só vida ou liberdade.',
      'Genocídio só é incondicionado se o agente for brasileiro ou domiciliado no Brasil.',
      'Crime contra a Administração só é incondicionado se cometido por quem está a seu serviço.'
    ],
    pegadinhas: [
      '"Na condicionada, dispensa-se a dupla tipicidade": errado.',
      '"Genocídio no exterior, qualquer que seja a nacionalidade ou domicílio": errado.',
      '"Estrangeiro contra brasileiro: bastam as condições gerais": errado, exige também requisição do Ministro da Justiça e ausência ou negativa de extradição.'
    ]
  },

  'Direito Penal|3.1 Crime doloso e culposo': {
    resumo: 'Nos termos do art. 18 do CP, o crime é doloso quando o agente quis o resultado (dolo direto, teoria da vontade) ou assumiu o risco de produzi-lo (dolo eventual, teoria do assentimento). É culposo quando o agente deu causa ao resultado por imprudência, negligência ou imperícia. A punição a título de culpa é excepcional: só existe quando expressamente prevista em lei (art. 18, parágrafo único). A distinção mais cobrada é entre dolo eventual (o agente prevê e aceita o resultado) e culpa consciente (prevê, mas confia sinceramente que não ocorrerá).',
    pontos: [
      'CP, art. 18, I: dolo direto (quis) e dolo eventual (assumiu o risco) — teorias da vontade e do assentimento.',
      'CP, art. 18, II: culpa por imprudência (ação descuidada), negligência (omissão de cautela) ou imperícia (falta de aptidão técnica).',
      'Excepcionalidade do crime culposo: só se pune a culpa quando a lei prevê expressamente.',
      'Culpa consciente: prevê o resultado, mas acredita que não ocorrerá; dolo eventual: prevê e aceita ("tanto faz").',
      'Não há compensação de culpas no direito penal; a culpa concorrente da vítima pode influir apenas na dosimetria.',
      'Crime culposo, em regra, não admite tentativa.',
      'O dano (CP, art. 163) não tem modalidade culposa: danificar veículo por imprudência é ilícito civil.'
    ],
    macetes: [
      'Imprudência = fazer demais (ação); Negligência = fazer de menos (omissão); Imperícia = não saber fazer.',
      'Dolo eventual: "dane-se"; culpa consciente: "comigo não acontece".'
    ],
    dicas: [
      'Em acidentes de trânsito, a banca troca as definições de negligência e imprudência: velocidade excessiva é imprudência.',
      'Item afirmando que o CP adotou exclusivamente a teoria da representação está errado.'
    ],
    pegadinhas: [
      '"Culpa consciente e dolo eventual têm a mesma consequência": errado; um é crime doloso, o outro culposo.',
      '"Crimes culposos admitem tentativa em regra": errado.',
      '"Dano culposo no trânsito é crime do art. 163": errado, não há forma culposa.'
    ]
  },

  'Direito Penal|3.2 Erro de tipo': {
    resumo: 'Erro de tipo é a falsa percepção da realidade sobre elemento constitutivo do tipo penal: o agente não sabe o que faz (ex.: leva coisa alheia pensando ser sua). Pelo art. 20 do CP, ele sempre exclui o dolo; se inevitável (escusável), exclui também a culpa, tornando o fato atípico; se evitável, permite punição por crime culposo, se houver previsão. O CP também regula as descriminantes putativas (art. 20, § 1º), o erro provocado por terceiro (§ 2º), o erro sobre a pessoa (§ 3º) e os erros na execução (arts. 73 e 74).',
    pontos: [
      'Erro de tipo essencial inevitável: exclui dolo e culpa (fato atípico).',
      'Erro de tipo essencial evitável: exclui o dolo, mas pune a culpa, se prevista em lei.',
      'Descriminante putativa (§ 1º): isento de pena quem, por erro plenamente justificado, supõe situação que tornaria a ação legítima; se o erro deriva de culpa e o fato é punível como culposo, responde por culpa.',
      'Erro determinado por terceiro (§ 2º): responde o terceiro que o provocou.',
      'Erro sobre a pessoa (§ 3º): o agente responde como se tivesse atingido a vítima pretendida (consideram-se as qualidades da vítima visada).',
      'Aberratio ictus (art. 73): se atinge também a pessoa visada, aplica-se o concurso formal (art. 70), não o material.',
      'Aberratio criminis (art. 74): resultado diverso do pretendido; responde por culpa, se previsto.'
    ],
    macetes: [
      'Erro de TIPO: "não sei O QUE faço" → mexe no dolo. Erro de PROIBIÇÃO: "sei o que faço, mas acho que pode" → mexe na culpabilidade.',
      'Inevitável = Isenta tudo (atípico); Evitável = Exclui o dolo, sobra a culpa.'
    ],
    dicas: [
      'Caso clássico: comprador de veículo em concessionária com documentação aparentemente regular não responde por receptação dolosa (erro de tipo).',
      'No erro sobre a pessoa, a banca troca "vítima visada" por "vítima atingida".'
    ],
    pegadinhas: [
      '"Todo erro de tipo exclui dolo e culpa": errado, o evitável mantém a culpa.',
      '"O erro de tipo evitável isenta de pena, mas não exclui o dolo": errado (essa lógica é do erro de proibição).',
      '"Aberratio ictus com duplo resultado: concurso material": errado, concurso formal.'
    ]
  },

  'Direito Penal|3.3 Crime consumado e tentado': {
    resumo: 'O crime está consumado quando nele se reúnem todos os elementos de sua definição legal e tentado quando, iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente (CP, art. 14). Salvo disposição em contrário, a tentativa é punida com a pena do consumado reduzida de um a dois terços. O CP também disciplina a desistência voluntária e o arrependimento eficaz (art. 15), em que o agente só responde pelos atos já praticados, e o arrependimento posterior (art. 16), causa de diminuição para crimes sem violência ou grave ameaça.',
    pontos: [
      'Tentativa (art. 14, II e parágrafo único): pena reduzida de 1/3 a 2/3, conforme a proximidade da consumação.',
      'Desistência voluntária e arrependimento eficaz (art. 15): o agente responde só pelos atos já praticados (ponte de ouro).',
      'A desistência precisa ser voluntária (não precisa ser espontânea); fugir ao ver a viatura não é voluntário — há tentativa.',
      'Arrependimento posterior (art. 16): crime sem violência ou grave ameaça à pessoa, reparação do dano ou restituição da coisa até o recebimento da denúncia ou queixa, por ato voluntário; redução de 1 a 2/3.',
      'Súmula 582 do STJ: o roubo se consuma com a inversão da posse, mediante violência ou grave ameaça, ainda que por breve tempo e com perseguição imediata, dispensada a posse mansa e pacífica.',
      'Não admitem tentativa, em regra: crimes culposos, preterdolosos, omissivos próprios, contravenções (por lei, não se pune) e habituais.'
    ],
    macetes: [
      'Tentativa: "1 a 2 terços" (TENTAtiva = TErços maiores). Arrependimento posterior também é 1 a 2/3.',
      'Fórmula de Frank: "posso, mas não quero" = desistência; "quero, mas não posso" = tentativa.'
    ],
    dicas: [
      'Roubo de celular com prisão logo depois pela PRF: roubo consumado (Súmula 582 STJ).',
      'Arrependimento posterior não cabe em roubo (há violência ou grave ameaça).',
      'Marco do arrependimento posterior: RECEBIMENTO da denúncia, não sentença nem oferecimento.'
    ],
    pegadinhas: [
      'Trocar a fração da tentativa por "1/6 a 1/3".',
      '"O roubo exige posse mansa e pacífica": errado.',
      '"Chegada da viatura e interrupção = desistência voluntária": errado, é tentativa.'
    ]
  },

  'Direito Penal|3.4 Crime impossível': {
    resumo: 'Crime impossível (tentativa inidônea) ocorre quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime (CP, art. 17). Nesses casos não se pune sequer a tentativa: o fato é atípico. O CP adotou a teoria objetiva temperada: só a inidoneidade absoluta afasta a punição; se relativa, há tentativa punível. A jurisprudência aplica a ideia ao flagrante preparado (Súmula 145 do STF) e a afasta nos furtos em lojas com vigilância (Súmula 567 do STJ).',
    pontos: [
      'Art. 17: ineficácia absoluta do meio (ex.: arma de brinquedo para matar, açúcar como veneno) ou impropriedade absoluta do objeto (ex.: matar cadáver, aborto sem gravidez).',
      'Teoria objetiva temperada: inidoneidade relativa = tentativa punível.',
      'Consequência: atipicidade; não há pena de tentativa reduzida.',
      'Súmula 145 do STF: não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação (flagrante preparado/provocado).',
      'Flagrante esperado (a polícia apenas aguarda, sem induzir) é válido e não configura crime impossível.',
      'Súmula 567 do STJ: sistema de vigilância eletrônica ou segurança no estabelecimento, por si só, não torna impossível o furto.'
    ],
    macetes: [
      'Crime impossível = "ABSOLUTAMENTE impossível"; relativo é tentativa.',
      'PREparado = PREso por armação (nulo); ESperado = ESpera legítima (válido).'
    ],
    dicas: [
      'Questões com "ineficácia relativa" ou "teoria subjetiva" estão erradas.',
      'Facadas em pessoa já morta: impropriedade absoluta do objeto.'
    ],
    pegadinhas: [
      '"No crime impossível, pune-se a tentativa reduzida": errado, é atípico.',
      '"Câmeras e seguranças tornam o furto impossível": errado (Súmula 567 STJ).',
      '"Flagrante esperado = Súmula 145": errado, ela trata do preparado.'
    ]
  },

  'Direito Penal|3.5 Punibilidade e causas de extinção': {
    resumo: 'Punibilidade é a possibilidade jurídica de o Estado impor a sanção penal após a prática do crime. O art. 107 do CP lista causas de extinção, como morte do agente, anistia, graça e indulto, abolitio criminis, prescrição, decadência e perempção, renúncia ao direito de queixa, perdão aceito, retratação nos casos legais e perdão judicial. A prescrição é a mais cobrada: os prazos do art. 109 são calculados pelo máximo da pena e reduzidos à metade se o agente era menor de 21 anos na data do fato ou maior de 70 na data da sentença (art. 115).',
    pontos: [
      'Art. 107: morte do agente; anistia, graça ou indulto; abolitio criminis; prescrição, decadência ou perempção; renúncia ou perdão aceito (ação privada); retratação, quando a lei admite; perdão judicial.',
      'Art. 109, VI: pena máxima inferior a 1 ano prescreve em 3 anos (não mais 2, desde a Lei 12.234/2010).',
      'Art. 115: prazos reduzidos de metade se o agente era menor de 21 anos ao tempo do crime ou maior de 70 na data da sentença.',
      'Súmula 438 do STJ: inadmissível a prescrição virtual (pela pena hipotética).',
      'Art. 108: a extinção da punibilidade do crime pressuposto não se estende ao crime que dele depende (ex.: furto e receptação).',
      'Perdão do ofendido é bilateral (exige aceitação); renúncia é unilateral; ambos só na ação penal privada.',
      'Sentença de perdão judicial não gera reincidência (art. 120) e é declaratória de extinção da punibilidade (Súmula 18 do STJ).'
    ],
    macetes: [
      'Prescrição: idade "21 no fato, 70 na sentença" — metade do prazo.',
      'Perdão = PAR (precisa de dois: quem perdoa e quem aceita); renúncia = SOLO.'
    ],
    dicas: [
      'A banca troca "na data da sentença" por "na data do fato" para o maior de 70.',
      'Renúncia e perdão não existem na ação pública incondicionada.'
    ],
    pegadinhas: [
      '"Pena máxima inferior a 1 ano prescreve em 2 anos": errado, 3 anos.',
      '"O perdão independe de aceitação": errado.',
      '"Perdão judicial gera reincidência": errado.'
    ]
  },

  'Direito Penal|4.1 Excludentes de ilicitude': {
    resumo: 'O art. 23 do CP prevê quatro causas que excluem a ilicitude: estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito. No estado de necessidade (art. 24), o agente sacrifica um bem para salvar outro de perigo atual que não provocou por sua vontade. Na legítima defesa (art. 25), repele injusta agressão, atual ou iminente, a direito seu ou de outrem, usando moderadamente os meios necessários. O Pacote Anticrime acrescentou a legítima defesa do agente de segurança pública que repele agressão a vítima mantida refém, desde que observados os requisitos legais.',
    pontos: [
      'Art. 23: estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito.',
      'Estado de necessidade exige perigo ATUAL; legítima defesa admite agressão ATUAL ou IMINENTE.',
      'Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo (art. 24, § 1º), nem quem provocou o perigo por sua vontade.',
      'Se era razoável exigir o sacrifício do bem, não há excludente, mas a pena pode ser reduzida de 1 a 2/3 (art. 24, § 2º).',
      'Legítima defesa de terceiro é admitida expressamente ("direito seu ou de outrem").',
      'Art. 25, parágrafo único (Lei 13.964/2019): legítima defesa do agente de segurança pública que repele agressão ou risco de agressão a vítima refém, observados os requisitos do caput.',
      'Agressão futura (prometida para dias depois) não autoriza legítima defesa.'
    ],
    macetes: [
      'Excludentes de ilicitude = "LEEE": Legítima defesa, Estado de necessidade, Estrito cumprimento, Exercício regular.',
      'Estado de necessidade = perigo ATUAL; legítima defesa = agressão ATUAL ou IMINENTE ("LD tem dois tempos").'
    ],
    dicas: [
      'Coação moral irresistível NÃO é excludente de ilicitude; exclui a culpabilidade (art. 22).',
      'A hipótese do refém não dispensa os requisitos do caput; itens que digam o contrário estão errados.'
    ],
    pegadinhas: [
      '"Estado de necessidade admite perigo iminente": a lei fala em perigo atual.',
      '"Quem provocou voluntariamente o perigo pode alegar estado de necessidade": errado.',
      '"Antecipar-se a agressão prometida para dias depois é legítima defesa": errado.'
    ]
  },

  'Direito Penal|4.2 Excesso punível': {
    resumo: 'O parágrafo único do art. 23 do CP determina que o agente, em qualquer das hipóteses de exclusão de ilicitude, responderá pelo excesso doloso ou culposo. A excludente continua a cobrir a parte da reação que ficou dentro dos limites legais; o agente responde apenas pelo que exceder. No excesso doloso, ele consciente e voluntariamente ultrapassa os limites (ex.: continua a agredir o agressor já desacordado) e responde por dolo; no culposo, excede por descuido na avaliação e responde por culpa, se houver tipo culposo.',
    pontos: [
      'Art. 23, parágrafo único: excesso doloso ou culposo é punível em TODAS as excludentes (não só na legítima defesa).',
      'O agente responde somente pelo resultado produzido após o excesso; a parte legítima continua amparada.',
      'Excesso doloso: responde pelo resultado excedente a título de dolo.',
      'Excesso culposo: responde a título de culpa, se o crime admitir forma culposa.',
      'Reação após a cessação da agressão não é legítima defesa: é excesso (ou nova agressão).',
      'Policial que usa força além do necessário no estrito cumprimento do dever legal responde pelo excesso.',
      'O "excesso exculpante" por medo, surpresa ou perturbação de ânimo está expresso no CPM, não no CP comum; neste, a doutrina o trata como causa supralegal de exclusão da culpabilidade.'
    ],
    macetes: [
      'Excesso = "passou do ponto, paga pelo que passou".',
      'Excesso cabe em TODAS: "LEEE com excesso".'
    ],
    dicas: [
      'Situação típica: abordagem em que o policial continua golpeando suspeito já contido.',
      'Item dizendo que o excesso só é punível a título de dolo está errado.'
    ],
    pegadinhas: [
      '"Excesso afasta integralmente a excludente": errado.',
      '"O CP só pune excesso na legítima defesa": errado.',
      '"O CP comum prevê expressamente a isenção por medo ou surpresa": errado.'
    ]
  },

  'Direito Penal|5.1 Excludentes de culpabilidade': {
    resumo: 'Na concepção finalista, a culpabilidade é composta por imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa. Afastado qualquer desses elementos, o agente fica isento de pena, embora o fato continue típico e ilícito. O art. 22 do CP trata da coação moral irresistível e da obediência hierárquica a ordem não manifestamente ilegal, casos em que só é punível o autor da coação ou da ordem. A embriaguez completa e involuntária (caso fortuito ou força maior) também isenta de pena (art. 28, § 1º).',
    pontos: [
      'Elementos da culpabilidade (finalismo): imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa.',
      'Coação MORAL irresistível: exclui a culpabilidade (inexigibilidade); só responde o coator. Coação FÍSICA irresistível exclui a própria conduta.',
      'Coação resistível: o coagido responde, com atenuante (art. 65, III, c).',
      'Obediência hierárquica (art. 22): ordem não manifestamente ilegal, de superior hierárquico em relação de direito público; só é punível o autor da ordem.',
      'Ordem manifestamente ilegal: ambos respondem; o subordinado pode ter atenuante.',
      'Emoção e paixão não excluem a imputabilidade (art. 28, I).',
      'Embriaguez voluntária ou culposa não exclui a imputabilidade (actio libera in causa); só a completa por caso fortuito ou força maior isenta de pena.'
    ],
    macetes: [
      'Culpabilidade = "IM-PO-EX": IMputabilidade, POtencial consciência, EXigibilidade.',
      'Coação MORAL = exclui culpa(bilidade); coação FÍSICA = exclui a conduta.'
    ],
    dicas: [
      'A banca adora trocar coação moral irresistível para "excludente de ilicitude": errado.',
      'Embriaguez incompleta fortuita só reduz a pena de 1 a 2/3 (art. 28, § 2º).'
    ],
    pegadinhas: [
      '"Coação moral resistível isenta de pena": errado.',
      '"Embriaguez voluntária completa exclui a imputabilidade": errado.',
      '"Emoção intensa exclui a imputabilidade": errado.'
    ]
  },

  'Direito Penal|5.2 Imputabilidade': {
    resumo: 'Imputabilidade é a capacidade de entender o caráter ilícito do fato e de determinar-se de acordo com esse entendimento, aferida no momento da conduta. Para a doença mental e o desenvolvimento mental incompleto ou retardado, o CP adota o critério biopsicológico (art. 26): não basta a doença, é preciso que ela retire a capacidade de entendimento ou autodeterminação. Para os menores de 18 anos, adota o critério puramente biológico (art. 27). O semi-imputável recebe pena reduzida de um a dois terços ou medida de segurança substitutiva.',
    pontos: [
      'Art. 26, caput: inimputável por doença mental, inteiramente incapaz ao tempo da ação → isento de pena (absolvição imprópria, com medida de segurança).',
      'Art. 26, parágrafo único: semi-imputável → pena reduzida de 1 a 2/3 (ou substituída por medida de segurança, art. 98).',
      'Critério biopsicológico para doença mental; biológico para menores de 18 (art. 27; CF, art. 228).',
      'Súmula 74 do STJ: o reconhecimento da menoridade do réu requer prova por documento hábil.',
      'Embriaguez preordenada não exclui a imputabilidade e é agravante (art. 61, II, l).',
      'A imputabilidade é aferida no momento da ação ou omissão; doença mental superveniente não torna o fato impune (pode suspender o processo ou converter a pena).'
    ],
    macetes: [
      'Inimputável: ISENTO; semi-imputável: REDUZ 1 a 2/3.',
      'Menor de 18: "a certidão basta" — critério biológico, sem perícia.'
    ],
    dicas: [
      'Item que dá redução de pena ao inteiramente incapaz está errado (ele é isento).',
      'Menor de 18 com plena consciência continua inimputável.'
    ],
    pegadinhas: [
      '"O semi-imputável é isento de pena": errado.',
      '"Critério puramente biológico para a doença mental": errado.',
      '"Imputabilidade aferida na sentença": errado.'
    ]
  },

  'Direito Penal|5.3 Erro de proibição': {
    resumo: 'Erro de proibição é o erro sobre a ilicitude do fato: o agente sabe o que faz, mas acredita que sua conduta é permitida. Regulado no art. 21 do CP, não exclui o dolo, mas afeta a potencial consciência da ilicitude, elemento da culpabilidade. Se inevitável, isenta de pena; se evitável, a pena pode ser diminuída de um sexto a um terço. Não se confunde com o desconhecimento da lei, que é inescusável, embora funcione como atenuante (art. 65, II).',
    pontos: [
      'Art. 21: o desconhecimento da lei é inescusável; o erro sobre a ilicitude, se inevitável, isenta de pena; se evitável, diminui de 1/6 a 1/3.',
      'Evitável é o erro quando era possível ao agente, nas circunstâncias, ter ou atingir a consciência da ilicitude (art. 21, parágrafo único).',
      'Não exclui o dolo nem permite punição culposa; atua na culpabilidade.',
      'Desconhecimento da lei: atenuante genérica (art. 65, II).',
      'Erro inevitável → absolvição (isenção de pena), não condenação com pena reduzida.'
    ],
    macetes: [
      'Proibição: "1/6 a 1/3" (a menor fração do CP); tentativa: "1/3 a 2/3".',
      'Erro de proibição = "sei o que faço, acho que pode".'
    ],
    dicas: [
      'A troca de frações (1 a 2/3) é a armadilha mais comum.',
      'Itens que mencionam "exclui o dolo" referem-se ao erro de tipo.'
    ],
    pegadinhas: [
      '"Erro de proibição inevitável permite punição a título de culpa": errado.',
      '"Desconhecimento da lei comprovado isenta de pena": errado.',
      '"Erro inevitável: juiz condena e reduz a pena": errado, isenta.'
    ]
  },

  'Direito Penal|6.1 Crimes contra a pessoa': {
    resumo: 'Os crimes contra a pessoa incluem os crimes contra a vida (homicídio, feminicídio, induzimento ao suicídio, infanticídio, aborto), as lesões corporais, a periclitação da vida e da saúde (como a omissão de socorro) e os crimes contra a liberdade pessoal. Com a Lei 14.994/2024, o feminicídio passou a ser crime autônomo (art. 121-A), com pena de reclusão de 20 a 40 anos. Também são recentes a perseguição (art. 147-A) e a violência psicológica contra a mulher (art. 147-B).',
    pontos: [
      'Feminicídio (art. 121-A, Lei 14.994/2024): matar mulher por razões da condição do sexo feminino; reclusão de 20 a 40 anos; deixou de ser qualificadora do art. 121.',
      'Homicídio qualificado (art. 121, § 2º): reclusão de 12 a 30 anos; homicídio simples: 6 a 20.',
      'Infanticídio (art. 123): matar o próprio filho, sob influência do estado puerperal, durante o parto ou logo após.',
      'Omissão de socorro (art. 135, parágrafo único): pena aumentada de metade se resulta lesão grave e triplicada se resulta morte.',
      'Perseguição (art. 147-A): ação penal pública condicionada à representação.',
      'Violência psicológica (art. 147-B): vítima é a mulher.',
      'Súmula 542 do STJ: lesão corporal resultante de violência doméstica contra a mulher é de ação pública incondicionada.',
      'Homicídio culposo na direção de veículo: art. 302 do CTB (especialidade).'
    ],
    macetes: [
      'Feminicídio: "121-A, 20 a 40" (A de autônomo).',
      'Omissão de socorro: "grave = metade; morte = triplo".'
    ],
    dicas: [
      'Itens que tratem o feminicídio como qualificadora do art. 121, § 2º, estão desatualizados (errados).',
      'Na rodovia, homicídio culposo no trânsito vai para o CTB, não para o CP.'
    ],
    pegadinhas: [
      '"Perseguição é de ação pública incondicionada": errado, depende de representação.',
      '"Violência psicológica do art. 147-B pode ter qualquer pessoa como vítima": errado.',
      '"Homicídio por motivo fútil: 6 a 20 anos": errado, é qualificado (12 a 30).'
    ]
  },

  'Direito Penal|6.2 Crimes contra o patrimônio': {
    resumo: 'Os crimes contra o patrimônio mais cobrados na PRF são furto, roubo, latrocínio, estelionato e receptação, todos frequentes em rodovias. O roubo tem majorantes escalonadas: arma branca (aumento de 1/3 até metade), arma de fogo (2/3) e arma de fogo de uso restrito ou proibido (pena em dobro). O furto de veículo levado a outro estado ou ao exterior é qualificado (reclusão de 3 a 8 anos). Desde o Pacote Anticrime, o estelionato é, em regra, de ação pública condicionada à representação, com exceções (vítima maior de 70 anos, entre outras).',
    pontos: [
      'Roubo (art. 157): § 2º, VII — arma branca: +1/3 até 1/2; § 2º-A, I — arma de fogo: +2/3; § 2º-B — arma de fogo de uso restrito ou proibido: pena em dobro.',
      'Furto qualificado de veículo automotor transportado para outro estado ou exterior: reclusão de 3 a 8 anos (art. 155, § 5º).',
      'Súmula 610 do STF: há latrocínio quando o homicídio se consuma, ainda que não realizada a subtração.',
      'Receptação (art. 180, § 4º): punível ainda que desconhecido ou isento de pena o autor do crime antecedente.',
      'Estelionato (art. 171, § 5º): representação, salvo vítima Administração Pública, criança ou adolescente, pessoa com deficiência mental, maior de 70 anos ou incapaz.',
      'Súmula 442 do STJ: inadmissível aplicar ao furto qualificado pelo concurso de agentes a majorante do roubo.'
    ],
    macetes: [
      'Roubo com arma: Branca 1/3-1/2, Fogo 2/3, Restrita = Dobro ("B-F-D").',
      'Estelionato incondicionado: "CAIDI 70" — Criança/adolescente, Administração, Incapaz, Deficiente mental, Idoso +70.'
    ],
    dicas: [
      'Condutor flagrado na rodovia com veículo que sabe ser furtado: receptação ("conduzir" está no tipo).',
      'Latrocínio: o que importa é a morte consumada (Súmula 610 STF).'
    ],
    pegadinhas: [
      '"Arma branca não gera aumento": errado desde a Lei 13.964/2019.',
      '"Arma de uso restrito: +2/3": errado, aplica-se em dobro.',
      '"Estelionato contra idoso de 75 anos depende de representação": errado.'
    ]
  },

  'Direito Penal|6.3 Crimes contra a dignidade sexual': {
    resumo: 'O Título VI do CP protege a dignidade e a liberdade sexual. O estupro (art. 213) é constranger alguém, mediante violência ou grave ameaça, a ter conjunção carnal ou a praticar ou permitir ato libidinoso, podendo ter qualquer pessoa como vítima. O estupro de vulnerável (art. 217-A) envolve menor de 14 anos ou pessoa sem discernimento ou capacidade de resistir. A Lei 13.718/2018 criou a importunação sexual (art. 215-A) e tornou todos esses crimes de ação penal pública incondicionada.',
    pontos: [
      'Art. 225 (Lei 13.718/2018): ação penal pública incondicionada nos crimes contra a liberdade sexual e nos crimes sexuais contra vulnerável.',
      'Estupro (art. 213): sujeito passivo é qualquer pessoa; abrange conjunção carnal e outros atos libidinosos.',
      'Estupro de vulnerável (art. 217-A): menor de 14 anos.',
      'Súmula 593 do STJ: irrelevantes o consentimento, a experiência sexual anterior ou o relacionamento amoroso com o agente.',
      'Importunação sexual (art. 215-A): praticar ato libidinoso contra alguém sem anuência, para satisfazer a própria lascívia ou a de terceiro; é crime, não contravenção.',
      'Assédio sexual (art. 216-A): prevalecimento da condição de superior hierárquico ou ascendência inerentes a emprego, cargo ou função.'
    ],
    macetes: [
      'Vulnerável = "menor de 14" (não 16, não 18).',
      'Sexuais desde 2018: "todos incondicionados".'
    ],
    dicas: [
      'Caso típico: passageiro de ônibus interestadual que pratica ato libidinoso sem violência contra passageira → importunação sexual.',
      'Itens que limitam a vítima do estupro à mulher estão errados.'
    ],
    pegadinhas: [
      '"Vítima maior e capaz: ação condicionada": errado desde 2018.',
      '"Importunação sexual é contravenção": errado.',
      '"Consentimento de vítima de 13 anos com experiência anterior afasta o crime": errado (Súmula 593 STJ).'
    ]
  },

  'Direito Penal|6.4 Crimes contra a incolumidade pública': {
    resumo: 'Os crimes contra a incolumidade pública (Título VIII) protegem a segurança da coletividade e são, em regra, crimes de perigo comum, que expõem a risco número indeterminado de pessoas. Destacam-se o incêndio (art. 250), que admite forma culposa, e os crimes contra a segurança dos meios de transporte, como o atentado contra a segurança de outro meio de transporte (art. 262) e o arremesso de projétil (art. 264), contra veículo em movimento destinado ao transporte público. O art. 258 prevê o aumento de pena quando do crime de perigo comum resulta lesão grave ou morte.',
    pontos: [
      'Incêndio (art. 250): causar incêndio expondo a perigo a vida, a integridade física ou o patrimônio de outrem; § 2º prevê forma culposa.',
      'Incêndio: pena aumentada de 1/3 se cometido com intuito de obter vantagem pecuniária (§ 1º, I).',
      'Art. 262: expor a perigo outro meio de transporte público, impedir-lhe ou dificultar-lhe o funcionamento.',
      'Arremesso de projétil (art. 264): contra veículo EM MOVIMENTO destinado ao transporte público por terra, água ou ar.',
      'Art. 258: no crime doloso de perigo comum, lesão grave → pena aumentada de metade; morte → aplicada em dobro.',
      'São crimes de perigo coletivo (comum), não individual.'
    ],
    macetes: [
      'Art. 264 = "pedra no ônibus andando": transporte PÚBLICO + EM MOVIMENTO.',
      'Art. 258 doloso: "grave = metade; morte = dobro".'
    ],
    dicas: [
      'Pedra em carro particular de família não é art. 264 (pode ser dano, lesão ou tentativa de homicídio).',
      'Incêndio está entre os crimes contra a incolumidade pública, não contra o patrimônio.'
    ],
    pegadinhas: [
      '"Art. 264 exige veículo parado": errado, exige movimento.',
      '"Morte no crime doloso de perigo comum aumenta 1/3": errado, a pena é em dobro.',
      '"Crimes de perigo individual": errado, são de perigo comum.'
    ]
  },

  'Direito Penal|6.5 Crimes contra a fé pública': {
    resumo: 'Os crimes contra a fé pública protegem a confiança coletiva em moedas, documentos, sinais e identidades. Na rotina da PRF, são frequentes o uso de documento falso (CNH, CRLV), a adulteração de sinal identificador de veículo (art. 311), a falsa identidade (art. 307) e a moeda falsa (art. 289). Há súmulas importantes: a falsa identidade perante a polícia é típica mesmo em autodefesa (Súmula 522 do STJ) e a competência para o uso de documento falso é fixada pelo órgão a que o documento foi apresentado (Súmula 546 do STJ).',
    pontos: [
      'Moeda falsa (art. 289): abrange moeda metálica ou papel-moeda de curso legal no país ou no estrangeiro.',
      'Art. 289, § 1º: mesma pena para quem importa, exporta, adquire, vende, guarda ou introduz na circulação moeda falsa.',
      'Art. 289, § 2º: quem recebe de boa-fé e restitui à circulação após conhecer a falsidade tem pena bem menor (detenção de 6 meses a 2 anos e multa).',
      'Súmula 73 do STJ: papel-moeda grosseiramente falsificado configura, em tese, estelionato, da competência da Justiça Estadual.',
      'Uso de documento falso (art. 304): pena cominada à falsificação ou alteração do documento usado (não tem pena própria fixa).',
      'Súmula 546 do STJ: competência definida pela entidade ou órgão ao qual o documento foi apresentado; CNH falsa apresentada à PRF → Justiça Federal.',
      'Súmula 522 do STJ: atribuir-se falsa identidade perante autoridade policial é típico, ainda que em alegada autodefesa.',
      'Adulteração de sinal identificador de veículo (art. 311): adulterar ou remarcar chassi, placa ou qualquer sinal identificador sem autorização.'
    ],
    macetes: [
      'Competência do documento falso: "quem RECEBEU manda" (não quem expediu).',
      'Moeda grosseira = "não engana ninguém da fé pública": estelionato, Justiça Estadual.'
    ],
    dicas: [
      'Cenário clássico: motorista apresenta CNH falsa ao PRF → uso de documento falso, Justiça Federal.',
      'Mentir o nome ao PRF para esconder mandado de prisão: falsa identidade típica.'
    ],
    pegadinhas: [
      '"Competência pelo órgão expedidor": errado (Súmula 546).',
      '"Moeda falsa não abrange moeda estrangeira": errado.',
      '"Recebeu de boa-fé e repassou: mesma pena do caput": errado, pena privilegiada.'
    ]
  },

  'Direito Penal|6.6 Crimes contra a Administração Pública': {
    resumo: 'Este capítulo reúne crimes praticados por funcionário público contra a Administração (peculato, concussão, corrupção passiva, prevaricação) e por particular contra ela (resistência, desobediência, desacato, corrupção ativa). Na fiscalização rodoviária, o cenário clássico é o motorista que oferece dinheiro ao policial (corrupção ativa, crime formal) e o policial que exige vantagem (concussão) ou a solicita (corrupção passiva). No peculato culposo, a reparação do dano antes da sentença irrecorrível extingue a punibilidade.',
    pontos: [
      'Corrupção ativa (art. 333): oferecer ou prometer vantagem indevida a funcionário para que pratique, omita ou retarde ato de ofício; formal, consuma-se com a oferta.',
      'Art. 333, parágrafo único: pena aumentada de 1/3 se o funcionário retarda, omite ou pratica o ato infringindo dever funcional.',
      'Concussão (art. 316): EXIGIR vantagem indevida; corrupção passiva (art. 317): SOLICITAR, RECEBER ou ACEITAR promessa.',
      'Corrupção passiva configura-se ainda que fora da função ou antes de assumi-la, mas em razão dela.',
      'Peculato culposo (art. 312, § 3º): reparação antes da sentença irrecorrível extingue a punibilidade; se posterior, reduz a pena de metade.',
      'Resistência (art. 329): exige violência ou ameaça; se o ato não se executa, reclusão de 1 a 3 anos (§ 1º).',
      'Desacato (art. 331): detenção de 6 meses a 2 anos, ou multa.'
    ],
    macetes: [
      'ExigIR = concussão (Imposição); SolicitAR = corrupção passiva (pedido).',
      'Peculato culposo: "reparou ANTES = extingue; DEPOIS = metade".'
    ],
    dicas: [
      'Corrupção ativa independe de aceitação do policial; se ele aceitar, responde por corrupção passiva (exceção à teoria monista).',
      'Recusa passiva de sair do veículo, sem violência ou ameaça, pode ser desobediência, não resistência.'
    ],
    pegadinhas: [
      '"Corrupção ativa só se consuma com a aceitação": errado.',
      '"Reparação após a sentença irrecorrível extingue a punibilidade no peculato culposo": errado.',
      '"Desacato punido só com multa": errado (detenção ou multa).'
    ]
  },

  /* ===================== DIREITO PROCESSUAL PENAL ===================== */

  'Direito Processual Penal|1.1 Ação penal: conceito': {
    resumo: 'Ação penal é o direito público subjetivo de pedir ao Estado-juiz a aplicação do direito penal objetivo a um caso concreto. É autônoma e abstrata: existe independentemente do resultado do processo. Pelo art. 100 do CP, a ação é pública, salvo quando a lei a declara privativa do ofendido; no silêncio da lei, é pública incondicionada. A pública é promovida privativamente pelo Ministério Público por denúncia (CF, art. 129, I); a privada, pelo ofendido por queixa-crime, mas o direito de punir continua pertencendo ao Estado.',
    pontos: [
      'Ação penal: direito público, subjetivo, autônomo e abstrato.',
      'CP, art. 100: regra é a ação pública; a privada precisa de previsão expressa.',
      'Silêncio da lei = ação pública incondicionada.',
      'CF, art. 129, I: o MP promove privativamente a ação penal pública.',
      'Peças inaugurais: denúncia (pública) e queixa-crime (privada).',
      'Na ação privada, o Estado transfere ao ofendido apenas a legitimidade para agir (substituição processual); o jus puniendi continua estatal.',
      'Inquérito policial não é ação penal; é procedimento administrativo pré-processual e dispensável.'
    ],
    macetes: [
      'Lei muda? "Na dúvida, pública incondicionada".',
      'Denúncia = MP; Queixa = Querelante (ofendido).'
    ],
    dicas: [
      'O policial rodoviário não "dá início" à ação penal ao lavrar a ocorrência: só o MP oferece denúncia.',
      'Abstrato não significa depender de sentença procedente; é o oposto.'
    ],
    pegadinhas: [
      '"Na ação privada, o direito de punir passa ao ofendido": errado.',
      '"Lei omissa: presume-se ação privada": errado.',
      '"O inquérito é a peça inaugural da ação pública": errado.'
    ]
  },

  'Direito Processual Penal|1.2 Ação penal: características': {
    resumo: 'A ação penal pública é regida pelos princípios da obrigatoriedade (presentes os requisitos, o MP deve denunciar), indisponibilidade (o MP não pode desistir da ação nem do recurso interposto), oficialidade (promovida por órgão oficial) e intranscendência. A ação privada segue a oportunidade (o ofendido escolhe se processa), a disponibilidade (pode perdoar ou deixar perimir) e a indivisibilidade (a queixa contra um obriga ao processo de todos). A transação penal, o ANPP (art. 28-A do CPP) e a colaboração premiada são vistos como mitigações da obrigatoriedade.',
    pontos: [
      'Obrigatoriedade: o MP deve oferecer denúncia se houver prova da materialidade e indícios de autoria (mitigada por transação penal e ANPP).',
      'Indisponibilidade: o MP não pode desistir da ação (CPP, art. 42) nem do recurso que haja interposto (art. 576).',
      'Ação privada: oportunidade/conveniência e disponibilidade (perdão, perempção, desistência).',
      'Indivisibilidade (art. 48): a queixa contra qualquer dos autores obriga ao processo de todos; o MP velará pela indivisibilidade.',
      'Art. 49: renúncia em relação a um dos autores estende-se a todos.',
      'Art. 51: perdão concedido a um dos querelados aproveita a todos, mas não produz efeito em relação ao que o recusar.',
      'Intranscendência: a ação só pode ser proposta contra quem é apontado como autor ou partícipe.'
    ],
    macetes: [
      'Pública = "OIOI": Obrigatoriedade, Indisponibilidade, Oficialidade, Intranscendência.',
      'Privada = "ODI": Oportunidade, Disponibilidade, Indivisibilidade.'
    ],
    dicas: [
      'Perdão é bilateral: quem recusa não é alcançado.',
      'Desistir da denúncia ou do recurso é vedado ao MP; pedir absolvição em alegações finais é permitido.'
    ],
    pegadinhas: [
      '"Ação privada regida pela obrigatoriedade": errado.',
      '"Renúncia a um autor não alcança os demais": errado.',
      '"Oficialidade significa que a ação privada é promovida por órgão do Estado": errado.'
    ]
  },

  'Direito Processual Penal|1.3 Ação penal: espécies': {
    resumo: 'A ação penal pública divide-se em incondicionada e condicionada (à representação do ofendido ou à requisição do Ministro da Justiça). A privada divide-se em exclusiva (propriamente dita), personalíssima (só o ofendido pode propor, como no art. 236 do CP) e subsidiária da pública, cabível apenas quando o MP fica inerte no prazo legal. A representação é retratável até o oferecimento da denúncia (CPP, art. 25). Mudanças legislativas recentes mexeram na espécie de vários crimes: sexuais passaram a incondicionados (Lei 13.718/2018) e o estelionato passou a condicionado (Lei 13.964/2019).',
    pontos: [
      'Pública condicionada: depende de representação do ofendido ou de requisição do Ministro da Justiça (CPP, art. 24).',
      'Retratação da representação: possível só até o OFERECIMENTO da denúncia (art. 25; CP, art. 102).',
      'Ação privada subsidiária (CF, art. 5º, LIX; CPP, art. 29): cabe na inércia do MP, não quando ele pede arquivamento.',
      'Na subsidiária, o MP pode aditar a queixa, repudiá-la e oferecer denúncia substitutiva, intervir e retomar a ação como parte principal em caso de negligência do querelante.',
      'Morte do ofendido: o direito passa a cônjuge, ascendente, descendente ou irmão (art. 31), salvo na personalíssima.',
      'Súmula 542 do STJ: lesão corporal leve em violência doméstica contra a mulher → pública incondicionada.',
      'Estelionato: em regra, pública condicionada desde o Pacote Anticrime.'
    ],
    macetes: [
      'Sucessão processual = CADI: Cônjuge, Ascendente, Descendente, Irmão.',
      'Retratação: "ofereceu, travou".'
    ],
    dicas: [
      'Arquivamento pedido pelo MP não é inércia: não cabe queixa subsidiária.',
      'Personalíssima (induzimento a erro essencial no casamento): morre o ofendido, extingue-se a punibilidade.'
    ],
    pegadinhas: [
      '"Retratação até a sentença": errado, até o oferecimento da denúncia.',
      '"O direito de queixa sempre se extingue com a morte do ofendido": errado, só na personalíssima.',
      '"Com o Pacote Anticrime, o estelionato passou a incondicionado": errado, ao contrário.'
    ]
  },

  'Direito Processual Penal|1.4 Ação penal: condições': {
    resumo: 'Para que a ação penal seja exercida validamente, exigem-se condições genéricas (legitimidade, interesse, possibilidade jurídica e justa causa, entendida como lastro probatório mínimo) e, em certos casos, condições específicas de procedibilidade, como a representação do ofendido e a requisição do Ministro da Justiça. Faltando condição ou pressuposto, ou sendo a peça inepta, a denúncia ou queixa será rejeitada (CPP, art. 395). A representação não exige forma sacramental e deve ser oferecida em seis meses contados do conhecimento da autoria (art. 38).',
    pontos: [
      'Art. 395: rejeição da denúncia ou queixa por inépcia manifesta, falta de pressuposto processual ou condição da ação, ou falta de justa causa.',
      'Justa causa: prova da materialidade e indícios suficientes de autoria.',
      'Legitimidade: MP na pública; ofendido ou representante na privada.',
      'Art. 5º, § 4º: o inquérito, nos crimes de ação condicionada à representação, não pode ser iniciado sem ela.',
      'Representação dispensa forma sacramental: basta manifestação inequívoca de vontade; pode ser escrita ou oral, ao juiz, MP ou autoridade policial (art. 39).',
      'Prazo decadencial de 6 meses a contar do dia em que o ofendido vier a saber quem é o autor (art. 38).',
      'Requisição do Ministro da Justiça não vincula o MP e não se sujeita ao prazo decadencial de 6 meses.'
    ],
    macetes: [
      'Prazo de representação: "6 meses do conhecimento da AUTORIA, não do fato".',
      'Requisição do MJ = "autoriza, mas não obriga".'
    ],
    dicas: [
      'Boletim de ocorrência registrado pela vítima pode valer como representação.',
      'Na pública incondicionada, a vítima não tem legitimidade concorrente (só na subsidiária, se houver inércia).'
    ],
    pegadinhas: [
      '"A representação exige termo formal com essa denominação": errado.',
      '"Prazo contado da data do fato": errado.',
      '"A requisição do MJ vincula o MP": errado.'
    ]
  },

  'Direito Processual Penal|2 Termo Circunstanciado de Ocorrência (Lei 9.099/1995)': {
    resumo: 'O Termo Circunstanciado de Ocorrência (TCO) substitui o auto de prisão em flagrante e o inquérito nas infrações de menor potencial ofensivo: contravenções penais e crimes com pena máxima não superior a dois anos, cumulada ou não com multa (Lei 9.099/1995, art. 61). É um registro simplificado, encaminhado imediatamente ao Juizado. Se o autor do fato for encaminhado ao Juizado ou assumir o compromisso de comparecer, não se imporá prisão em flagrante nem se exigirá fiança (art. 69, parágrafo único). Na rodovia, é comum para a direção sem habilitação gerando perigo (art. 309 do CTB).',
    pontos: [
      'IMPO (art. 61): contravenções e crimes com pena MÁXIMA não superior a 2 anos.',
      'Art. 69: a autoridade policial lavra o TCO e o encaminha imediatamente ao Juizado, com autor e vítima, providenciando as requisições de exames periciais.',
      'Art. 69, parágrafo único: compromisso de comparecer → não há prisão em flagrante nem fiança.',
      'Art. 309 do CTB (máximo de 1 ano): TCO; art. 306 do CTB (máximo de 3 anos): não é IMPO, cabe auto de prisão em flagrante.',
      'Lei Maria da Penha, art. 41: não se aplica a Lei 9.099/1995 aos crimes de violência doméstica contra a mulher, independentemente da pena.',
      'Porte de droga para consumo (Lei 11.343/2006, art. 48, § 2º): não se impõe prisão em flagrante; TCO e encaminhamento ao juízo.',
      'O STF entende que o TCO não é ato de investigação, e sim peça informativa, admitindo sua lavratura por autoridades policiais diversas do delegado.'
    ],
    macetes: [
      'IMPO = "máximo de 2" (olhe a pena MÁXIMA, nunca a mínima).',
      'TCO = "Termo Curto e Objetivo": sem indiciamento, sem inquérito.'
    ],
    dicas: [
      'Compare as penas do CTB: 309 (até 1 ano) é IMPO; 306 e 303 com agravantes geralmente não.',
      'O TCO é sumário: não exige apuração exaustiva nem indiciamento formal.'
    ],
    pegadinhas: [
      '"IMPO: pena mínima igual ou inferior a 1 ano": confunde com a suspensão condicional do processo.',
      '"Assumido o compromisso, ainda assim deve ser preso e pagar fiança": errado.',
      '"Violência doméstica com pena até 2 anos segue a Lei 9.099": errado.'
    ]
  },

  'Direito Processual Penal|2.1 Atos processuais: forma, lugar e tempo': {
    resumo: 'Os atos processuais penais são, em regra, públicos, mas a publicidade pode ser restringida para evitar escândalo, inconveniente grave ou perigo de perturbação da ordem (CPP, art. 792, § 1º). Os prazos são contínuos e peremptórios, não se interrompendo por férias, domingos ou feriados (art. 798); exclui-se o dia do começo e inclui-se o do vencimento, prorrogando-se para o dia útil seguinte o prazo que terminar em domingo ou feriado. Diferentemente do processo civil, conta-se o prazo da data da intimação, e não da juntada do mandado (Súmula 710 do STF).',
    pontos: [
      'Art. 792: publicidade como regra; restrição possível (portas fechadas, número limitado de pessoas).',
      'Art. 798: prazos contínuos e peremptórios; não se interrompem por férias, domingo ou feriado.',
      'Art. 798, § 1º: não se computa o dia do começo, inclui-se o do vencimento; § 3º: termina em domingo ou feriado → prorroga para o dia útil imediato.',
      'Súmula 710 do STF: prazos contam-se da intimação, não da juntada do mandado ou da precatória.',
      'Súmula 310 do STF: intimação na sexta-feira → prazo começa na segunda-feira, salvo se não houver expediente.',
      'Art. 797: sessões de julgamento NÃO serão marcadas para domingo ou feriado; os demais atos podem ser praticados nesses dias.',
      'Prisão pode ser feita em qualquer dia e hora, respeitada a inviolabilidade do domicílio (art. 283, § 2º).',
      'Art. 798-A: suspensão de prazos de 20/12 a 20/01, salvo processos com réu preso, entre outras exceções.'
    ],
    macetes: [
      'Prazo penal: "da intimação, sem pausa, pula o 1º dia".',
      'Julgamento descansa no domingo; os demais atos não.'
    ],
    dicas: [
      'A banca aplica regras do CPC ao processo penal para induzir o erro (juntada, dias úteis).',
      'No JECrim, os atos podem ocorrer em horário noturno e em qualquer dia da semana (Lei 9.099, art. 64).'
    ],
    pegadinhas: [
      '"Prazos interrompidos por férias e feriados": errado.',
      '"Prazo conta da juntada do mandado": errado (Súmula 710 STF).',
      '"Prisão só em dias úteis no horário forense": errado.'
    ]
  },

  'Direito Processual Penal|3.1 Prova: conceito, objeto e classificação': {
    resumo: 'Prova é o conjunto de elementos que permitem ao juiz formar convicção sobre os fatos. Seu objeto são os fatos relevantes para a causa; não precisam de prova os fatos notórios, os axiomáticos, as presunções legais absolutas e os inúteis. Diferentemente do processo civil, o fato incontroverso ainda precisa ser provado, pela busca da verdade e pela indisponibilidade do processo penal. O CPP adota o sistema do livre convencimento motivado (art. 155), vedando condenação baseada exclusivamente em elementos do inquérito, salvo provas cautelares, não repetíveis e antecipadas.',
    pontos: [
      'Independem de prova: fatos notórios, axiomáticos, presunções absolutas e fatos inúteis.',
      'Fato admitido pelas partes (incontroverso) não dispensa prova no processo penal.',
      'Direito federal não precisa ser provado; direito estadual, municipal, estrangeiro e consuetudinário pode precisar.',
      'Art. 155: livre convencimento motivado; elementos do inquérito não bastam sozinhos para a condenação.',
      'Art. 155, parágrafo único: quanto ao estado das pessoas, observam-se as restrições da lei civil (ex.: menoridade provada por documento).',
      'Art. 239: indício é a circunstância conhecida e provada que, relacionada ao fato, autoriza por indução concluir outra circunstância.',
      'Prova direta demonstra o próprio fato; indireta (indícios) chega a ele por raciocínio.',
      'Quanto ao sujeito: pessoal (testemunho, interrogatório) e real (arma, vestígio).'
    ],
    macetes: [
      'Sistemas: Íntima convicção (júri), Tarifada (resquícios), Livre convencimento MOTIVADO (regra).',
      'INdício = INdução (indireta).'
    ],
    dicas: [
      'Itens que dizem que o CPP adota a prova tarifada como regra estão errados.',
      'Inquérito tem valor informativo; não se equipara à prova produzida em contraditório.'
    ],
    pegadinhas: [
      '"Fato incontroverso dispensa prova como no CPC": errado.',
      '"Prova direta infere o fato por indução": errado, essa é a indireta.',
      '"O direito federal deve ser provado por quem o alega": errado.'
    ]
  },

  'Direito Processual Penal|3.2 Preservação de local de crime': {
    resumo: 'A preservação do local de crime garante a idoneidade da prova pericial. O art. 6º, I, do CPP manda a autoridade policial dirigir-se ao local e impedir alterações até a chegada dos peritos. O Pacote Anticrime disciplinou a cadeia de custódia (arts. 158-A a 158-F): ela começa com a preservação do local ou com procedimentos em que se detecte vestígio, e o agente público que reconhecer elemento de interesse pericial fica responsável por sua preservação. É proibido entrar em local isolado ou remover vestígios antes da liberação pelo perito. Nos acidentes de trânsito, a Lei 5.970/1973 permite a remoção imediata de pessoas e veículos que prejudiquem o tráfego.',
    pontos: [
      'Art. 158-A: cadeia de custódia é o conjunto de procedimentos para manter e documentar a história cronológica do vestígio.',
      'Art. 158-A, § 1º: início com a preservação do local de crime ou com procedimentos policiais ou periciais que detectem vestígio.',
      'Art. 158-A, § 2º: o agente público que reconhecer elemento de potencial interesse pericial fica responsável por sua preservação.',
      'Art. 158-A, § 3º: vestígio é todo objeto ou material bruto, visível ou latente, constatado ou recolhido.',
      'Art. 158-B: etapas — reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento e descarte.',
      'Art. 158-C: coleta preferencialmente por perito oficial; § 2º proíbe a entrada em locais isolados e a remoção de vestígios antes da liberação pelo perito (configura fraude processual).',
      'Art. 169, parágrafo único: peritos registram no laudo as alterações do local e discutem suas consequências.',
      'Lei 5.970/1973: em acidente de trânsito, a autoridade ou agente pode autorizar a remoção imediata de pessoas e veículos que estejam no leito da via prejudicando o tráfego, independentemente de exame do local.'
    ],
    macetes: [
      'Etapas da cadeia = "RIFCATRPAD": Reconhecimento, Isolamento, Fixação, Coleta, Acondicionamento, Transporte, Recebimento, Processamento, Armazenamento, Descarte.',
      'Primeiro na cena: "isola, preserva, não mexe".'
    ],
    dicas: [
      'Na rodovia, a prioridade é socorrer vítimas e liberar o tráfego: a remoção dos veículos é permitida pela Lei 5.970/1973.',
      'O PRF que chega primeiro isola; quem coleta, preferencialmente, é o perito.'
    ],
    pegadinhas: [
      '"Vestígio é só o visível a olho nu": errado, inclui latentes.',
      '"O primeiro policial deve obrigatoriamente coletar os vestígios": errado.',
      '"Em acidente com vítima, os veículos devem obrigatoriamente permanecer na via até a perícia": errado.'
    ]
  },

  'Direito Processual Penal|3.3 Requisitos e ônus da prova': {
    resumo: 'O art. 156 do CPP estabelece que a prova da alegação incumbe a quem a fizer, mas, por força da presunção de inocência, a acusação suporta o ônus de provar a materialidade, a autoria e o dolo; havendo dúvida razoável, o réu deve ser absolvido (in dubio pro reo; art. 386, VI e VII). O juiz pode indeferir provas irrelevantes, impertinentes ou protelatórias (art. 400, § 1º) e tem iniciativa probatória limitada: produção antecipada de provas urgentes (com necessidade, adequação e proporcionalidade) e diligências para dirimir dúvida relevante. O art. 3º-A consagra a estrutura acusatória.',
    pontos: [
      'Art. 156: a prova da alegação incumbe a quem a fizer.',
      'Presunção de inocência: ônus da acusação quanto aos fatos constitutivos (inclusive dolo); o réu não precisa provar inocência.',
      'Art. 386, VI: absolvição se houver circunstâncias que excluam o crime ou isentem de pena, ou mesmo fundada dúvida sobre sua existência.',
      'Art. 156, I: produção antecipada de provas urgentes e relevantes, observando necessidade, adequação e proporcionalidade.',
      'Art. 156, II: o juiz pode determinar diligências para dirimir dúvida sobre ponto relevante.',
      'Art. 400, § 1º: indeferimento de provas irrelevantes, impertinentes ou protelatórias.',
      'Art. 3º-A: estrutura acusatória, vedadas a iniciativa do juiz na investigação e a substituição da atuação probatória da acusação (o STF deu interpretação conforme, preservando a atuação supletiva do juiz).',
      'Prova emprestada é admitida, desde que submetida ao contraditório.'
    ],
    macetes: [
      'Dúvida = absolve (in dubio pro reo, não pro societate na sentença).',
      'Produção antecipada pelo juiz = "NAP": Necessidade, Adequação, Proporcionalidade.'
    ],
    dicas: [
      '"In dubio pro societate" na sentença final é sempre errado.',
      'O dolo nunca se presume a partir da materialidade.'
    ],
    pegadinhas: [
      '"Cabe ao réu provar que não praticou o crime": errado.',
      '"Antecipação de provas sem observar necessidade e adequação": errado.',
      '"Prova emprestada é sempre inadmissível": errado.'
    ]
  },

  'Direito Processual Penal|3.4 Provas ilícitas': {
    resumo: 'São inadmissíveis as provas obtidas por meios ilícitos (CF, art. 5º, LVI), assim entendidas as obtidas em violação a normas constitucionais ou legais, devendo ser desentranhadas e, preclusa a decisão, inutilizadas (CPP, art. 157). As provas derivadas também são inadmissíveis (frutos da árvore envenenada), salvo quando não houver nexo causal ou puderem ser obtidas por fonte independente. Na prática policial, os tribunais exigem fundada suspeita objetiva para a busca pessoal, fundadas razões para o ingresso em domicílio e autorização para acessar dados do celular.',
    pontos: [
      'Art. 157, caput: provas ilícitas são inadmissíveis e devem ser desentranhadas.',
      'Art. 157, § 1º: derivadas também são inadmissíveis, salvo ausência de nexo causal ou fonte independente.',
      'Art. 157, § 3º: preclusa a decisão, a prova será inutilizada por decisão judicial (não fica arquivada indefinidamente).',
      'STF (Tema 237 da repercussão geral): é lícita a gravação ambiental feita por um dos interlocutores sem o conhecimento do outro.',
      'STF (Tema 280 da repercussão geral): ingresso forçado em domicílio sem mandado, mesmo à noite, é lícito quando amparado em fundadas razões, justificadas a posteriori, que indiquem flagrante delito.',
      'STJ: denúncia anônima, por si só, não autoriza ingresso em domicílio; busca pessoal não pode basear-se apenas em impressões subjetivas ("atitude suspeita", nervosismo).',
      'STJ: acesso a mensagens e dados do celular apreendido, sem consentimento ou autorização judicial, é ilícito.',
      'Prova ilícita é admitida quando for o único meio de demonstrar a inocência do réu (pro reo).'
    ],
    macetes: [
      'Exceções à derivada = "SEM NEXO ou FONTE INDEPENDENTE".',
      'Domicílio sem mandado = "fundadas razões + justificativa depois".'
    ],
    dicas: [
      'Cenário de abordagem: PRF que vasculha WhatsApp do condutor sem autorização produz prova ilícita.',
      'Desentranhada a prova, ela é inutilizada, com faculdade de acompanhamento pelas partes.'
    ],
    pegadinhas: [
      '"Derivadas são sempre admissíveis": errado.',
      '"Nervosismo autoriza busca pessoal": errado (STJ).',
      '"Denúncia anônima basta para entrar na casa": errado.'
    ]
  },

  'Direito Processual Penal|3.5 Meios de prova': {
    resumo: 'O CPP disciplina diversos meios de prova: exame de corpo de delito e perícias, interrogatório, confissão, testemunhas, reconhecimento de pessoas e coisas, acareação, documentos e indícios. Quando a infração deixa vestígios, o exame de corpo de delito é indispensável e não pode ser suprido pela confissão (art. 158), mas, desaparecidos os vestígios, a prova testemunhal pode supri-lo (art. 167). A confissão é divisível e retratável (art. 200). Desde o HC 598.886 (2020), o STJ entende que as formalidades do reconhecimento de pessoas (art. 226) são garantias mínimas, e não meras recomendações.',
    pontos: [
      'Art. 158: infração que deixa vestígios exige exame de corpo de delito, direto ou indireto; a confissão não o supre.',
      'Art. 167: desaparecidos os vestígios, a prova testemunhal pode suprir a falta do exame.',
      'Art. 159: perícia por perito oficial com diploma superior; na falta, por duas pessoas idôneas com diploma superior, preferencialmente na área.',
      'Art. 186, parágrafo único: o silêncio não importa confissão e não pode ser interpretado em prejuízo da defesa.',
      'Art. 200: confissão é divisível e retratável.',
      'Art. 206: ascendente, descendente, cônjuge e irmão podem recusar-se a depor, salvo se não houver outro modo de obter a prova; art. 208: não prestam compromisso os menores de 14 anos e esses parentes.',
      'Art. 207: proibidos de depor os que devem guardar segredo profissional, salvo se desobrigados e quiserem dar seu testemunho.',
      'Art. 212: perguntas formuladas diretamente pelas partes (cross-examination); STJ (HC 598.886): inobservância do art. 226 invalida o reconhecimento.'
    ],
    macetes: [
      'Confissão = "DR": Divisível e Retratável.',
      'Sem compromisso = "menor de 14 + CADI" (parentes do art. 206).'
    ],
    dicas: [
      'Reconhecimento por foto ou "show-up" sem as formalidades do art. 226 não sustenta condenação (STJ).',
      'Advogado não é obrigado a depor sobre segredo profissional.'
    ],
    pegadinhas: [
      '"Confissão indivisível e irretratável": errado.',
      '"Sem vestígios, a falta do exame impõe absolvição": errado, testemunhas suprem.',
      '"Formalidades do art. 226 são meras recomendações": errado desde o HC 598.886 (STJ).'
    ]
  },

  'Direito Processual Penal|3.6 Busca e apreensão': {
    resumo: 'A busca pode ser domiciliar ou pessoal (CPP, art. 240). A domiciliar depende de mandado judicial (reserva de jurisdição) e só pode ser cumprida durante o dia, salvo consentimento do morador ou flagrante delito (CF, art. 5º, XI). A busca pessoal independe de mandado no caso de prisão, de fundada suspeita de posse de arma proibida ou de objetos que constituam corpo de delito, ou quando determinada no curso de busca domiciliar (art. 244). Para o STJ, a busca em veículo equipara-se à pessoal, salvo quando o veículo serve de moradia, como a boleia de caminhão.',
    pontos: [
      'Art. 244: busca pessoal sem mandado em caso de prisão, fundada suspeita de arma proibida ou objetos/papéis que constituam corpo de delito, ou no curso de busca domiciliar.',
      'Art. 249: busca em mulher será feita por outra mulher, se não importar retardamento ou prejuízo da diligência.',
      'Busca domiciliar: só por mandado judicial; delegado não expede mandado.',
      'Art. 245 e CF: cumprimento durante o dia; à noite apenas com consentimento do morador (ou flagrante, desastre, socorro).',
      'Art. 245: os executores mostram e leem o mandado ao morador e o intimam a abrir a porta; desobedecida a ordem, arromba-se.',
      'Art. 243: o mandado deve indicar, o mais precisamente possível, a casa e o nome do proprietário ou morador; mandado genérico é inválido.',
      'Art. 243, § 2º: não se apreende documento em poder do defensor, salvo se constituir elemento do corpo de delito.',
      'Conceito de casa (CP, art. 150, § 4º) abrange compartimento não aberto ao público onde alguém exerce profissão.'
    ],
    macetes: [
      'Domicílio: "DIA com mandado; NOITE só com convite (consentimento) ou flagrante".',
      'Busca pessoal sem mandado = "PRESO, ARMA, CORPO de delito, DENTRO de busca domiciliar".'
    ],
    dicas: [
      'Abordagem em rodovia: busca no carro segue a lógica da busca pessoal (fundada suspeita), salvo cabine usada como moradia.',
      'Se esperar uma policial feminina atrasar ou prejudicar a diligência, o policial homem pode fazer a busca.'
    ],
    pegadinhas: [
      '"Busca domiciliar à noite com mandado, sem consentimento": errado.',
      '"Delegado pode expedir mandado de busca em urgência": errado.',
      '"Mandado genérico é válido": errado.'
    ]
  },

  'Direito Processual Penal|4.1 Prisão: conceito, formalidades, espécies e mandado': {
    resumo: 'Prisão é a privação da liberdade de locomoção. Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada da autoridade judiciária competente, em decorrência de prisão cautelar (temporária ou preventiva) ou de condenação criminal transitada em julgado (CF, art. 5º, LXI; CPP, art. 283). Após o Pacote Anticrime, a preventiva não pode ser decretada de ofício pelo juiz em nenhuma fase (art. 311). A temporária (Lei 7.960/1989) só cabe na investigação. O uso de algemas é excepcional e deve ser justificado por escrito (Súmula Vinculante 11).',
    pontos: [
      'CPP, art. 283: flagrante ou ordem escrita e fundamentada do juiz (cautelar ou condenação definitiva).',
      'Preventiva: só o juiz decreta, a requerimento do MP, querelante, assistente ou por representação da autoridade policial; vedada de ofício (art. 311).',
      'Art. 289-A: qualquer agente policial pode cumprir mandado registrado no banco do CNJ, ainda que fora da competência territorial do juiz.',
      'Art. 287: infração inafiançável — a falta de exibição do mandado não obsta a prisão; o preso é imediatamente apresentado ao juiz que o expediu, para audiência de custódia.',
      'Art. 284: não se emprega força, salvo a indispensável em caso de resistência ou tentativa de fuga.',
      'Súmula Vinculante 11: algemas só em caso de resistência, fundado receio de fuga ou perigo à integridade, com justificativa escrita.',
      'Temporária: só no inquérito; prazo de 5 dias prorrogável por mais 5; em crimes hediondos e equiparados, 30 + 30.',
      'CF, art. 5º, LXIV: o preso tem direito à identificação dos responsáveis por sua prisão ou interrogatório.'
    ],
    macetes: [
      'Temporária: "5 + 5 comum; 30 + 30 hediondo"; só no IP.',
      'Preventiva: "juiz nunca de ofício" (pós-Anticrime).'
    ],
    dicas: [
      'Abordagem com mandado de prisão registrado no BNMP: o PRF pode e deve cumprir.',
      'Algemar sem justificativa escrita gera responsabilização e pode gerar nulidade.'
    ],
    pegadinhas: [
      '"Autoridade policial decreta preventiva em urgência": errado.',
      '"Juiz pode decretar preventiva de ofício na ação penal": errado.',
      '"Temporária comum de 10 dias": errado, 5 + 5.'
    ]
  },

  'Direito Processual Penal|4.2 Prisão em flagrante': {
    resumo: 'Flagrante é a certeza visual do crime. Qualquer do povo poderá (flagrante facultativo) e as autoridades policiais e seus agentes deverão (flagrante obrigatório) prender quem esteja em flagrante delito (CPP, art. 301). O art. 302 prevê o flagrante próprio (cometendo ou acabando de cometer), o impróprio (perseguido logo após) e o presumido (encontrado logo depois com instrumentos ou objetos que façam presumir a autoria). Nos crimes permanentes, como transporte de drogas, o flagrante perdura enquanto não cessar a permanência (art. 303). A comunicação ao juiz deve ocorrer em até 24 horas, com audiência de custódia no mesmo prazo (art. 310).',
    pontos: [
      'Art. 301: flagrante facultativo para qualquer do povo; obrigatório para autoridades policiais e seus agentes.',
      'Art. 302, I e II: flagrante próprio; III: impróprio (perseguição logo após); IV: presumido/ficto (encontrado logo depois com instrumentos, armas, objetos ou papéis).',
      'Art. 303: nas infrações permanentes, o agente está em flagrante enquanto não cessar a permanência (ex.: transporte de drogas, arma).',
      'Súmula 145 do STF: flagrante preparado é inválido (crime impossível); o esperado é válido.',
      'Art. 306, § 1º: em até 24 horas, o auto de prisão em flagrante é encaminhado ao juiz e, se não houver advogado, à Defensoria.',
      'Art. 310: audiência de custódia em até 24 horas após a prisão; o juiz relaxa a prisão ilegal, converte em preventiva ou concede liberdade provisória.',
      'Art. 304, § 2º: a falta de testemunhas da infração não impede o auto; assinam ao menos duas que testemunharam a apresentação do preso.',
      'CTB, art. 301: ao condutor que presta pronto e integral socorro à vítima não se impõe prisão em flagrante nem se exige fiança.'
    ],
    macetes: [
      'Próprio = "pego no ato"; Impróprio = "pego correndo"; Presumido = "pego com as coisas".',
      'Audiência de custódia = "RCL em 24 h": Relaxa (ilegal), Converte (preventiva) ou Liberdade provisória.'
    ],
    dicas: [
      'Cocaína escondida no caminhão: crime permanente, flagrante a qualquer tempo (art. 303).',
      'Para o PRF, prender em flagrante é dever, não faculdade.'
    ],
    pegadinhas: [
      '"Flagrante presumido = surpreendido cometendo a infração": errado, esse é o próprio.',
      '"Auto enviado ao juiz em até 48 horas": errado, 24 horas.',
      '"Sem testemunhas da infração, não se lavra o auto": errado.'
    ]
  },

  'Direito Processual Penal|5 Identificação criminal (CF art. 5º, LVIII, e Lei 12.037/2009, art. 3º)': {
    resumo: 'A Constituição garante que o civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei (art. 5º, LVIII). A Lei 12.037/2009 lista os documentos que atestam a identificação civil (inclusive a carteira funcional) e, no art. 3º, as hipóteses excepcionais em que, mesmo apresentado documento, cabe a identificação criminal: documento com rasura ou indício de falsificação, insuficiente, documentos conflitantes, identificação essencial às investigações por decisão judicial, registros com nomes diferentes, ou estado de conservação ou distância que impeçam identificar. A identificação inclui o processo datiloscópico e o fotográfico.',
    pontos: [
      'CF, art. 5º, LVIII: regra de não submissão, com exceções legais.',
      'Lei 12.037/2009, art. 2º: atestam identificação civil a carteira de identidade, de trabalho, profissional, passaporte, carteira de identificação funcional e outros documentos públicos com foto.',
      'Art. 3º, I a VI: rasura/indício de falsificação; documento insuficiente; documentos com informações conflitantes; essencial às investigações por despacho da autoridade JUDICIÁRIA; nomes ou qualificações diferentes em registros policiais; estado de conservação, distância temporal ou localidade da expedição que impeçam a identificação.',
      'Art. 3º, parágrafo único: cópias dos documentos apresentados são juntadas aos autos, ainda que consideradas insuficientes.',
      'Art. 5º: identificação criminal inclui processos datiloscópico e fotográfico, juntados aos autos do flagrante, inquérito ou outra forma de investigação.',
      'Art. 5º, parágrafo único: coleta de material biológico para perfil genético apenas na hipótese do inciso IV (essencial às investigações, com decisão judicial).',
      'Art. 6º: vedado mencionar a identificação criminal em atestados de antecedentes antes do trânsito em julgado.'
    ],
    macetes: [
      'Hipóteses do art. 3º = "RICO-NE": Rasura, Insuficiente, Conflitante, Ordenada pelo juiz, Nomes diferentes, Estado do documento.',
      'DNA = só com JUIZ (inciso IV).'
    ],
    dicas: [
      'Abordado com dois RGs de dados divergentes: cabe identificação criminal (art. 3º, III).',
      'Essencial às investigações depende de despacho do juiz, não do delegado.'
    ],
    pegadinhas: [
      '"Civilmente identificado jamais pode ser identificado criminalmente": errado.',
      '"Carteira funcional não serve como identificação civil": errado.',
      '"Perfil genético em qualquer hipótese do art. 3º": errado, só no inciso IV.'
    ]
  },

  'Direito Processual Penal|6 Diligências investigatórias (arts. 6º e 13 do CPP)': {
    resumo: 'O art. 6º do CPP lista as providências que a autoridade policial deve adotar logo que souber da infração: dirigir-se ao local e preservá-lo, apreender objetos após liberação pelos peritos, colher provas, ouvir ofendido e indiciado, proceder a reconhecimentos e acareações, determinar exame de corpo de delito, identificar o indiciado, averiguar sua vida pregressa e colher informações sobre filhos. O art. 7º permite a reprodução simulada dos fatos, e o art. 13 atribui à autoridade policial fornecer informações ao juiz, realizar diligências requisitadas pelo juiz ou pelo MP, cumprir mandados de prisão e representar pela preventiva. Os arts. 13-A e 13-B tratam de requisição de dados em crimes como tráfico de pessoas.',
    pontos: [
      'Art. 6º, I: dirigir-se ao local e preservar o estado das coisas até a chegada dos peritos.',
      'Art. 6º, II: apreender os objetos relacionados ao fato APÓS liberados pelos peritos.',
      'Art. 6º, V: ouvir o indiciado, com termo assinado por duas testemunhas que lhe tenham ouvido a leitura.',
      'Art. 6º, X: colher informações sobre filhos, idades, deficiência e responsável por seus cuidados.',
      'Art. 7º: reprodução simulada, desde que não contrarie a moralidade ou a ordem pública; o investigado não é obrigado a participar (nemo tenetur se detegere).',
      'Art. 13: fornecer informações ao juiz, realizar diligências requisitadas pelo juiz ou MP, cumprir mandados de prisão e representar pela prisão preventiva.',
      'Requisição do juiz ou do MP deve ser cumprida; requerimento do ofendido ou indiciado (art. 14) é deferido a juízo da autoridade.',
      'Art. 13-B, § 4º: sem manifestação judicial em 12 horas sobre sinais de localização (tráfico de pessoas), a autoridade requisita diretamente às empresas, com imediata comunicação ao juiz.'
    ],
    macetes: [
      'REQUISIÇÃO = ordem (cumpre); REQUERIMENTO = pedido (avalia).',
      'Art. 6º: "Local, Objetos (depois dos peritos), Provas, Ouvir, Reconhecer, Corpo de delito, Identificar, Vida pregressa, Filhos".'
    ],
    dicas: [
      'A banca inverte a ordem "apreender antes da liberação dos peritos": errado.',
      'Ninguém é obrigado a produzir prova contra si: sem condução coercitiva para a reconstituição.'
    ],
    pegadinhas: [
      '"A autoridade pode deixar de cumprir requisição do juiz ou MP": errado.',
      '"O requerimento do ofendido vincula a autoridade": errado.',
      '"O termo de oitiva do indiciado dispensa testemunhas": errado (art. 6º, V).'
    ]
  }
});

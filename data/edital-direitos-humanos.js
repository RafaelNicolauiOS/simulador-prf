/* Direitos Humanos — 10 itens inéditos por subtópico do Edital PRF nº 1/2021 (5 C + 5 E cada). */
(function () {
  var D = 'Direitos Humanos', n = 0;
  function q(topico, tema, gabarito, enunciado, comentario) {
    n++;
    return { id: 'DHE-' + String(n).padStart(3, '0'), disciplina: D, tema: tema, topico: topico,
             gabarito: gabarito, enunciado: enunciado, comentario: comentario };
  }
  var CT = 'DH na Constituição e tratados', UD = 'Declaração Universal (DUDH)', CA = 'Convenção Americana (CADH)';
  var T1 = '1 Direitos humanos na Constituição Federal',
      T11 = '1.1 Constituição Federal e tratados internacionais de DH',
      T2 = '2 Declaração Universal dos Direitos Humanos',
      T3 = '3 Convenção Americana sobre Direitos Humanos (Decreto 678/1992)';
  window.QUESTOES = (window.QUESTOES || []).concat([
    // ---------- 1 ----------
    q(T1, CT, 'C', 'A dignidade da pessoa humana é um dos fundamentos da República Federativa do Brasil.',
      'Correto. Art. 1º, III, da CF; ao lado da soberania, da cidadania, dos valores sociais do trabalho e da livre iniciativa e do pluralismo político.'),
    q(T1, CT, 'C', 'Constitui objetivo fundamental da República promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.',
      'Correto. Literalidade do art. 3º, IV, da CF.'),
    q(T1, CT, 'C', 'A lei punirá qualquer discriminação atentatória dos direitos e liberdades fundamentais.',
      'Correto. Art. 5º, XLI, da CF.'),
    q(T1, CT, 'C', 'A concessão de asilo político é um dos princípios que regem a República Federativa do Brasil em suas relações internacionais.',
      'Correto. Art. 4º, X, da CF.'),
    q(T1, CT, 'C', 'A CF assegura aos presos o respeito à integridade física e moral.',
      'Correto. Art. 5º, XLIX, da CF.'),
    q(T1, CT, 'E', 'O repúdio ao terrorismo e ao racismo figura entre os fundamentos da República Federativa do Brasil.',
      'Errado. O repúdio ao terrorismo e ao racismo é princípio das relações internacionais (art. 4º, VIII), e não fundamento da República (art. 1º).'),
    q(T1, CT, 'E', 'Em suas relações internacionais, o Brasil rege-se pelo princípio da intervenção nos Estados em que ocorram graves violações de direitos humanos.',
      'Errado. O art. 4º, IV, consagra o princípio da não intervenção, ao lado da prevalência dos direitos humanos (inciso II).'),
    q(T1, CT, 'E', 'A CF assegura às presidiárias condições para que possam permanecer com seus filhos até que estes completem três anos de idade.',
      'Errado. O art. 5º, L, assegura às presidiárias condições para permanecerem com seus filhos durante o período de amamentação.'),
    q(T1, CT, 'E', 'Segundo a CF, a pena será cumprida em estabelecimentos distintos exclusivamente de acordo com o sexo do apenado.',
      'Errado. O art. 5º, XLVIII, determina a separação de acordo com a natureza do delito, a idade e o sexo do apenado.'),
    q(T1, CT, 'E', 'A cidadania e o pluralismo político são objetivos fundamentais da República Federativa do Brasil.',
      'Errado. Cidadania e pluralismo político são fundamentos da República (art. 1º, II e V); os objetivos fundamentais estão no art. 3º.'),

    // ---------- 1.1 ----------
    q(T11, CT, 'C', 'Em razão do status supralegal atribuído pelo STF ao Pacto de São José da Costa Rica, é ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.',
      'Correto. É o teor da Súmula Vinculante 25, resultante do entendimento firmado no RE 466.343.'),
    q(T11, CT, 'C', 'Além da Convenção sobre os Direitos das Pessoas com Deficiência e de seu Protocolo Facultativo, o Tratado de Marraqueche e a Convenção Interamericana contra o Racismo, a Discriminação Racial e Formas Correlatas de Intolerância foram aprovados pelo rito do art. 5º, § 3º, da CF.',
      'Correto. Esses tratados foram aprovados em dois turnos, por três quintos dos votos em cada Casa, e equivalem a emendas constitucionais (Decretos 9.522/2018 e 10.932/2022).'),
    q(T11, CT, 'C', 'É da competência exclusiva do Congresso Nacional resolver definitivamente sobre tratados, acordos ou atos internacionais que acarretem encargos ou compromissos gravosos ao patrimônio nacional.',
      'Correto. Art. 49, I, da CF; a celebração cabe privativamente ao presidente da República, sujeita a referendo do Congresso (art. 84, VIII).'),
    q(T11, CT, 'C', 'O § 3º do art. 5º da CF, que permite atribuir equivalência de emenda constitucional a tratados de direitos humanos, foi incluído pela EC 45/2004.',
      'Correto. A EC 45/2004 (Reforma do Judiciário) incluiu o § 3º e também o § 4º, relativo ao Tribunal Penal Internacional.'),
    q(T11, CT, 'C', 'O controle de convencionalidade consiste na verificação da compatibilidade das normas internas com os tratados internacionais de direitos humanos ratificados pelo Estado.',
      'Correto. No Brasil, esse controle toma como parâmetro tanto os tratados com status constitucional (art. 5º, § 3º) quanto os de status supralegal.'),
    q(T11, CT, 'E', 'Os tratados de direitos humanos aprovados pelo rito especial do art. 5º, § 3º, da CF equivalem a leis complementares.',
      'Errado. Eles são equivalentes às emendas constitucionais (art. 5º, § 3º).'),
    q(T11, CT, 'E', 'Antes da EC 45/2004, o STF já reconhecia status constitucional a todos os tratados internacionais de direitos humanos ratificados pelo Brasil.',
      'Errado. Antes da mudança jurisprudencial de 2008 (RE 466.343), o STF equiparava esses tratados às leis ordinárias; hoje, os não aprovados pelo rito especial têm status supralegal.'),
    q(T11, CT, 'E', 'Para que um tratado de direitos humanos seja equivalente a emenda constitucional, basta sua aprovação, em cada Casa do Congresso Nacional, em dois turnos, por maioria absoluta dos votos.',
      'Errado. O art. 5º, § 3º, exige aprovação em cada Casa, em dois turnos, por três quintos dos votos dos respectivos membros.'),
    q(T11, CT, 'E', 'Com o reconhecimento da supralegalidade do Pacto de São José da Costa Rica, tornou-se vedada no Brasil também a prisão civil do devedor de alimentos.',
      'Errado. A prisão civil por dívida alimentar continua admitida, tanto pela CF (art. 5º, LXVII) quanto pela própria CADH (art. 7.7); o que se tornou ilícito foi a prisão do depositário infiel.'),
    q(T11, CT, 'E', 'Os tratados internacionais de direitos humanos dispensam o referendo do Congresso Nacional, bastando, para sua incorporação, a ratificação pelo presidente da República.',
      'Errado. Todo tratado celebrado pelo presidente está sujeito a referendo do Congresso Nacional (arts. 49, I, e 84, VIII, da CF).'),

    // ---------- 2 ----------
    q(T2, UD, 'C', 'Segundo a DUDH, toda pessoa tem o direito de deixar qualquer país, inclusive o próprio, e a este regressar.',
      'Correto. Art. 13, item 2, da DUDH; o item 1 assegura a liberdade de locomoção e residência dentro das fronteiras de cada Estado.'),
    q(T2, UD, 'C', 'A DUDH estabelece que ninguém será arbitrariamente privado de sua nacionalidade, nem do direito de mudar de nacionalidade.',
      'Correto. Art. 15, item 2, da DUDH; o item 1 assegura a toda pessoa o direito a uma nacionalidade.'),
    q(T2, UD, 'C', 'De acordo com a DUDH, a vontade do povo será a base da autoridade do governo e será expressa em eleições periódicas e legítimas, por sufrágio universal, por voto secreto ou processo equivalente que assegure a liberdade de voto.',
      'Correto. Art. 21, item 3, da DUDH.'),
    q(T2, UD, 'C', 'A DUDH dispõe que os pais têm prioridade de direito na escolha do gênero de instrução que será ministrada a seus filhos.',
      'Correto. Art. 26, item 3, da DUDH.'),
    q(T2, UD, 'C', 'Pela DUDH, ninguém poderá ser culpado por ação ou omissão que, no momento, não constituía delito perante o direito nacional ou internacional, nem será imposta pena mais forte do que aquela que era aplicável no momento da prática do delito.',
      'Correto. Art. 11, item 2, da DUDH, que consagra a legalidade e a anterioridade penal.'),
    q(T2, UD, 'E', 'A DUDH proíbe a escravidão em todas as suas formas, mas admite a servidão nos casos previstos em lei.',
      'Errado. Pelo art. 4º da DUDH, ninguém será mantido em escravidão ou servidão; a escravidão e o tráfico de escravos são proibidos em todas as suas formas.'),
    q(T2, UD, 'E', 'A DUDH admite que a lei obrigue a pessoa a fazer parte de associação, quando necessário ao interesse público.',
      'Errado. O art. 20, item 2, da DUDH estabelece que ninguém pode ser obrigado a fazer parte de uma associação.'),
    q(T2, UD, 'E', 'Segundo a DUDH, o casamento pode ser validamente celebrado sem o consentimento de um dos nubentes, desde que autorizado por sua família.',
      'Errado. O art. 16, item 2, da DUDH dispõe que o casamento não será válido senão com o livre e pleno consentimento dos nubentes.'),
    q(T2, UD, 'E', 'A DUDH assegura a liberdade de crença, mas não abrange a liberdade de mudar de religião.',
      'Errado. O art. 18 da DUDH inclui expressamente a liberdade de mudar de religião ou crença e de manifestá-la, isolada ou coletivamente, em público ou em particular.'),
    q(T2, UD, 'E', 'A DUDH admite proteção social diferenciada conforme as crianças tenham nascido dentro ou fora do matrimônio.',
      'Errado. Pelo art. 25, item 2, da DUDH, todas as crianças, nascidas dentro ou fora do matrimônio, gozarão da mesma proteção social.'),

    // ---------- 3 ----------
    q(T3, CA, 'C', 'Segundo a CADH, não se deve impor a pena de morte a pessoa que, no momento da perpetração do delito, for menor de dezoito anos ou maior de setenta, nem aplicá-la a mulher em estado de gravidez.',
      'Correto. Art. 4.5 da CADH.'),
    q(T3, CA, 'C', 'Conforme a CADH, as penas privativas da liberdade devem ter por finalidade essencial a reforma e a readaptação social dos condenados.',
      'Correto. Art. 5.6 da CADH.'),
    q(T3, CA, 'C', 'A CADH admite que a lei submeta os espetáculos públicos a censura prévia, com o objetivo exclusivo de regular o acesso a eles para proteção moral da infância e da adolescência.',
      'Correto. Art. 13.4 da CADH, que constitui exceção à regra da vedação de censura prévia (art. 13.2).'),
    q(T3, CA, 'C', 'A CADH assegura a toda pessoa o direito de ser indenizada, conforme a lei, no caso de haver sido condenada em sentença passada em julgado, por erro judiciário.',
      'Correto. Art. 10 da CADH.'),
    q(T3, CA, 'C', 'Pela CADH, em nenhum caso o estrangeiro pode ser expulso ou entregue a outro país, seja ou não de origem, onde seu direito à vida ou à liberdade pessoal esteja em risco de violação por causa da sua raça, nacionalidade, religião, condição social ou de suas opiniões políticas.',
      'Correto. Art. 22.8 da CADH (princípio da não devolução).'),
    q(T3, CA, 'E', 'A CADH admite a aplicação da pena de morte, nos países que não a aboliram, aos delitos políticos e aos crimes comuns conexos com delitos políticos.',
      'Errado. O art. 4.4 da CADH veda, em todos os casos, a aplicação da pena de morte por delitos políticos ou por delitos comuns conexos com delitos políticos.'),
    q(T3, CA, 'E', 'Segundo a CADH, a confissão do acusado obtida mediante coação é válida se corroborada por outras provas produzidas no processo.',
      'Errado. Pelo art. 8.3 da CADH, a confissão só é válida se feita sem coação de nenhuma natureza.'),
    q(T3, CA, 'E', 'A CADH permite que o Estado expulse de seu território os próprios nacionais condenados por crimes graves.',
      'Errado. O art. 22.5 da CADH dispõe que ninguém pode ser expulso do território do Estado do qual for nacional, nem ser privado do direito de nele entrar.'),
    q(T3, CA, 'E', 'A CADH veda qualquer restrição legal ao exercício do direito de associação pelos membros das forças armadas e da polícia.',
      'Errado. O art. 16.3 da CADH admite a imposição de restrições legais, e até mesmo a privação do exercício do direito de associação, aos membros das forças armadas e da polícia.'),
    q(T3, CA, 'E', 'Conforme a CADH, o direito à vida deve ser protegido pela lei, em geral, a partir do nascimento com vida.',
      'Errado. O art. 4.1 da CADH determina que esse direito deve ser protegido pela lei e, em geral, desde o momento da concepção.')
  ]);
})();

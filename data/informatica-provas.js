/*
 * Itens de Informática ADAPTADOS de provas recentes da CEBRASPE.
 *
 * Cada item cobra o mesmo assunto/pegadinha de um item oficial, mas com
 * redação própria (não é cópia literal da prova). Os campos extras são:
 *   fonte -> prova em que o assunto foi cobrado (vira filtro "Origem")
 *   ref   -> número do item na prova original, para consulta
 *
 * Provas usadas:
 *   PRF 2021        Policial Rodoviário Federal (itens 33–39)
 *   PC-PE 2024      Agente/Escrivão (múltipla escolha – só assuntos)
 *   PF 2025         Agente/Escrivão/Papiloscopista, Bloco II (itens 61–96)
 *   FUB 2025        Auditor, nível superior (itens 31–38)
 *   SEPLAG-AL 2026  Analista Previdenciário (itens 26–30)
 */
window.QUESTOES = (window.QUESTOES || []).concat([
  // ======================= PRF 2021 =======================
  {
    id: 'PRV-001', disciplina: 'Informática', tema: 'Navegadores e E-mail', fonte: 'PRF 2021', ref: 'item 33', gabarito: 'C',
    enunciado: 'O Google Chrome e o Mozilla Firefox podem armazenar senhas e sincronizá-las entre dispositivos vinculados à mesma conta do usuário, recurso que funciona para sítios da Internet em geral, e não apenas para páginas de intranet.',
    comentario: 'Correto. O gerenciador de senhas dos navegadores funciona em qualquer sítio, público ou de intranet, com ou sem HTTPS (embora o navegador alerte em páginas inseguras). O item da PRF 2021 restringia o recurso a sítios de intranet com HTTPS, o que não procede.'
  },
  {
    id: 'PRV-002', disciplina: 'Informática', tema: 'Sistemas Operacionais', fonte: 'PRF 2021', ref: 'item 34', gabarito: 'C',
    enunciado: 'No Windows 10, o recurso de sincronização de configurações vinculado à conta Microsoft permite sincronizar entre computadores itens como tema, preferências de idioma e senhas.',
    comentario: 'Correto. Em "Sincronizar suas configurações", o Windows 10 oferecia tema, senhas, preferências de idioma e de acessibilidade, entre outros itens. O item da PRF 2021 afirmava que as senhas não podiam ser sincronizadas.'
  },
  {
    id: 'PRV-003', disciplina: 'Informática', tema: 'Navegadores e E-mail', fonte: 'PRF 2021', ref: 'item 35', gabarito: 'C',
    enunciado: 'Na pesquisa do Google, colocar o caractere @ antes do nome de uma rede social (por exemplo, @instagram) direciona a busca para conteúdos publicados nessa rede social.',
    comentario: 'Correto. Segundo a ajuda do Google, o @ antes de uma palavra pesquisa em redes sociais. Outros operadores cobrados: aspas para a frase exata, hífen para excluir um termo, site: para limitar a busca a um domínio e filetype: para filtrar por tipo de arquivo.'
  },
  {
    id: 'PRV-004', disciplina: 'Informática', tema: 'Navegadores e E-mail', fonte: 'PRF 2021', ref: 'item 35 (variação)', gabarito: 'E',
    enunciado: 'Na pesquisa do Google, o sinal de menos (-) colocado imediatamente antes de uma palavra obriga que ela apareça em todos os resultados exibidos.',
    comentario: 'Errado. O hífen/menos EXCLUI dos resultados as páginas que contêm o termo (ex.: multa -estacionamento).'
  },
  {
    id: 'PRV-005', disciplina: 'Informática', tema: 'Navegadores e E-mail', fonte: 'PRF 2021', ref: 'item 35 (variação)', gabarito: 'C',
    enunciado: 'A pesquisa site:gov.br "relatório anual" no Google retorna páginas do domínio gov.br que contenham exatamente a expressão relatório anual.',
    comentario: 'Correto. O operador site: restringe a busca ao domínio indicado, e as aspas exigem a expressão exata.'
  },
  {
    id: 'PRV-006', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PRF 2021', ref: 'item 36', gabarito: 'C',
    enunciado: 'Sensores e câmeras conectados à Internet das coisas (IoT) instalados em rodovias ampliam o volume, a velocidade e a variedade dos dados gerados, o que os relaciona diretamente ao conceito de big data.',
    comentario: 'Correto. A IoT multiplica as fontes e os formatos de dados gerados continuamente, o que afeta os Vs do big data: volume, velocidade e variedade.'
  },
  {
    id: 'PRV-007', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PRF 2021', ref: 'item 37', gabarito: 'E',
    enunciado: 'O ransomware caracteriza-se por se propagar mediante a inserção de cópias de si mesmo em outros arquivos, inclusive nos arquivos que ele próprio criptografou.',
    comentario: 'Errado. Inserir cópias de si em outros arquivos é o comportamento típico do vírus. O ransomware se caracteriza por tornar os dados inacessíveis, em geral por criptografia, e exigir resgate.'
  },
  {
    id: 'PRV-008', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PRF 2021', ref: 'item 38', gabarito: 'E',
    enunciado: 'Caracteriza-se o modelo SaaS quando o provedor oferece aos desenvolvedores um ambiente em nuvem para criar, testar e implantar suas próprias aplicações.',
    comentario: 'Errado. Um ambiente para construir e implantar aplicações é o PaaS (plataforma como serviço). No SaaS, o usuário apenas utiliza um software pronto, como webmail ou editores on-line.'
  },
  {
    id: 'PRV-009', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PRF 2021', ref: 'item 39', gabarito: 'C',
    enunciado: 'Um firewall de próxima geração (NGFW) pode reunir, em um único equipamento, recursos como inspeção profunda de pacotes, sistema de prevenção de intrusão (IPS), controle por aplicação e antivírus.',
    comentario: 'Correto. O NGFW vai além da filtragem por endereço e porta e incorpora funções de IDS/IPS, antimalware e identificação de aplicações.'
  },

  // ======================= PC-PE 2024 (assuntos) =======================
  {
    id: 'PRV-010', disciplina: 'Informática', tema: 'Editores e Planilhas', fonte: 'PC-PE 2024', ref: 'assunto: apresentações', gabarito: 'C',
    enunciado: 'No Microsoft PowerPoint, a tecla F5 inicia a apresentação a partir do primeiro slide, e a combinação Shift + F5 inicia a apresentação a partir do slide atual.',
    comentario: 'Correto. Esses são os atalhos padrão do PowerPoint. No LibreOffice Impress, F5 também inicia a apresentação do primeiro slide.'
  },
  {
    id: 'PRV-011', disciplina: 'Informática', tema: 'Sistemas Operacionais', fonte: 'PC-PE 2024', ref: 'assunto: Windows Explorer', gabarito: 'C',
    enunciado: 'No Explorador de Arquivos do Windows 10, a combinação de teclas Ctrl + Shift + N cria uma nova pasta no local que está sendo exibido.',
    comentario: 'Correto. Outros atalhos úteis: F2 renomeia, Alt + Enter abre as Propriedades e Ctrl + E (ou Ctrl + F) leva à caixa de pesquisa.'
  },
  {
    id: 'PRV-012', disciplina: 'Informática', tema: 'Editores e Planilhas', fonte: 'PC-PE 2024', ref: 'assunto: planilhas', gabarito: 'C',
    enunciado: 'No Excel, a função CONT.SE retorna a quantidade de células de um intervalo que atendem a um critério, como em =CONT.SE(B2:B50;">100").',
    comentario: 'Correto. CONT.SE conta células por critério. Não confundir com SOMASE, que soma os valores que atendem ao critério, nem com CONT.VALORES, que conta as células não vazias.'
  },
  {
    id: 'PRV-013', disciplina: 'Informática', tema: 'Editores e Planilhas', fonte: 'PC-PE 2024', ref: 'assunto: edição de textos', gabarito: 'C',
    enunciado: 'No Word, a inserção de quebras de seção permite que partes diferentes do mesmo documento tenham orientações de página distintas, como retrato e paisagem.',
    comentario: 'Correto. A seção é a unidade de formatação de página no Word: orientação, margens, colunas, cabeçalhos e rodapés podem variar entre seções.'
  },
  {
    id: 'PRV-014', disciplina: 'Informática', tema: 'Editores e Planilhas', fonte: 'PC-PE 2024', ref: 'assunto: planilhas', gabarito: 'E',
    enunciado: 'No Excel, o recurso Rastrear Dependentes exibe setas que indicam quais células fornecem valores para a fórmula da célula selecionada.',
    comentario: 'Errado. As células que alimentam a fórmula são as PRECEDENTES (Rastrear Precedentes). Rastrear Dependentes mostra as células cujas fórmulas usam o valor da célula selecionada.'
  },
  {
    id: 'PRV-015', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PC-PE 2024', ref: 'assunto: segurança', gabarito: 'C',
    enunciado: 'Spear phishing é uma modalidade de phishing direcionada a uma pessoa ou organização específica, com mensagens personalizadas para aumentar a credibilidade do golpe.',
    comentario: 'Correto. Também se cobram o whaling (alvo: altos executivos), o smishing (via SMS) e o vishing (via voz/telefone).'
  },

  // ======================= PF 2025 =======================
  {
    id: 'PRV-016', disciplina: 'Informática', tema: 'Sistemas Operacionais', fonte: 'PF 2025', ref: 'item 61', gabarito: 'C',
    enunciado: 'No Windows, o comando ipconfig exibe informações das interfaces de rede, como endereço IP e máscara de sub-rede; em distribuições Linux, essa função é desempenhada por comandos como ip addr e ifconfig.',
    comentario: 'Correto. O item da PF 2025 inverteu os sistemas (ipconfig no Linux e ifconfig no Windows) e por isso foi considerado errado. O ipconfig é do Windows; ifconfig e ip são do Linux.'
  },
  {
    id: 'PRV-017', disciplina: 'Informática', tema: 'Redes e Internet', fonte: 'PF 2025', ref: 'item 62', gabarito: 'C',
    enunciado: 'Ferramentas como a Conexão de Área de Trabalho Remota do Windows (RDP) e o TeamViewer permitem controlar um computador a distância e também transferir arquivos entre as máquinas.',
    comentario: 'Correto. Ambas são ferramentas de acesso remoto com recursos de transferência de arquivos (no RDP, por meio da área de transferência ou do redirecionamento de unidades).'
  },
  {
    id: 'PRV-018', disciplina: 'Informática', tema: 'Redes e Internet', fonte: 'PF 2025', ref: 'item 63', gabarito: 'E',
    enunciado: 'Por ser uma rede interna, a intranet não utiliza navegadores nem o protocolo HTTP, e sim protocolos proprietários desenvolvidos por cada organização.',
    comentario: 'Errado. A intranet usa as mesmas tecnologias da Internet (TCP/IP, HTTP/HTTPS, navegadores, e-mail). O que muda é o acesso, que fica restrito à organização.'
  },
  {
    id: 'PRV-019', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PF 2025', ref: 'item 64', gabarito: 'C',
    enunciado: 'O firewall controla o tráfego que entra e sai de uma rede de acordo com regras definidas, ao passo que o antivírus analisa arquivos e processos em busca de códigos maliciosos.',
    comentario: 'Correto. A banca costuma trocar as funções dessas duas ferramentas, que são complementares: uma controla o tráfego de rede e a outra detecta malware.'
  },
  {
    id: 'PRV-020', disciplina: 'Informática', tema: 'Redes e Internet', fonte: 'PF 2025', ref: 'item 65', gabarito: 'C',
    enunciado: 'O endereço IPv6 tem 128 bits e é representado por oito grupos de dígitos hexadecimais separados por dois-pontos, sendo permitido abreviar uma sequência de grupos zerados com "::" uma única vez no endereço.',
    comentario: 'Correto. O item da PF 2025 afirmou que o IPv6 tem 256 bits, o que está errado. O IPv4 tem 32 bits.'
  },
  {
    id: 'PRV-021', disciplina: 'Informática', tema: 'Sistemas de Informação', fonte: 'PF 2025', ref: 'item 66', gabarito: 'E',
    enunciado: 'Em uma aplicação web, o frontend é responsável pelas regras de negócio e pelo acesso ao banco de dados, enquanto o backend se limita à apresentação visual para o usuário.',
    comentario: 'Errado. Os papéis estão invertidos. O frontend é a interface com o usuário; o backend processa os dados, aplica as regras de negócio e acessa o banco de dados.'
  },
  {
    id: 'PRV-022', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 67', gabarito: 'C',
    enunciado: 'O amplo acesso pela rede é uma característica da computação em nuvem: os recursos são disponibilizados sob demanda e acessados pela Internet ou por outra rede.',
    comentario: 'Correto. O item da PF 2025 afirmou que a nuvem dispensa conexão com a Internet porque os dados ficariam armazenados localmente, o que está errado. As características essenciais (NIST) são autoatendimento sob demanda, amplo acesso pela rede, pool de recursos, elasticidade rápida e serviço medido.'
  },
  {
    id: 'PRV-023', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 67 (variação)', gabarito: 'C',
    enunciado: 'A elasticidade da computação em nuvem permite aumentar ou reduzir os recursos contratados conforme a demanda, e a cobrança costuma ser proporcional ao uso.',
    comentario: 'Correto. Elasticidade e serviço medido (pay-per-use) estão entre as vantagens mais cobradas da nuvem.'
  },
  {
    id: 'PRV-024', disciplina: 'Informática', tema: 'Sistemas de Informação', fonte: 'PF 2025', ref: 'item 68', gabarito: 'C',
    enunciado: 'No ciclo de desenvolvimento de sistemas, o ambiente de homologação é aquele em que os usuários validam o sistema antes de sua implantação no ambiente de produção.',
    comentario: 'Correto. A sequência usual é: desenvolvimento → testes → homologação → produção. A especificação de requisitos não pode ser substituída por esses ambientes, que foi a pegadinha do item da PF 2025.'
  },
  {
    id: 'PRV-025', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 69', gabarito: 'E',
    enunciado: 'A mineração de dados emprega exclusivamente algoritmos de aprendizado supervisionado, e o big data tem como premissa o uso de bancos de dados relacionais tradicionais, suficientes para tratar volume, variedade e velocidade.',
    comentario: 'Errado, por dois motivos. A mineração também usa técnicas não supervisionadas, como agrupamento e regras de associação. E o big data costuma exigir tecnologias distribuídas e NoSQL (Hadoop, Spark), porque o modelo relacional tradicional não basta.'
  },
  {
    id: 'PRV-026', disciplina: 'Informática', tema: 'Bancos de Dados', fonte: 'PF 2025', ref: 'item 70', gabarito: 'C',
    enunciado: 'Dados estruturados seguem um esquema predefinido, como as linhas e colunas de uma tabela relacional, enquanto vídeos, imagens e o corpo de mensagens de e-mail são exemplos de dados não estruturados.',
    comentario: 'Correto. O item da PF 2025 inverteu os conceitos. Existem ainda os dados semiestruturados, como JSON e XML.'
  },
  {
    id: 'PRV-027', disciplina: 'Informática', tema: 'Sistemas de Informação', fonte: 'PF 2025', ref: 'item 71', gabarito: 'C',
    enunciado: 'Dados são fatos brutos; informação é o resultado da organização e da contextualização desses dados; e a segurança da informação busca preservar sua confidencialidade, integridade e disponibilidade.',
    comentario: 'Correto. Essa é a hierarquia dado → informação → conhecimento, somada à tríade CID da segurança da informação.'
  },
  {
    id: 'PRV-028', disciplina: 'Informática', tema: 'Bancos de Dados', fonte: 'PF 2025', ref: 'item 72', gabarito: 'C',
    enunciado: 'Uma tabela está na primeira forma normal (1FN) quando todos os seus atributos contêm apenas valores atômicos, sem atributos multivalorados ou grupos repetitivos.',
    comentario: 'Correto. A 2FN exige, além disso, ausência de dependência parcial da chave; a 3FN exige ausência de dependência transitiva.'
  },
  {
    id: 'PRV-029', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 73', gabarito: 'C',
    enunciado: 'Em Python, a palavra-chave lambda cria funções anônimas de uma única expressão, que podem ser passadas como argumento para funções como map, filter e sorted.',
    comentario: 'Correto. Exemplo: sorted(lista, key=lambda x: x[1]). Funções que recebem outras funções como argumento são chamadas de funções de ordem superior.'
  },
  {
    id: 'PRV-030', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 74', gabarito: 'E',
    enunciado: 'Em Python, listas podem ser utilizadas como chaves de dicionários, por serem estruturas de dados mutáveis.',
    comentario: 'Errado. A chave de um dicionário precisa ser hashable, ou seja, imutável, como str, int ou tuple. Listas são mutáveis e, por isso, NÃO podem ser chaves.'
  },
  {
    id: 'PRV-031', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PF 2025', ref: 'item 75', gabarito: 'C',
    enunciado: 'Nos testes de acurácia biométrica do NIST, o FPIR mede a proporção de buscas de pessoas não cadastradas que retornam, indevidamente, uma correspondência; um limiar de decisão mal ajustado pode elevar esse indicador.',
    comentario: 'Correto. FPIR é a taxa de falsos positivos de identificação; FNIR é a taxa de falsos negativos, quando um usuário cadastrado não é encontrado. Baixar o limiar aumenta o FPIR, e elevá-lo aumenta o FNIR.'
  },
  {
    id: 'PRV-032', disciplina: 'Informática', tema: 'Redes e Internet', fonte: 'PF 2025', ref: 'item 76', gabarito: 'C',
    enunciado: 'No modo de transmissão half-duplex, os dados trafegam nos dois sentidos, mas não simultaneamente, como ocorre nos rádios comunicadores do tipo walkie-talkie.',
    comentario: 'Correto. Simplex: um único sentido. Half-duplex: dois sentidos, alternadamente. Full-duplex: dois sentidos ao mesmo tempo, sem exigir um "clock lógico de rede" comum (essa exigência foi a pegadinha do item da PF 2025).'
  },
  {
    id: 'PRV-033', disciplina: 'Informática', tema: 'Redes e Internet', fonte: 'PF 2025', ref: 'item 77', gabarito: 'E',
    enunciado: 'No modelo OSI, a camada de sessão é a principal responsável pelo endereçamento lógico e pelo roteamento de pacotes entre redes distintas.',
    comentario: 'Errado. Endereçamento lógico (IP), roteamento e fragmentação de pacotes cabem à camada de REDE (3). A camada de sessão (5) gerencia o diálogo e a sincronização entre aplicações.'
  },
  {
    id: 'PRV-034', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PF 2025', ref: 'item 78', gabarito: 'E',
    enunciado: 'Em sistemas biométricos de alta segurança, controlar a rejeição de usuários legítimos (FNIR) é mais importante do que controlar a aceitação de impostores (FPIR).',
    comentario: 'Errado. Em alta segurança, o risco maior é aceitar um impostor, isto é, um falso positivo. Prioriza-se reduzir o FPIR, mesmo que alguns usuários legítimos precisem tentar de novo.'
  },
  {
    id: 'PRV-035', disciplina: 'Informática', tema: 'Sistemas Operacionais', fonte: 'PF 2025', ref: 'item 79', gabarito: 'C',
    enunciado: 'No Linux, o comando chmod 640 laudo.pdf concede ao proprietário permissões de leitura e escrita, ao grupo somente leitura, e nenhuma permissão aos demais usuários.',
    comentario: 'Correto. 6 = rw- (4+2), 4 = r-- e 0 = ---. O item da PF 2025 cobrou chmod 755 (rwxr-xr-x).'
  },
  {
    id: 'PRV-036', disciplina: 'Informática', tema: 'Redes e Internet', fonte: 'PF 2025', ref: 'item 80', gabarito: 'C',
    enunciado: 'O DNS utiliza predominantemente o protocolo UDP, na porta 53, para as consultas de resolução de nomes, mas pode recorrer ao TCP, por exemplo, em transferências de zona entre servidores.',
    comentario: 'Correto. O TCP também é usado quando a resposta excede o tamanho suportado em UDP.'
  },
  {
    id: 'PRV-037', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 81', gabarito: 'E',
    enunciado: 'Uma empresa que deseje controlar o sistema operacional das máquinas virtuais que contrata, sem adquirir servidores próprios, deve optar pelo modelo SaaS.',
    comentario: 'Errado. Quem quer gerenciar o sistema operacional deve contratar IaaS. No PaaS, o provedor gerencia o SO e a plataforma; no SaaS, gerencia tudo.'
  },
  {
    id: 'PRV-038', disciplina: 'Informática', tema: 'Redes e Internet', fonte: 'PF 2025', ref: 'item 83', gabarito: 'E',
    enunciado: 'O DNS garante, desde a sua concepção, a confidencialidade das consultas por meio de criptografia ponta a ponta nativa do protocolo.',
    comentario: 'Errado. O DNS tradicional trafega sem criptografia. Para proteger a privacidade das consultas surgiram extensões como DNS over HTTPS (DoH) e DNS over TLS (DoT). O DNSSEC garante autenticidade e integridade, mas não confidencialidade.'
  },
  {
    id: 'PRV-039', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 84', gabarito: 'C',
    enunciado: 'No modelo IaaS, o provedor fornece recursos virtualizados, como servidores, armazenamento e rede, cabendo ao cliente administrar o sistema operacional e as aplicações.',
    comentario: 'Correto. Este item tem o mesmo sentido do item 84 da PF 2025, que teve gabarito Certo.'
  },
  {
    id: 'PRV-040', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PF 2025', ref: 'item 85', gabarito: 'C',
    enunciado: 'No TOTP, usado por aplicativos autenticadores, os códigos são gerados a partir do horário e expiram após um curto intervalo, enquanto no HOTP os códigos se baseiam em um contador de eventos.',
    comentario: 'Correto. O item da PF 2025 afirmou que os códigos HOTP não expiram, e o gabarito foi Errado: o código HOTP é de uso único e perde a validade após ser usado. O TOTP renova o código a cada ~30 s.'
  },
  {
    id: 'PRV-041', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PF 2025', ref: 'item 86', gabarito: 'E',
    enunciado: 'A detecção por assinatura é a técnica de antivírus mais indicada para identificar ameaças inéditas (zero-day), cujo código ainda não foi catalogado pelos fabricantes.',
    comentario: 'Errado. A assinatura só reconhece ameaças já conhecidas e catalogadas. Para ameaças novas usam-se a detecção heurística e a comportamental, que analisam características e ações suspeitas.'
  },
  {
    id: 'PRV-042', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PF 2025', ref: 'item 87', gabarito: 'C',
    enunciado: 'A técnica de sandboxing executa programas suspeitos em um ambiente isolado, de modo que suas eventuais ações maliciosas não afetem o sistema principal.',
    comentario: 'Correto. O item da PF 2025 afirmou que o sandbox usa um ambiente compartilhado e altera o sistema principal, o que é o oposto da técnica.'
  },
  {
    id: 'PRV-043', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'PF 2025', ref: 'item 88', gabarito: 'C',
    enunciado: 'Tokens de hardware, como chaves de segurança conectadas via USB ou dispositivos que exibem códigos, podem ser usados como fator de posse na autenticação multifator (MFA).',
    comentario: 'Correto. Os fatores são: conhecimento (senha), posse (token, celular) e inerência (biometria).'
  },
  {
    id: 'PRV-044', disciplina: 'Informática', tema: 'Bancos de Dados', fonte: 'PF 2025', ref: 'item 89', gabarito: 'C',
    enunciado: 'Pela propriedade de consistência (ACID), uma transação deve levar o banco de dados de um estado consistente a outro estado também consistente.',
    comentario: 'Correto. O item da PF 2025 falou em partir de um estado inconsistente, o que está errado. ACID significa Atomicidade, Consistência, Isolamento e Durabilidade.'
  },
  {
    id: 'PRV-045', disciplina: 'Informática', tema: 'Bancos de Dados', fonte: 'PF 2025', ref: 'item 90', gabarito: 'C',
    enunciado: 'Pela propriedade de atomicidade, se uma das operações de uma transação falhar, as operações já executadas por ela devem ser desfeitas, de forma que a transação ocorra por inteiro ou não ocorra.',
    comentario: 'Correto. É o princípio do "tudo ou nada": COMMIT confirma a transação e ROLLBACK a desfaz.'
  },
  {
    id: 'PRV-046', disciplina: 'Informática', tema: 'Bancos de Dados', fonte: 'PF 2025', ref: 'itens 91–92', gabarito: 'C',
    enunciado: 'O comando SQL SELECT * FROM veiculos WHERE uf = \'DF\'; retorna todas as colunas dos registros da tabela veiculos cujo valor da coluna uf seja DF.',
    comentario: 'Correto. O * seleciona todas as colunas, e o WHERE filtra as linhas. O SELECT apenas consulta dados. Para criar tabelas e restrições usa-se CREATE TABLE, e para incluir dados, INSERT.'
  },
  {
    id: 'PRV-047', disciplina: 'Informática', tema: 'Bancos de Dados', fonte: 'PF 2025', ref: 'itens 91–92 (variação)', gabarito: 'E',
    enunciado: 'Em SQL, o comando INSERT é utilizado para alterar valores de registros já existentes em uma tabela.',
    comentario: 'Errado. O INSERT inclui novos registros. Para alterar registros existentes usa-se UPDATE, e para removê-los, DELETE.'
  },
  {
    id: 'PRV-048', disciplina: 'Informática', tema: 'Bancos de Dados', fonte: 'PF 2025', ref: 'item 92 (variação)', gabarito: 'C',
    enunciado: 'Em uma tabela SQL, a restrição CHECK (valor > 0) impede que sejam gravados registros com valor igual a zero ou negativo nessa coluna.',
    comentario: 'Correto. O CHECK impõe uma condição que cada linha deve satisfazer. O item 92 da PF 2025 interpretou a regra "valor_venda > 0" ao contrário.'
  },
  {
    id: 'PRV-049', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 93', gabarito: 'E',
    enunciado: 'Prever o valor, em reais, de uma multa a partir das características da infração é um problema de classificação, e não de regressão.',
    comentario: 'Errado. Prever um valor numérico contínuo é um problema de REGRESSÃO. A classificação prevê categorias, por exemplo, se uma infração é grave ou leve.'
  },
  {
    id: 'PRV-050', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 94', gabarito: 'C',
    enunciado: 'O overfitting ocorre quando um modelo de aprendizado de máquina se ajusta excessivamente aos dados de treinamento, com bom desempenho neles e desempenho ruim em dados novos.',
    comentario: 'Correto. A PF 2025 afirmou que "não há overfitting" em aprendizado de máquina, e o gabarito foi Errado. O problema oposto é o underfitting.'
  },
  {
    id: 'PRV-051', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 95', gabarito: 'C',
    enunciado: 'Em uma API REST, cada requisição deve conter todas as informações necessárias para ser processada, pois o servidor não mantém o estado da sessão do cliente entre as requisições.',
    comentario: 'Correto. A ausência de estado (stateless) é uma restrição do estilo REST. O item da PF 2025 afirmou que a API deveria manter estado entre as requisições.'
  },
  {
    id: 'PRV-052', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'PF 2025', ref: 'item 96', gabarito: 'C',
    enunciado: 'No GraphQL, o cliente especifica na consulta exatamente os campos que deseja receber, o que pode reduzir o tráfego de dados desnecessários em comparação com endpoints REST fixos.',
    comentario: 'Correto. REST e GraphQL são abordagens diferentes de API: o REST trabalha com recursos e verbos HTTP, e o GraphQL tem um único endpoint com consultas tipadas.'
  },

  // ======================= FUB 2025 =======================
  {
    id: 'PRV-053', disciplina: 'Informática', tema: 'Sistemas Operacionais', fonte: 'FUB 2025', ref: 'item 31', gabarito: 'C',
    enunciado: 'O Windows de 64 bits executa normalmente a maioria dos programas de 32 bits, mas o Windows de 32 bits não executa programas compilados para 64 bits.',
    comentario: 'Correto. O subsistema WOW64 permite rodar programas de 32 bits no Windows de 64 bits; o contrário não é possível. Além disso, o Windows aplica verificações de segurança, como o SmartScreen e o UAC, a executáveis.'
  },
  {
    id: 'PRV-054', disciplina: 'Informática', tema: 'Sistemas Operacionais', fonte: 'FUB 2025', ref: 'item 32', gabarito: 'C',
    enunciado: 'No Windows, ao se mover um arquivo para uma pasta localizada em outra unidade (volume) NTFS, o arquivo passa, em regra, a herdar as permissões da pasta de destino.',
    comentario: 'Correto. Mover entre volumes equivale a copiar e excluir, então o arquivo herda as permissões do destino. Apenas ao mover dentro do MESMO volume NTFS as permissões originais são mantidas.'
  },
  {
    id: 'PRV-055', disciplina: 'Informática', tema: 'Editores e Planilhas', fonte: 'FUB 2025', ref: 'item 33', gabarito: 'C',
    enunciado: 'O Excel para a Web permite criar e editar tabelas dinâmicas, embora certos recursos avançados, como algumas conexões com fontes de dados externas, estejam disponíveis apenas na versão para desktop.',
    comentario: 'Correto. As versões web do Office 365 são mais limitadas que as de desktop.'
  },
  {
    id: 'PRV-056', disciplina: 'Informática', tema: 'Editores e Planilhas', fonte: 'FUB 2025', ref: 'item 34', gabarito: 'E',
    enunciado: 'No OneDrive, compartilhar um arquivo com permissão apenas de visualização impede, em qualquer circunstância, que o destinatário faça o download do arquivo.',
    comentario: 'Errado. Com a permissão "Pode exibir", o destinatário, em regra, ainda consegue baixar, copiar e imprimir o arquivo. O bloqueio de download é uma opção adicional que o proprietário precisa ativar.'
  },
  {
    id: 'PRV-057', disciplina: 'Informática', tema: 'Editores e Planilhas', fonte: 'FUB 2025', ref: 'item 35', gabarito: 'E',
    enunciado: 'No Microsoft Teams, marcar uma mensagem como importante faz com que ela seja fixada automaticamente no topo do canal até que um administrador a desafixe.',
    comentario: 'Errado. Marcar como importante só destaca visualmente a mensagem. Fixá-la é uma ação separada.'
  },
  {
    id: 'PRV-058', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'FUB 2025', ref: 'item 36', gabarito: 'E',
    enunciado: 'Um firewall que filtra pacotes apenas por endereços IP e portas é suficiente para proteger a rede corporativa contra ataques que trafegam embutidos em conexões permitidas, como as conexões HTTPS.',
    comentario: 'Errado. A filtragem de pacotes não inspeciona o conteúdo das conexões. A proteção exige camadas adicionais, como NGFW, IPS, antivírus/EDR e conscientização dos usuários (defesa em profundidade).'
  },
  {
    id: 'PRV-059', disciplina: 'Informática', tema: 'Segurança da Informação', fonte: 'FUB 2025', ref: 'item 37', gabarito: 'C',
    enunciado: 'Ferramentas antispyware baseadas em assinaturas dependem da atualização frequente de suas bases de dados para reconhecer novas ameaças.',
    comentario: 'Correto. É a mesma lógica dos antivírus: sem bases atualizadas, a ferramenta não reconhece novas assinaturas.'
  },
  {
    id: 'PRV-060', disciplina: 'Informática', tema: 'Redes e Internet', fonte: 'FUB 2025', ref: 'item 38', gabarito: 'C',
    enunciado: 'A segmentação de uma rede corporativa em VLANs pode limitar a propagação de um ataque originado em um dos segmentos, reduzindo o impacto de ameaças internas.',
    comentario: 'Correto. As VLANs isolam logicamente os segmentos de rede, o que dificulta o movimento lateral de um atacante.'
  },

  // ======================= SEPLAG-AL 2026 =======================
  {
    id: 'PRV-061', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', fonte: 'SEPLAG-AL 2026', ref: 'item 26', gabarito: 'E',
    enunciado: 'A regressão linear é uma técnica de aprendizado não supervisionado usada para agrupar registros semelhantes em clusters.',
    comentario: 'Errado. A regressão linear é SUPERVISIONADA e estima valores numéricos contínuos. Agrupar em clusters é tarefa não supervisionada, como o k-means.'
  },
  {
    id: 'PRV-062', disciplina: 'Informática', tema: 'Bancos de Dados', fonte: 'SEPLAG-AL 2026', ref: 'item 27', gabarito: 'C',
    enunciado: 'No esquema estrela (star schema), uma tabela fato central se relaciona com tabelas de dimensão, que costumam ser desnormalizadas para favorecer consultas analíticas.',
    comentario: 'Correto. Exigir dimensões normalizadas até a 3FN descreve o esquema floco de neve (snowflake), e não o estrela.'
  },
  {
    id: 'PRV-063', disciplina: 'Informática', tema: 'Bancos de Dados', fonte: 'SEPLAG-AL 2026', ref: 'item 28', gabarito: 'E',
    enunciado: 'A chave estrangeira referencia a chave primária de outra tabela e, por definição, nunca pode aceitar valores nulos.',
    comentario: 'Errado. A chave estrangeira garante a integridade referencial, mas pode aceitar NULL, a menos que a coluna seja declarada NOT NULL (relacionamento opcional). Quem nunca aceita nulo é a chave primária.'
  },
  {
    id: 'PRV-064', disciplina: 'Informática', tema: 'Redes e Internet', fonte: 'SEPLAG-AL 2026', ref: 'item 30', gabarito: 'C',
    enunciado: 'No HTTPS, o protocolo HTTP continua sendo utilizado, mas suas mensagens trafegam encapsuladas em uma conexão protegida por TLS.',
    comentario: 'Correto. O item da SEPLAG-AL 2026 tratou o HTTP como substituído pelo SSL/TLS, o que não procede: HTTPS é o HTTP transportado sobre TLS.'
  }
]);

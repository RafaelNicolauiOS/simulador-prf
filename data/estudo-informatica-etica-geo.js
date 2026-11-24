/* Material de estudo — Informática, Ética e Cidadania, Geopolítica. */
window.ESTUDO = window.ESTUDO || {};
Object.assign(window.ESTUDO, {

  /* ===================== INFORMÁTICA — TEMAS (itens antigos) ===================== */

  'Informática|tema:Redes e Internet': {
    resumo: 'Redes de computadores são estudadas por camadas (modelo OSI com 7 camadas e pilha TCP/IP com 4 ou 5). Cada protocolo tem uma função e, em regra, uma porta padrão: HTTP (80), HTTPS (443), DNS (53), SSH (22), RDP (3389). A Internet, a intranet e a extranet usam a mesma tecnologia (TCP/IP, HTTP, navegadores); o que muda é quem pode acessar. Também caem endereçamento IPv4/IPv6, equipamentos (hub, switch, roteador), topologias e modos de transmissão.',
    pontos: [
      'Intranet: rede privada com os mesmos protocolos da Internet (TCP/IP, HTTP, navegador); extranet: parte da intranet aberta a usuários externos autorizados (fornecedores, parceiros).',
      'IPv4 tem 32 bits (4 octetos decimais, ex.: 192.168.0.1); IPv6 tem 128 bits (8 grupos hexadecimais separados por dois-pontos, com abreviação de zeros por ::, uma única vez).',
      'DNS traduz nomes em endereços IP (usa principalmente UDP na porta 53, e TCP em certos casos); quem atribui IP automaticamente é o DHCP.',
      'TCP: orientado à conexão, confiável e ordenado (web, e-mail, arquivos). UDP: sem conexão, sem garantia de entrega, mais rápido (vídeo ao vivo, VoIP, DNS).',
      'HTTPS = HTTP encapsulado em TLS, porta 443, com uso de certificado digital do servidor.',
      'Hub (camada física) repete o sinal para todas as portas; switch (camada de enlace) encaminha quadros pelo endereço MAC; roteador (camada de rede) interliga redes pelo endereço IP.',
      'Topologia estrela: todos ligados a um nó central — se o nó central falha, a rede para. Simplex (um sentido), half-duplex (dois sentidos, alternados, ex.: walkie-talkie), full-duplex (simultâneo, ex.: telefone).',
      'VPN cria túnel criptografado sobre rede pública; VLAN segmenta logicamente a rede e limita a propagação de ataques.'
    ],
    macetes: [
      'Portas: "80 é o HTTP sem cadeado; 443 é o HTTP com cadeado; 53 é o DNS; 22 é o SSH; 3389 é a área de trabalho remota".',
      'DNS = "lista telefônica" (nome → IP); DHCP = "recepcionista" que entrega o crachá (IP) a quem chega.',
      'OSI de baixo para cima: "Fiz Eu Rede Também, Sessão, Apresentação e Aplicação" (Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação). Roteamento = camada de Rede.',
      'IPv4 = 32 bits (4 × 8); IPv6 = 128 bits (8 × 16) — o 6 tem "mais" bits.'
    ],
    dicas: [
      'A banca troca as funções de protocolos parecidos (DNS × DHCP, TCP × UDP) — leia o verbo do item: "traduz nome" é DNS, "atribui IP" é DHCP.',
      'Itens que dizem que intranet "não usa navegador/HTTP" ou "precisa ser fisicamente isolada" estão errados.',
      'Fique atento a portas trocadas (HTTPS na 80, DNS na 80) e a bits trocados entre IPv4 e IPv6.'
    ],
    pegadinhas: [
      'Afirmar que UDP é confiável/orientado à conexão — é o TCP.',
      'Dizer que o switch replica tudo para todas as portas como o hub — isso é o hub; o switch aprende os MACs.',
      'Atribuir à camada de sessão o roteamento — roteamento é da camada de rede (3).',
      'Dizer que o DNS tem criptografia nativa ponta a ponta — o DNS tradicional trafega em claro; DoH/DoT são extensões posteriores.'
    ]
  },

  'Informática|tema:Navegadores e E-mail': {
    resumo: 'Este tema cobra o uso dos navegadores (atalhos, navegação privativa, cookies, senhas salvas, cadeado), dos protocolos de correio eletrônico (SMTP, POP3, IMAP) e dos campos da mensagem (Para, Cc, Cco). Também aparecem os operadores de pesquisa do Google. A banca gosta de exagerar o alcance de recursos, como a navegação anônima ou o cadeado do HTTPS.',
    pontos: [
      'SMTP envia mensagens (cliente → servidor e entre servidores); POP3 baixa as mensagens e, por padrão, as remove do servidor; IMAP mantém as mensagens no servidor e sincroniza vários dispositivos.',
      'Cco (cópia oculta): os destinatários em Cco não são vistos pelos demais; Cc (cópia) é visível a todos.',
      'Navegação privativa/anônima apenas não grava histórico, cookies e dados de formulário localmente ao fechar; provedor, empregador e sites continuam vendo o acesso.',
      'Cookies são pequenos arquivos de texto gravados a pedido dos sites, com preferências e dados de sessão.',
      'Atalhos de janela privativa: Chrome Ctrl+Shift+N; Edge Ctrl+Shift+N (InPrivate); Firefox Ctrl+Shift+P.',
      'O cadeado indica conexão cifrada (HTTPS) com certificado válido para aquele domínio — não garante que o site seja honesto.',
      'Google: "aspas" = frase exata; - (menos) exclui termo; site: restringe ao domínio; filetype: restringe ao tipo de arquivo; @ busca em redes sociais; OR amplia.'
    ],
    macetes: [
      'SMTP = "Sua Mensagem Tá Partindo" (envio); POP = "Puxa e apaga"; IMAP = "Imagem no servidor" (fica lá).',
      'Cco = "Com cópia oculta": ninguém vê quem está em Cco.',
      'Firefox é o "P" de Privado (Ctrl+Shift+P); Chrome/Edge são o "N" de Nova janela anônima (Ctrl+Shift+N).'
    ],
    dicas: [
      'Itens sobre navegação anônima costumam ser errados quando dizem que ela esconde a navegação do provedor ou da rede.',
      'Na busca do Google, o sinal de menos EXCLUI; site:gov.br limita aos domínios gov.br e as aspas exigem a expressão exata.',
      'Verifique se o atalho atribuído corresponde ao navegador citado no item (Firefox × Chrome).'
    ],
    pegadinhas: [
      'Inverter SMTP e POP3 (dizer que SMTP recebe e POP3 envia).',
      'Dizer que o IMAP apaga as mensagens do servidor por padrão — esse é o comportamento típico do POP3.',
      'Afirmar que o cadeado atesta que o site é legítimo e livre de golpes — sites de phishing também usam HTTPS.'
    ]
  },

  'Informática|tema:Segurança da Informação': {
    resumo: 'Segurança da informação protege a confidencialidade (só quem pode acessa), a integridade (sem alteração indevida) e a disponibilidade (acessível quando necessário), além da autenticidade e do não repúdio. O tema reúne malwares (vírus, worm, ransomware, spyware, botnet), golpes (phishing, spear phishing), mecanismos de defesa (firewall, antivírus, sandbox, MFA), criptografia, assinatura digital e backup. A CEBRASPE explora definições trocadas e afirmações absolutas ("suficiente", "qualquer").',
    pontos: [
      'Vírus precisa de hospedeiro e de execução; worm se propaga sozinho pela rede explorando vulnerabilidades; ransomware sequestra dados (criptografia) e pede resgate.',
      'Keylogger captura teclas; screenlogger captura a tela/posição do clique (contorna teclados virtuais); ambos são spyware.',
      'Botnet: rede de máquinas infectadas (zumbis) controladas remotamente, usada, por exemplo, em DDoS.',
      'Criptografia assimétrica: cifra com a chave pública do destinatário → só a privada dele decifra (confidencialidade). Assinatura digital: usa a chave privada do signatário → garante autenticidade, integridade e não repúdio, NÃO confidencialidade.',
      'Backup completo copia tudo; incremental copia o alterado desde o último backup (de qualquer tipo) e marca os arquivos; diferencial copia o alterado desde o último completo e não desmarca o atributo de arquivamento.',
      'MFA combina fatores de categorias distintas: algo que sabe (senha), algo que possui (token, celular), algo que é (biometria). TOTP: código baseado no tempo; HOTP: baseado em contador.',
      'Firewall filtra tráfego por regras; antivírus analisa arquivos/processos. Detecção por assinatura não pega ameaças inéditas (zero-day) — para isso, heurística/comportamento e sandbox.',
      'Biometria: FPIR mede impostores aceitos indevidamente; em alta segurança, controlar falsos positivos (FPIR) é prioritário.'
    ],
    macetes: [
      'CID: Confidencialidade (quem vê), Integridade (não muda), Disponibilidade (está lá quando preciso).',
      '"Worm anda sozinho; vírus pega carona."',
      'Assinatura = privada do REMETENTE; sigilo = pública do DESTINATÁRIO.',
      'Backup: "Incremental zera a bandeira; Diferencial deixa a bandeira" (atributo de arquivamento).'
    ],
    dicas: [
      'Desconfie de "suficiente", "dispensa", "qualquer" e "exclusivamente": nenhum controle isolado protege contra tudo.',
      'Questões de princípios trocam conceitos: "só autorizados acessam" é confidencialidade, não disponibilidade.',
      'Spear phishing = phishing direcionado e personalizado; whaling = mirando altos executivos.'
    ],
    pegadinhas: [
      'Atribuir ao vírus a propagação automática sem hospedeiro (é o worm).',
      'Dizer que assinatura digital garante confidencialidade.',
      'Dizer que o diferencial, como o incremental, desmarca o atributo de arquivamento.',
      'Afirmar que ransomware se caracteriza por se replicar em outros arquivos — sua marca é o sequestro de dados.'
    ]
  },

  'Informática|tema:Sistemas Operacionais': {
    resumo: 'Cobra o uso do Windows (atalhos, Lixeira, Explorador de Arquivos, permissões NTFS, 32 × 64 bits) e noções de Linux (comandos básicos, permissões chmod, sensibilidade a maiúsculas, licença GPL). O edital PRF 2021 pede Windows, mas itens de Linux aparecem em provas da banca. É tema de memorização com pegadinhas de atalho.',
    pontos: [
      'Atalhos Windows: Win+E (Explorador), Win+D (mostrar área de trabalho), Win+L (bloquear), Ctrl+Shift+Esc (Gerenciador de Tarefas), Ctrl+Shift+N (nova pasta no Explorador), F2 (renomear).',
      'Shift+Delete exclui permanentemente, sem passar pela Lixeira; arquivos de pendrive e de unidades de rede também não vão para a Lixeira.',
      'Windows 64 bits executa a maioria dos programas de 32 bits; o inverso não ocorre.',
      'NTFS: ao MOVER para outro volume, o arquivo herda as permissões da pasta de destino (é cópia + exclusão); mover no mesmo volume mantém as permissões.',
      'ipconfig (Windows) mostra a configuração de rede; no Linux, ip addr (ou o antigo ifconfig).',
      'Linux: ls lista, cd muda diretório, pwd mostra o diretório atual, cp copia, mv move/renomeia, rm remove, mkdir cria diretório; nomes de arquivos diferenciam maiúsculas de minúsculas.',
      'chmod em octal: r=4, w=2, x=1, na ordem dono/grupo/outros. 755 = rwx r-x r-x; 640 = rw- r-- ---.',
      'Linux é de código aberto e seu kernel é distribuído sob a licença GPL.'
    ],
    macetes: [
      'Win+D = "Desktop"; Win+L = "Lock"; Win+E = "Explorer".',
      'chmod: "4 lê, 2 escreve, 1 executa" — some por posição: Dono, Grupo, Outros.',
      'Ctrl+N no Explorador = Nova JANELA; Ctrl+Shift+N = Nova PASTA.'
    ],
    dicas: [
      'A banca troca o efeito de atalhos próximos (Win+D × Win+L; Ctrl+N × Ctrl+Shift+N).',
      'Em chmod, converta cada dígito separadamente e confira a ordem dono/grupo/outros.',
      'Itens sobre Linux "não diferenciar maiúsculas" são errados.'
    ],
    pegadinhas: [
      'Dizer que Shift+Delete manda para a Lixeira.',
      'Dizer que ls muda de diretório (é o cd).',
      'Afirmar que Windows 32 bits roda programas de 64 bits.'
    ]
  },

  'Informática|tema:Editores e Planilhas': {
    resumo: 'Envolve Word, Excel, PowerPoint e equivalentes do LibreOffice, além de ferramentas de colaboração (OneDrive, Teams, Excel para a Web). O núcleo é: atalhos de formatação, referências relativas e absolutas, funções (SOMA, SE, CONT.SE, SOMASE, PROCV) e recursos como quebra de seção e auditoria de fórmulas. A banca troca funções parecidas e altera detalhes de sintaxe.',
    pontos: [
      'Intervalo com dois-pontos (A1:A4) inclui todas as células de A1 a A4; ponto e vírgula (A1;A4) indica células isoladas.',
      'Referência absoluta ($A$1) não muda ao copiar; relativa (B1) se ajusta: =$A$1*B1 copiada para a linha de baixo vira =$A$1*B2.',
      'SE(teste;verdadeiro;falso): com A1>7, o valor 7 cai no "falso". CONT.SE conta células que atendem ao critério; SOMASE soma.',
      'PROCV procura o valor na PRIMEIRA coluna do intervalo e retorna o conteúdo de uma coluna indicada à direita, na mesma linha.',
      'Concatenação: operador & (Excel e Calc), ou funções CONCAT/CONCATENAR.',
      'Word em português: Ctrl+N negrito, Ctrl+I itálico, Ctrl+S sublinhado. Quebra de seção permite orientações e cabeçalhos diferentes no mesmo documento.',
      'PowerPoint: F5 inicia do primeiro slide; Shift+F5 do slide atual.',
      'LibreOffice usa o formato ODF (.odt, .ods, .odp) por padrão; o .docx é do Word.'
    ],
    macetes: [
      'PROCV = Procura na primeira coluna, Vai para a direita.',
      'CONT.SE CONTA; SOMASE SOMA — o nome diz o que faz.',
      'Rastrear PRECEDENTES = de onde vem (quem alimenta a fórmula); DEPENDENTES = para onde vai (quem usa a célula).',
      'F5 = começo; Shift+F5 = "Shift fica onde está" (slide atual).'
    ],
    dicas: [
      'Ao copiar fórmulas, só o que não tem $ se desloca — calcule com calma o deslocamento de linhas e colunas.',
      'Atenção aos atalhos do Word em português, diferentes do inglês (Ctrl+B em inglês é negrito; em português, Ctrl+N).',
      'Em colaboração na nuvem, itens com "em qualquer circunstância" ou "automaticamente" costumam ser errados.'
    ],
    pegadinhas: [
      'Dizer que =SOMA(A1:A4) soma só A1 e A4.',
      'Inverter F5 e Shift+F5 no PowerPoint.',
      'Dizer que compartilhar só para visualização impede em qualquer caso o download no OneDrive — a opção de bloquear download é configuração específica e não vale para todos os cenários.'
    ]
  },

  'Informática|tema:Nuvem, Dados e IA': {
    resumo: 'Tema amplo que reúne computação em nuvem (IaaS, PaaS, SaaS e suas características), big data (os Vs), aprendizado de máquina (supervisionado, não supervisionado, regressão × classificação, overfitting), noções de Python e de APIs (REST, GraphQL). A banca cobra principalmente a divisão de responsabilidades nos modelos de nuvem e a correta classificação das técnicas de IA.',
    pontos: [
      'SaaS: o usuário só usa o software (Gmail, Microsoft 365). PaaS: o provedor dá ambiente para desenvolver e implantar aplicações. IaaS: o provedor dá servidores virtuais, rede e armazenamento; o cliente administra sistema operacional e aplicações.',
      'Características da nuvem: autoatendimento sob demanda, amplo acesso pela rede, pool de recursos, elasticidade (aumentar E reduzir) e serviço medido.',
      'Big data: volume, velocidade e variedade (modelos ampliados incluem veracidade e valor).',
      'Supervisionado usa dados rotulados: classificação (categorias) e regressão (valor numérico, ex.: valor de uma multa). Não supervisionado: clusterização/agrupamento, sem rótulos.',
      'Overfitting: o modelo decora o treino e generaliza mal para dados novos.',
      'Python: indentação delimita blocos; listas são mutáveis e tuplas imutáveis; // é divisão inteira (7 // 2 = 3); chaves de dicionário devem ser imutáveis (lista não pode); lambda tem uma única expressão.',
      'REST é sem estado (stateless): cada requisição traz tudo o que é necessário. GraphQL: o cliente escolhe os campos que quer receber.'
    ],
    macetes: [
      'IaaS = "eu ganho a máquina", PaaS = "eu ganho a plataforma", SaaS = "eu ganho o software pronto".',
      'Regressão = número; Classificação = categoria; Clusterização = agrupar sem rótulo.',
      'Lista [ ] muda; tupla ( ) não muda.'
    ],
    dicas: [
      'Quem quer controlar o sistema operacional sem comprar servidores contrata IaaS.',
      'Prever valor em reais é regressão; prever "multa sim/não" é classificação.',
      'Elasticidade é nos dois sentidos — itens que dizem que só cresce estão errados.'
    ],
    pegadinhas: [
      'Descrever PaaS (ambiente para desenvolvedores) e chamá-lo de SaaS.',
      'Dizer que clusterização é supervisionada.',
      'Afirmar que regressão linear é técnica não supervisionada de agrupamento.'
    ]
  },

  'Informática|tema:Bancos de Dados': {
    resumo: 'Cobra o modelo relacional (tabelas, chaves primária e estrangeira, restrições), normalização (1FN), propriedades ACID das transações, comandos SQL básicos e noções de data warehouse (esquema estrela). Também distingue dados estruturados, semiestruturados e não estruturados. São conceitos objetivos em que a banca troca definições.',
    pontos: [
      'Chave primária: identifica cada registro; valores únicos e não nulos.',
      'Chave estrangeira: referencia a chave primária de outra tabela; pode aceitar nulo, salvo restrição NOT NULL.',
      '1FN: atributos atômicos, sem multivalorados nem grupos repetitivos.',
      'ACID: Atomicidade (tudo ou nada), Consistência (de um estado válido a outro), Isolamento (transações não interferem), Durabilidade (confirmado não se perde).',
      'SQL: SELECT consulta, INSERT inclui, UPDATE altera, DELETE exclui registros; WHERE filtra; CHECK restringe valores aceitos.',
      'Esquema estrela: tabela fato central ligada a tabelas de dimensão, normalmente desnormalizadas, para consultas analíticas.',
      'Estruturados seguem esquema (tabelas); não estruturados: vídeo, imagem, texto livre de e-mail; semiestruturados: JSON, XML.'
    ],
    macetes: [
      'ACID: "Atômico é tudo ou nada; Durável é para sempre".',
      'INSERT põe linha nova; UPDATE atualiza o que já existe.',
      'Primária: "única e presente"; estrangeira: "aponta para fora".'
    ],
    dicas: [
      'Se o item descreve "desfazer tudo quando uma operação falha", a propriedade é atomicidade, não durabilidade.',
      'Confira se o comando SQL citado corresponde à operação (INSERT × UPDATE).'
    ],
    pegadinhas: [
      'Dizer que a chave primária admite repetição desde que não seja nula.',
      'Afirmar que a chave estrangeira, por definição, nunca aceita nulo.',
      'Trocar atomicidade por durabilidade.'
    ]
  },

  'Informática|tema:Sistemas de Informação': {
    resumo: 'Trata de conceitos básicos de sistemas: dado, informação e conhecimento; arquitetura de aplicações web (frontend e backend); e ambientes do ciclo de desenvolvimento (desenvolvimento, teste/homologação e produção). São itens conceituais em que a banca costuma inverter papéis.',
    pontos: [
      'Dado é o fato bruto; informação é o dado organizado e contextualizado; conhecimento é a informação interpretada e aplicada.',
      'Frontend: interface com o usuário (o que roda no navegador). Backend: regras de negócio, processamento e acesso ao banco de dados.',
      'Ambiente de desenvolvimento: onde se programa; homologação: onde usuários validam antes da implantação; produção: onde o sistema roda de fato.',
      'Segurança da informação busca preservar confidencialidade, integridade e disponibilidade da informação.',
      'Sistemas de informação combinam pessoas, processos, dados e tecnologia para apoiar decisões e operações.'
    ],
    macetes: [
      'Front = vitrine; Back = cozinha.',
      'Homologar = "o usuário dá o OK" antes de ir para produção.'
    ],
    dicas: [
      'Itens que põem regras de negócio e banco de dados no frontend estão invertidos.',
      'Dado sem contexto não é informação — atenção à ordem dado → informação → conhecimento.'
    ],
    pegadinhas: [
      'Inverter frontend e backend.',
      'Dizer que homologação é o ambiente em que o sistema já atende os usuários finais (isso é produção).'
    ]
  },

  /* ===================== INFORMÁTICA — TÓPICOS DO EDITAL ===================== */

  'Informática|1 Internet e intranet': {
    resumo: 'A Internet é a rede mundial formada pela interligação de muitas redes que conversam pela pilha TCP/IP; nasceu da ARPANET, projeto do Departamento de Defesa dos EUA no fim dos anos 1960. A intranet usa a mesma tecnologia, mas com acesso restrito à organização; a extranet abre parte dela a parceiros autorizados. A Web (WWW) é apenas um serviço que roda sobre a Internet.',
    pontos: [
      'Internet ≠ Web: a Web é o sistema de páginas ligadas por hiperlinks (HTTP/HTML); e-mail, FTP e VoIP também usam a Internet sem serem a Web.',
      'Intranet: rede privada com TCP/IP, HTTP/HTTPS e navegadores; pode hospedar portal, sistemas, e-mail e documentos internos.',
      'Intranet não precisa ser fisicamente isolada: pode ser acessada de fora por VPN ou outro meio autenticado.',
      'Extranet: extensão da intranet a usuários externos autorizados (fornecedores, parceiros, clientes).',
      'URL https://www.gov.br/prf: https = protocolo; www.gov.br = host/domínio (gov.br é o domínio); /prf = caminho.',
      'IPs privados (10.x.x.x, 172.16–31.x.x, 192.168.x.x) não são roteados na Internet; o acesso externo passa por NAT.',
      'Roteamento na Internet é descentralizado; a ICANN coordena nomes e números (DNS, distribuição de IPs), mas não roteia pacotes.'
    ],
    macetes: [
      'Intranet = "Internet de portas fechadas"; Extranet = "porta entreaberta para parceiros".',
      'Internet é a estrada; Web é um dos carros que trafegam nela.',
      'Privados: "10, 172.16 e 192.168 não saem de casa".'
    ],
    dicas: [
      'A banca adora dizer que intranet não usa navegador/HTTP ou que precisa estar isolada — ambos errados.',
      'Itens que tratam Internet e WWW como sinônimos estão errados.'
    ],
    pegadinhas: [
      'Afirmar que um IP privado como 192.168.0.10 é acessível diretamente de qualquer ponto da Internet.',
      'Dizer que a ICANN roteia centralizadamente todos os pacotes.',
      'Confundir extranet com a própria Internet pública.'
    ]
  },

  'Informática|2.1 Navegação, e-mail, busca, redes sociais e colaboração': {
    resumo: 'Este tópico cobra o uso prático de navegadores (atalhos e recursos), correio eletrônico (responder, encaminhar, Cco, webmail, listas), ferramentas de busca (operadores do Google), redes sociais e ferramentas colaborativas (Google Docs, Microsoft 365). A banca usa atalhos trocados e afirmações absolutas sobre privacidade.',
    pontos: [
      'Atalhos comuns a Chrome, Edge e Firefox: Ctrl+H histórico, Ctrl+J downloads, Ctrl+D adicionar aos favoritos, Ctrl+T nova aba, Ctrl+W fechar aba, Ctrl+Shift+T reabrir a última aba fechada.',
      'Responder a todos envia aos remetente e destinatários visíveis (Para e Cc), nunca aos que estavam em Cco.',
      'Encaminhar mantém os anexos; Responder, por padrão, não os inclui.',
      'Webmail é acessado pelo navegador, sem instalar cliente (Outlook e Thunderbird são clientes instalados).',
      'Lista de discussão: mensagem enviada ao endereço da lista é distribuída a todos os inscritos.',
      'Google: filetype:pdf retorna arquivos PDF; site: limita ao domínio; "aspas" frase exata; - exclui palavra.',
      'Ferramentas colaborativas permitem edição simultânea e histórico de versões.'
    ],
    macetes: [
      'Ctrl+D = "Destaque nos favoritos"; Ctrl+W = "Window close" (fecha aba).',
      'Ctrl+Shift+T = "Traz de volta" a aba fechada.',
      'Cco é invisível até para o "Responder a todos".'
    ],
    dicas: [
      'Fixe os atalhos de histórico (H) e downloads (J); a banca troca D por W.',
      'Sobre redes sociais, itens com "em nenhuma hipótese" a informação vaza são errados: quem vê pode copiar e repassar.'
    ],
    pegadinhas: [
      'Dizer que Ctrl+D fecha a aba.',
      'Dizer que o webmail exige cliente instalado.',
      'Afirmar que filetype:pdf busca páginas que contenham a palavra pdf.'
    ]
  },

  'Informática|2.2 Sistema operacional (Windows)': {
    resumo: 'O edital da PRF 2021 pede o Windows: atalhos de teclado, Explorador de Arquivos, Lixeira, área de transferência, atalhos (.lnk), regras de nomes de arquivos e a Segurança do Windows (antivírus nativo Microsoft Defender). A banca cobra o efeito exato de cada comando e situações-limite, como exclusão em pendrive.',
    pontos: [
      'Win+E Explorador de Arquivos; Win+D mostra/oculta a área de trabalho; Win+M minimiza janelas; Win+L bloqueia; Win+R Executar; Win+V histórico da área de transferência (se ativado); Win+I Configurações.',
      'Alt+F4 fecha a janela ativa; com a área de trabalho em foco, abre a caixa de desligamento.',
      'Ctrl+Shift+Esc abre diretamente o Gerenciador de Tarefas (Ctrl+Alt+Del abre a tela de opções de segurança).',
      'Arrastar na MESMA unidade move; para OUTRA unidade copia. Ctrl+arrastar força cópia; Shift+arrastar força mover; Alt+arrastar cria atalho.',
      'Itens excluídos de pendrive, de unidade de rede ou com Shift+Delete não vão para a Lixeira.',
      'Caracteres proibidos em nomes: \\ / : * ? " < > |.',
      'Atalho (.lnk) é só um apontador: apagar o original quebra o atalho.',
      'Ocultar extensões é só exibição; não impede a execução de .exe (e facilita golpes como "foto.jpg.exe").'
    ],
    macetes: [
      'Win+E = Explorer; Win+L = Lock; Win+D = Desktop; Win+V = "Vários Ctrl+V" (histórico).',
      'Arrastar: "mesma casa muda de cômodo (move); casa diferente leva cópia".',
      'Proibidos: "barra, dois-pontos, asterisco, interrogação, aspas, menor, maior e pipe".'
    ],
    dicas: [
      'Leia se o arrasto é na mesma unidade ou entre unidades — muda a resposta.',
      'O Windows 10/11 tem antivírus nativo (Microsoft Defender, no app Segurança do Windows).'
    ],
    pegadinhas: [
      'Dizer que Alt+F4 na área de trabalho minimiza todas as janelas.',
      'Afirmar que arquivos excluídos do pendrive podem ser restaurados da Lixeira.',
      'Dizer que o Windows aceita ? e * em nomes de arquivos.'
    ]
  },

  'Informática|2.3 Acesso a distância, transferência e multimídia': {
    resumo: 'Trata de acesso remoto (SSH, Telnet, RDP, ferramentas como TeamViewer), transferência de arquivos (FTP, upload/download, P2P, compactação) e multimídia (streaming, formatos com e sem perdas, videoconferência). O foco da banca é saber quais protocolos cifram os dados e o que cada formato faz.',
    pontos: [
      'SSH (porta 22) dá acesso remoto cifrado; Telnet (porta 23) transmite tudo em texto claro.',
      'RDP é o protocolo da Conexão de Área de Trabalho Remota do Windows, porta padrão 3389.',
      'FTP original (portas 20/21) envia usuário e senha em claro; versões seguras: SFTP (sobre SSH) e FTPS (sobre TLS).',
      'Upload: do usuário para o servidor; download: do servidor para o usuário.',
      'P2P (ex.: BitTorrent): os pares baixam e enviam pedaços do arquivo entre si, sem servidor central único de conteúdo.',
      'Streaming reproduz enquanto recebe; não exige baixar o arquivo inteiro antes.',
      'Compressão com perdas: JPEG, MP3, MP4 (H.264); sem perdas: PNG, FLAC, ZIP. MP3 é formato de áudio.',
      'ZIP compacta arquivos e pastas com subpastas; videoconferências funcionam pela Internet, sem exigir a mesma rede local.'
    ],
    macetes: [
      'SSH = "Shell Seguro"; Telnet = "Tela aberta" (sem cifra).',
      'Upload = "subo"; Download = "desço".',
      'MP3 = "Música Perde um pouco" (áudio com perdas).'
    ],
    dicas: [
      'Itens que dizem que FTP original criptografa credenciais estão errados.',
      'Associe porta e protocolo: 22 SSH, 23 Telnet, 21 FTP (controle), 3389 RDP.'
    ],
    pegadinhas: [
      'Dizer que MP3 é vídeo e sem perdas.',
      'Afirmar que no P2P se baixa de um único servidor central.',
      'Exigir que participantes de videoconferência estejam na mesma rede local.'
    ]
  },

  'Informática|3.1 Internet das coisas (IoT)': {
    resumo: 'Internet das coisas é a conexão de objetos físicos com sensores, atuadores e capacidade de comunicação à rede, para coletar e trocar dados. Tem aplicações domésticas, industriais (indústria 4.0, manutenção preditiva), urbanas e rodoviárias (câmeras de leitura de placas, sensores de fluxo). Traz desafios de segurança, privacidade e endereçamento.',
    pontos: [
      'Dispositivos IoT precisam de endereçamento na rede; o grande número de objetos é um dos motivos da adoção do IPv6.',
      'Comunicam-se por várias tecnologias: Wi-Fi, Bluetooth, Zigbee, redes celulares (4G/5G), LoRaWAN etc.',
      'Senhas de fábrica e falta de atualização tornam dispositivos alvos de botnets usadas em DDoS.',
      'Computação de borda (edge computing) processa dados perto do dispositivo, reduzindo latência e volume enviado à nuvem.',
      'Indústria 4.0: sensores nas máquinas permitem manutenção preditiva.',
      'IoT gera grande volume, velocidade e variedade de dados — liga-se diretamente ao big data.',
      'Há questões de privacidade: dados de objetos frequentemente revelam hábitos e localização de pessoas.'
    ],
    macetes: [
      'IoT = "coisas que falam com a rede".',
      'Edge = "processa na beira, perto do sensor".',
      'IoT pede IPv6: "muitas coisas, muitos endereços".'
    ],
    dicas: [
      'Desconfie de "exclusivamente", "restringe-se" e "dispensam" em itens de IoT.',
      'Aplicações rodoviárias (radares, leitura de placas, sensores) costumam aparecer como exemplos corretos de IoT.'
    ],
    pegadinhas: [
      'Dizer que IoT depende só de Wi-Fi.',
      'Dizer que o IPv4 basta para a expansão da IoT.',
      'Afirmar que IoT não levanta questões de privacidade.'
    ]
  },

  'Informática|3.2 Big data': {
    resumo: 'Big data designa conjuntos de dados grandes, rápidos e variados demais para ferramentas tradicionais. É descrito pelos Vs: volume, velocidade, variedade (e, em modelos ampliados, veracidade e valor). Para tratá-lo usam-se processamento distribuído (Hadoop, Spark), bancos NoSQL e repositórios como data lake e data warehouse.',
    pontos: [
      'Volume: quantidade; velocidade: ritmo de geração e processamento dos dados (não é a frequência do processador); variedade: estruturados, semiestruturados e não estruturados.',
      'Veracidade: qualidade e confiabilidade dos dados (ruídos, inconsistências); valor: utilidade para o negócio.',
      'Hadoop: framework aberto para armazenamento (HDFS) e processamento distribuído (MapReduce) em clusters.',
      'Spark: processamento distribuído em memória, em geral mais rápido que o MapReduce tradicional.',
      'Data lake guarda dados brutos no formato original (estrutura aplicada na leitura); data warehouse guarda dados tratados e integrados para análise (OLAP), sem substituir os sistemas transacionais (OLTP).',
      'NoSQL: esquemas flexíveis (documentos, chave-valor, colunar, grafos), adequados a escala horizontal.',
      'Não existe um limite fixo (como 1 TB) que defina big data.'
    ],
    macetes: [
      '"3 Vs básicos: Volume, Velocidade, Variedade; + Veracidade e Valor."',
      'Lake = "lago com tudo cru"; Warehouse = "armazém arrumado".',
      'Spark = "faísca na memória" (rápido).'
    ],
    dicas: [
      'Itens com "exclusivamente estruturados" ou "exclusivamente pelo volume" estão errados.',
      'Data warehouse é analítico; quem registra o dia a dia é o banco transacional.'
    ],
    pegadinhas: [
      'Dizer que velocidade é a frequência do processador.',
      'Dizer que NoSQL exige esquema rígido.',
      'Afirmar que o data warehouse substitui o OLTP.'
    ]
  },

  'Informática|3.3 Inteligência artificial': {
    resumo: 'Inteligência artificial é a área que busca fazer sistemas executarem tarefas que exigiriam inteligência humana. O aprendizado de máquina é um ramo da IA em que o sistema aprende padrões a partir de dados; o deep learning usa redes neurais com muitas camadas. Entram ainda IA generativa, processamento de linguagem natural, visão computacional, tipos de aprendizado e riscos (alucinações, vieses).',
    pontos: [
      'Supervisionado: dados rotulados (classificação, regressão). Não supervisionado: sem rótulos (agrupamento). Por reforço: agente aprende por tentativa e erro com recompensas e penalidades.',
      'Deep learning se baseia em redes neurais artificiais profundas (muitas camadas).',
      'IA generativa (ChatGPT, Copilot, Gemini) cria textos, imagens e códigos a partir de modelos treinados com grandes volumes de dados.',
      'Modelos generativos podem "alucinar": produzir informação falsa com aparência plausível.',
      'Vieses dos dados de treinamento podem ser reproduzidos e até ampliados pelo modelo.',
      'PLN: interpretação e geração de linguagem humana (chatbots, tradutores). Visão computacional: reconhecimento facial, leitura de placas.',
      'IA fraca/estreita: especializada em tarefas específicas; IA forte/geral: capacidade intelectual ampla como a humana (ainda teórica).'
    ],
    macetes: [
      'IA ⊃ Machine Learning ⊃ Deep Learning (bonecas russas).',
      'Reforço = "cachorro aprendendo com petisco".',
      'Fraca = faz UMA coisa bem; Forte = faz TUDO como humano.'
    ],
    dicas: [
      'Itens que afirmam neutralidade absoluta da IA ou ausência de erros nas respostas generativas estão errados.',
      'Associe exemplos policiais (leitura de placas, reconhecimento facial) à visão computacional.'
    ],
    pegadinhas: [
      'Dizer que deep learning dispensa redes neurais.',
      'Dizer que não supervisionado exige rótulos.',
      'Inverter IA fraca e IA forte.'
    ]
  },

  'Informática|4.1 Vírus, worms, phishing e pragas virtuais': {
    resumo: 'Códigos maliciosos (malware) diferem pela forma de propagação e pelo objetivo. O vírus se anexa a arquivos e depende de execução; o worm se propaga sozinho; o cavalo de Troia se disfarça de programa legítimo; spyware espiona; ransomware sequestra dados; rootkit esconde a invasão; backdoor garante o retorno do invasor. Golpes como phishing e pharming usam engenharia social ou desvio de DNS.',
    pontos: [
      'Vírus: insere cópias de si em arquivos/programas e precisa que o hospedeiro seja executado. Vírus de macro infecta documentos Word/Excel com macros.',
      'Worm: autorreplicação automática pela rede explorando vulnerabilidades, sem hospedeiro.',
      'Cavalo de Troia (trojan): parece útil, mas executa funções maliciosas; não se replica.',
      'Spyware: monitora e envia informações (keylogger, screenlogger, adware). Adware exibe propaganda.',
      'Ransomware: torna dados inacessíveis (criptografia) e exige resgate.',
      'Backdoor: permite o retorno do invasor; rootkit: conjunto de técnicas para esconder e manter a presença do invasor ou do malware.',
      'Phishing: mensagens/páginas falsas para obter dados — por e-mail, SMS (smishing), voz (vishing), redes sociais. Pharming: redireciona o usuário a site falso por envenenamento de DNS. Spam: mensagens não solicitadas em massa. Hoax: boato repassado pelos próprios usuários.'
    ],
    macetes: [
      '"Worm anda sozinho; vírus pega carona; trojan entra pela porta da frente disfarçado."',
      'Rootkit = "esconde"; Backdoor = "volta".',
      'Phishing = "pescaria" de dados; Pharming = "fazenda" de DNS (desvia o endereço).'
    ],
    dicas: [
      'A banca troca as características: replicação (vírus/worm) × disfarce (trojan) × sequestro (ransomware).',
      'Itens com "exclusivamente por e-mail" para phishing estão errados.'
    ],
    pegadinhas: [
      'Dizer que o trojan se replica como o vírus.',
      'Chamar de pharming o envio de spam publicitário.',
      'Atribuir ao adware o sequestro de arquivos (é o ransomware) ou ao spyware a destruição de dados.'
    ]
  },

  'Informática|4.2 Aplicativos para segurança': {
    resumo: 'Os aplicativos de segurança se complementam: antivírus/antimalware detecta e remove códigos maliciosos; antispyware foca em espiões; firewall controla o tráfego de entrada e saída por regras; IDS detecta e IPS bloqueia intrusões; gerenciadores de senhas guardam credenciais cifradas; VPN cifra o canal. Nenhum deles, isoladamente, protege contra tudo.',
    pontos: [
      'Antivírus precisa de atualização frequente do programa e das bases de assinaturas; usa também heurística e análise de comportamento.',
      'Quarentena isola o arquivo suspeito sem excluí-lo de imediato.',
      'Firewall controla entrada E saída, por regras de programas, endereços e portas; não analisa anexos como um antivírus.',
      'IDS (detecção) gera alertas; IPS (prevenção) bloqueia ativamente.',
      'Dois antivírus com proteção em tempo real simultânea podem conflitar e degradar o desempenho.',
      'Gerenciador de senhas: cofre cifrado protegido por senha mestra, gera senhas fortes e únicas.',
      'VPN protege o canal, mas não torna a navegação totalmente anônima nem impede malware.'
    ],
    macetes: [
      'IDS = "Dedo-Duro" (só avisa); IPS = "Impede".',
      'Firewall = porteiro (quem entra e sai); antivírus = revista (o que está na bolsa).'
    ],
    dicas: [
      'Itens com "qualquer", "completamente" ou "exclusivamente" sobre ferramentas de segurança tendem a ser errados.',
      'Saiba separar função: firewall não substitui antivírus e vice-versa.'
    ],
    pegadinhas: [
      'Inverter IDS e IPS.',
      'Dizer que o firewall atua só no tráfego de saída (ou só no de entrada).',
      'Dizer que VPN garante anonimato completo e proteção contra malware.'
    ]
  },

  'Informática|5 Computação na nuvem': {
    resumo: 'Computação em nuvem é o fornecimento de recursos de TI (servidores, armazenamento, aplicações) pela rede, sob demanda e com cobrança pelo uso. Os modelos de serviço são IaaS, PaaS e SaaS; os de implantação, nuvem pública, privada, comunitária e híbrida. Há vantagens (elasticidade, custo sob demanda) e riscos (dependência de conexão, aprisionamento ao provedor).',
    pontos: [
      'Nuvem pública: infraestrutura do provedor compartilhada por vários clientes. Privada: exclusiva de uma organização, podendo ser hospedada por ela ou por terceiros.',
      'Comunitária: compartilhada por organizações com interesses comuns (não é aberta ao público geral). Híbrida: combina duas ou mais, com portabilidade de dados/aplicações.',
      'SaaS: Gmail, Microsoft 365, Google Drive; PaaS: ambiente de desenvolvimento; IaaS: máquinas virtuais, rede e armazenamento.',
      'Responsabilidade compartilhada: a divisão de segurança entre provedor e cliente varia conforme o modelo; o cliente sempre responde por algo (dados, acessos).',
      'Cobrança sob demanda (pay-as-you-go): paga-se pelo que se usa.',
      'Armazenamento em nuvem sincroniza arquivos entre dispositivos, mas não substitui backup (exclusão ou ransomware podem ser sincronizados).',
      'Desvantagens: dependência da Internet e aprisionamento tecnológico (lock-in).'
    ],
    macetes: [
      'Pública = ônibus; Privada = carro próprio (mesmo que estacionado em garagem alugada); Híbrida = vai de carro e de ônibus.',
      'Comunitária = "condomínio": só os moradores (organizações afins) usam.'
    ],
    dicas: [
      'A nuvem privada não precisa estar no datacenter do próprio órgão.',
      'Itens que eximem o cliente de toda responsabilidade de segurança estão errados.'
    ],
    pegadinhas: [
      'Dizer que na nuvem pública os recursos físicos são dedicados a um único cliente.',
      'Dizer que a nuvem comunitária é aberta ao público em geral.',
      'Afirmar que a nuvem dispensa backup.'
    ]
  },

  /* ===================== ÉTICA E CIDADANIA ===================== */

  'Ética e Cidadania|1 Ética e moral': {
    resumo: 'Moral é o conjunto de normas, valores e costumes efetivamente vividos por um grupo, variável no tempo e no espaço; ética é a reflexão crítica e teórica sobre os fundamentos dessas condutas, com pretensão de universalidade. As palavras vêm do grego ethos e do latim mores, ambas ligadas a costume. A banca também cobra correntes clássicas: Aristóteles (virtude como justo meio), Kant (imperativo categórico), utilitarismo (consequências) e a distinção entre moral e direito.',
    pontos: [
      'Ética = teoria/reflexão; moral = prática/costumes de uma sociedade.',
      'A moral é histórica e cultural: varia entre sociedades e ao longo do tempo.',
      'Moral × direito: a norma moral não tem coercibilidade estatal (sanção é interna ou social); a norma jurídica é coercível pelo Estado. Algo pode ser lícito e imoral.',
      'Aristóteles: virtude é o justo meio entre dois vícios (excesso e falta) — coragem fica entre temeridade e covardia.',
      'Kant: imperativo categórico — agir segundo máxima que se possa querer como lei universal; tratar a pessoa sempre como fim, nunca apenas como meio. Ética do dever.',
      'Utilitarismo (Bentham, Stuart Mill): ação correta é a que produz a maior felicidade para o maior número — ética das consequências.',
      'Autonomia: o sujeito, pela razão, dá a si mesmo a regra; heteronomia: regra imposta de fora (autoridade, tradição).'
    ],
    macetes: [
      'Ética = "pensar"; Moral = "praticar".',
      'Ethos (grego) → Ética; Mores (latim) → Moral.',
      'Kant = dever/intenção; Utilitarismo = resultado/consequência; Aristóteles = meio-termo.',
      'AUTOnomia = AUTOr da própria regra; HETEROnomia = regra de OUTRO.'
    ],
    dicas: [
      'A banca troca autonomia por heteronomia e intenção por consequência — confira a qual corrente a característica pertence.',
      'Itens que igualam ética e moral sem ressalva, ou que atribuem coercibilidade estatal à moral, tendem a estar errados.'
    ],
    pegadinhas: [
      'Dizer que para Aristóteles a virtude é o excesso de uma qualidade.',
      'Dizer que o utilitarismo considera apenas a intenção.',
      'Definir moral heterônoma como a autoimposta pela razão.'
    ]
  },

  'Ética e Cidadania|2 Ética, princípios e valores': {
    resumo: 'Valores são qualidades ou referências às quais pessoas e grupos atribuem importância e que orientam escolhas e julgamentos; princípios são preceitos fundamentais e gerais que guiam a conduta e servem de base a normas mais específicas. Os valores podem ser hierarquizados e são influenciados por cultura, educação e história. No serviço público, princípios e valores éticos sustentam a confiança da sociedade e a legitimidade do Estado.',
    pontos: [
      'Valores: critérios de preferência (honestidade, justiça, solidariedade); orientam decisões concretas.',
      'Princípios: preceitos gerais e fundantes, base para regras mais específicas.',
      'Hierarquia de valores: diante de conflito, a pessoa decide qual valor prevalece no caso.',
      'Valores são construídos social e historicamente; não são inatos nem imutáveis.',
      'Reconhecer diversidade cultural não impede valores de alcance universal, como os direitos humanos.',
      'A dignidade da pessoa humana é fundamento da República (CF, art. 1º, III).',
      'Os princípios éticos se ligam aos princípios da administração pública (CF, art. 37: legalidade, impessoalidade, moralidade, publicidade e eficiência).'
    ],
    macetes: [
      'Valor = "o que importa"; Princípio = "a regra-mãe".',
      'Fundamentos da República (art. 1º): SO-CI-DI-VA-PLU — soberania, cidadania, dignidade, valores sociais do trabalho e da livre iniciativa, pluralismo político.'
    ],
    dicas: [
      'Itens que dizem que valores são inatos, imutáveis ou sem efeito prático estão errados.',
      'Desconfie de itens que restringem a ética à vida privada.'
    ],
    pegadinhas: [
      'Afirmar que ser ético é agir conforme os próprios interesses.',
      'Dizer que o relativismo cultural obriga a rejeitar qualquer valor universal.'
    ]
  },

  'Ética e Cidadania|3 Ética e função pública: integridade': {
    resumo: 'A função pública existe para o interesse coletivo: o agente não pode usar o cargo para fins particulares. Integridade pública é o alinhamento consistente da atuação de agentes e órgãos a valores, princípios e normas éticas, colocando o interesse público acima do privado. Programas de integridade são preventivos — prevenir, detectar, punir e remediar — e a integridade está entre os princípios da governança pública do Decreto 9.203/2017.',
    pontos: [
      'Integridade = agir de forma coerente com valores e normas, priorizando o interesse público.',
      'Integridade figura expressamente como princípio da governança pública (Decreto 9.203/2017, art. 3º).',
      'Programas de integridade (Decreto 9.203/2017, art. 19) têm eixos como comprometimento da alta administração, unidade responsável, gestão de riscos e monitoramento contínuo.',
      'Riscos para a integridade vão além da propina: abrangem nepotismo, conflito de interesses, uso indevido de informação, pressões indevidas, fraudes.',
      'A conduta privada do servidor repercute no seu conceito funcional (Decreto 1.171/1994).',
      'O servidor presta contas à sociedade (accountability), não apenas à chefia.',
      'O Código de Ética exige escolher não só entre legal e ilegal, mas também entre honesto e desonesto, justo e injusto, conveniente e inconveniente, oportuno e inoportuno.'
    ],
    macetes: [
      'Integridade tem "4 verbos": Prevenir, Detectar, Punir, Remediar.',
      'Ética pública: "não basta ser legal, tem que ser honesto".'
    ],
    dicas: [
      'Itens que reduzem integridade à punição, ou riscos de integridade ao recebimento de dinheiro, estão errados.',
      'Lembre que o Decreto 9.203/2017 lista expressamente a integridade como princípio.'
    ],
    pegadinhas: [
      'Afirmar que o servidor só precisa distinguir legal de ilegal.',
      'Dizer que o servidor presta contas só à chefia imediata.'
    ]
  },

  'Ética e Cidadania|4.1 Moralidade administrativa (art. 37 da CF)': {
    resumo: 'A moralidade é princípio expresso no caput do art. 37 da CF, ao lado de legalidade, impessoalidade, publicidade e eficiência (LIMPE), e vincula a administração direta e indireta de todos os Poderes e entes. Exige atuação conforme a ética, a boa-fé e a probidade; um ato formalmente legal pode ser anulado por imoralidade. É protegida pela ação popular (art. 5º, LXXIII) e pela repressão à improbidade (art. 37, § 4º).',
    pontos: [
      'Art. 37, caput: administração direta e indireta (autarquias, fundações, empresas públicas, sociedades de economia mista) de qualquer dos Poderes da União, Estados, DF e Municípios.',
      'Moralidade é princípio EXPRESSO; o Judiciário pode controlar e anular atos que a violem (controle de legalidade em sentido amplo, não de mérito).',
      'Ação popular (art. 5º, LXXIII): qualquer cidadão pode propor para anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural; autor isento de custas e sucumbência, salvo comprovada má-fé.',
      'Improbidade (art. 37, § 4º): suspensão dos direitos políticos, perda da função pública, indisponibilidade dos bens e ressarcimento ao erário, sem prejuízo da ação penal.',
      'A CF veda a cassação de direitos políticos (art. 15); a improbidade gera SUSPENSÃO.',
      'O STF entende que a vedação ao nepotismo decorre diretamente da moralidade e da impessoalidade (Súmula Vinculante 13), sem depender de lei formal.'
    ],
    macetes: [
      'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.',
      'Improbidade = "SUPER-I-R": SUspensão dos direitos políticos, PERda da função, Indisponibilidade dos bens, Ressarcimento.'
    ],
    dicas: [
      'Troca de "suspensão" por "cassação" dos direitos políticos é pegadinha clássica.',
      'Na ação popular, guarde: cidadão + isenção de custas, salvo má-fé.'
    ],
    pegadinhas: [
      'Dizer que a moralidade é princípio implícito.',
      'Restringir a moralidade à administração direta.',
      'Dizer que o autor da ação popular sempre arca com custas.'
    ]
  },

  'Ética e Cidadania|4.2 Deveres do servidor: moralidade (Lei 8.112/1990, art. 116, IX)': {
    resumo: 'O art. 116 da Lei 8.112/1990 lista os deveres do servidor público federal, entre eles manter conduta compatível com a moralidade administrativa (inciso IX). Outros deveres frequentes em prova: lealdade, observância das normas, cumprimento de ordens salvo as manifestamente ilegais, sigilo, urbanidade, comunicação de irregularidades e representação contra ilegalidade. A violação de dever, se não justificar pena mais grave, gera advertência (art. 129).',
    pontos: [
      'Art. 116, I a XII: zelo e dedicação; lealdade às instituições; observar normas; cumprir ordens superiores, exceto quando manifestamente ilegais; atender com presteza; levar irregularidades ao conhecimento da autoridade; zelar pelo patrimônio; guardar sigilo sobre assuntos da repartição; manter conduta compatível com a moralidade; assiduidade e pontualidade; urbanidade; representar contra ilegalidade, omissão ou abuso de poder.',
      'Inciso VI: irregularidades vão à autoridade superior ou, havendo suspeita de envolvimento desta, a outra autoridade competente para apuração.',
      'Parágrafo único: a representação segue pela via hierárquica e é apreciada pela autoridade superior àquela contra a qual é formulada, assegurada ampla defesa ao representado.',
      'Art. 126-A: nenhum servidor será responsabilizado civil, penal ou administrativamente por dar ciência à autoridade de informação sobre crime ou improbidade.',
      'Art. 129: advertência para violação de proibições do art. 117 (I a VIII e XIX) e para inobservância de dever funcional que não justifique penalidade mais grave.',
      'A moralidade é DEVER (art. 116), não proibição (art. 117).'
    ],
    macetes: [
      'Art. 116 = deveres ("faça"); art. 117 = proibições ("não faça").',
      'Ordem manifestamente ilegal: "não se cumpre".',
      'Denunciou de boa-fé? Art. 126-A protege.'
    ],
    dicas: [
      'Cuidado com "sempre a pena de demissão" para violação de dever: a regra é advertência, se não houver falta mais grave.',
      'O sigilo sobre assuntos da repartição está na Lei 8.112 (art. 116, VIII), e não só no Código de Ética.'
    ],
    pegadinhas: [
      'Afirmar que o servidor deve cumprir até ordens manifestamente ilegais.',
      'Dizer que, se a chefia estiver envolvida, o servidor fica dispensado de comunicar.',
      'Dizer que o servidor pode ser punido por comunicar crime ou improbidade.'
    ]
  },

  'Ética e Cidadania|4.3 Governança pública (Decreto 9.203/2017)': {
    resumo: 'O Decreto 9.203/2017 dispõe sobre a política de governança da administração pública federal direta, autárquica e fundacional. Define governança pública como o conjunto de mecanismos de liderança, estratégia e controle para avaliar, direcionar e monitorar a gestão, visando à condução de políticas públicas e à prestação de serviços de interesse da sociedade. Enumera seis princípios e atribui à alta administração a gestão de riscos e controles internos e a instituição de programas de integridade.',
    pontos: [
      'Mecanismos (art. 5º): liderança, estratégia e controle.',
      'Princípios (art. 3º): capacidade de resposta; integridade; confiabilidade; melhoria regulatória; prestação de contas e responsabilidade; transparência.',
      'Valor público: produtos e resultados gerados, preservados ou entregues pelas atividades de uma organização que representem respostas efetivas e úteis às necessidades ou demandas de interesse público.',
      'Alta administração: ministros, ocupantes de cargos de natureza especial e equivalentes, e presidentes/diretores de autarquias e fundações.',
      'Art. 17: a alta administração deve estabelecer, manter, monitorar e aprimorar sistema de gestão de riscos e controles internos.',
      'Art. 19: órgãos e entidades devem instituir programa de integridade.',
      'Controle abrange também transparência, prevenção e gestão de riscos — não só punição.',
      'Não se aplica diretamente às empresas estatais, que têm regime próprio de governança (Lei 13.303/2016).'
    ],
    macetes: [
      'Mecanismos: "LEC" — Liderança, Estratégia, Controle. Funções: Avaliar, Direcionar, Monitorar.',
      'Princípios: "CI-CO-ME-PRES-TRANS" — Capacidade de resposta, Integridade, COnfiabilidade, MElhoria regulatória, PREStação de contas e responsabilidade, TRANSparência.'
    ],
    dicas: [
      'A banca troca os mecanismos por "planejamento, execução e avaliação" — errado.',
      'Também troca os princípios pelos do art. 37 da CF (LIMPE): não confunda.'
    ],
    pegadinhas: [
      'Dizer que o decreto se aplica às estatais nas mesmas condições da administração direta.',
      'Atribuir a gestão de riscos exclusivamente aos órgãos de controle externo.',
      'Afirmar que eficiência, impessoalidade e publicidade são os únicos princípios da governança.'
    ]
  },

  'Ética e Cidadania|4.4.1 Código de Ética do Servidor (Decreto 1.171/1994)': {
    resumo: 'O Decreto 1.171/1994 aprova o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal. Está dividido em regras deontológicas (princípios), deveres (XIV), vedações (XV) e disposições sobre as Comissões de Ética. A única pena aplicável pela Comissão de Ética é a de censura, e o conceito de servidor, para fins de apuração ética, é amplíssimo.',
    pontos: [
      'Primados maiores: a dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais, no exercício do cargo ou fora dele.',
      'O servidor deve decidir não só entre legal e ilegal, mas entre honesto e desonesto, justo e injusto, conveniente e inconveniente, oportuno e inoportuno.',
      'A publicidade de atos administrativos é requisito de eficácia e moralidade; sua omissão compromete eticamente.',
      'Fazer o usuário esperar por solução que compete ao seu setor caracteriza atitude contra a ética e grave dano moral aos usuários.',
      'Vedado usar cargo, função, facilidades, amizades, tempo, posição e influências para obter favorecimento para si ou para outrem; vedado receber presente, gratificação, comissão ou doação para cumprir sua missão.',
      'Vedado omitir ou falsear a verdade, ainda que contrária aos interesses da própria pessoa interessada ou da Administração.',
      'Pena: CENSURA, aplicada pela Comissão de Ética, com fundamentação e ciência do faltoso.',
      'Servidor, para fins do Código: todo aquele que, por força de lei, contrato ou qualquer ato jurídico, presta serviços de natureza permanente, temporária ou excepcional, ainda que sem retribuição financeira, ligado a órgão do poder estatal.'
    ],
    macetes: [
      'Comissão de Ética "só censura" — não adverte, não suspende, não demite.',
      'Primados: "DI-DE-ZE-E-CO" — Dignidade, Decoro, Zelo, Eficácia, Consciência.'
    ],
    dicas: [
      'Itens que permitem presentes "módicos" ao servidor comum contrariam a vedação do Código.',
      'A vida privada repercute na vida funcional — itens que a isolam estão errados.'
    ],
    pegadinhas: [
      'Dizer que a Comissão de Ética aplica advertência, suspensão ou demissão.',
      'Permitir falsear a verdade em favor da Administração.',
      'Restringir o conceito de servidor aos ocupantes de cargo efetivo remunerado.'
    ]
  },

  'Ética e Cidadania|4.4.2 Sistema de Gestão da Ética e Comissões (Decreto 6.029/2007)': {
    resumo: 'O Decreto 6.029/2007 institui o Sistema de Gestão da Ética do Poder Executivo Federal, integrado pela Comissão de Ética Pública (CEP), pelas Comissões de Ética do Decreto 1.171/1994 e pelas demais comissões de ética e equivalentes. Regula a composição da CEP e das comissões setoriais, os princípios dos trabalhos e o procedimento de apuração, que corre sob chancela de reservado até sua conclusão.',
    pontos: [
      'CEP: sete brasileiros de idoneidade moral, reputação ilibada e notória experiência em administração pública, designados pelo Presidente da República, mandato de três anos, não coincidentes, permitida uma única recondução.',
      'A atuação na CEP não é remunerada e é considerada prestação de relevante serviço público.',
      'Comissões setoriais: três membros titulares e respectivos suplentes, servidores ou empregados do quadro permanente, designados pelo dirigente máximo, para mandatos não coincidentes de três anos.',
      'Os trabalhos das comissões têm prioridade sobre as atribuições próprias dos cargos de seus membros.',
      'Princípios: proteção à honra e à imagem do investigado; proteção à identidade do denunciante, mantida sob reserva se ele desejar; independência e imparcialidade.',
      'Legitimados: qualquer cidadão, agente público, pessoa jurídica de direito privado, associação ou entidade de classe pode provocar a atuação da CEP ou de comissão de ética.',
      'O procedimento tem chancela de "reservado" até a conclusão; depois é acessível.',
      'Constatada falta ética, além da censura, a comissão pode sugerir exoneração de cargo em comissão, encaminhar o caso a outros órgãos ou recomendar abertura de procedimento administrativo; pode ainda celebrar acordo de conduta pessoal e profissional.'
    ],
    macetes: [
      'CEP = "7 do Presidente, 3 anos"; Setorial = "3 da casa, 3 anos".',
      'Denúncia ética: "qualquer um pode" (cidadão, servidor, empresa, associação).'
    ],
    dicas: [
      'A banca troca quem designa a CEP (Senado × Presidente da República) e o número de membros.',
      'Lembre que o processo é reservado até a conclusão, não público desde o início.'
    ],
    pegadinhas: [
      'Dizer que comissões setoriais têm cinco membros ocupantes de cargos em comissão.',
      'Afirmar que só agentes públicos podem provocar as comissões.',
      'Dizer que os trabalhos na comissão só ocorrem depois das atribuições do cargo.'
    ]
  },

  'Ética e Cidadania|4.4.3 Código de Conduta da Alta Administração Federal': {
    resumo: 'O Código de Conduta da Alta Administração Federal (2000) dirige-se às autoridades do topo do Executivo federal, e não a todos os servidores. Busca tornar claras as regras éticas para que a sociedade possa aferir a integridade das autoridades, preservar a imagem do Estado e evitar conflitos de interesses. É administrado pela Comissão de Ética Pública, e sua violação gera advertência ou censura ética.',
    pontos: [
      'Abrange ministros e secretários de Estado; titulares de cargos de natureza especial, secretários-executivos e autoridades equivalentes do mais alto nível; presidentes e diretores de agências nacionais, autarquias (inclusive especiais), fundações mantidas pelo poder público, empresas públicas e sociedades de economia mista.',
      'Vedado aceitar presentes, salvo de autoridades estrangeiras nos casos protocolares em que houver reciprocidade; brindes sem valor comercial ou de distribuição geral seguem regras próprias.',
      'Vedado receber transporte, hospedagem ou favores de particulares de forma a permitir situação que possa gerar dúvida sobre a probidade ou honorabilidade.',
      'Propostas de trabalho ou de negócio futuro no setor privado devem ser imediatamente informadas à CEP, independentemente de aceitação ou rejeição.',
      'Vedado opinar publicamente sobre o mérito de questão que lhe será submetida para decisão individual ou em órgão colegiado.',
      'Sanções: advertência (autoridade no exercício do cargo) e censura ética (autoridade que já deixou o cargo).',
      'A CEP administra o Código, com competência para interpretar, apurar e aplicar as sanções.'
    ],
    macetes: [
      'Sanções: "Adverte quem está; censura quem saiu".',
      'Presente: "só de autoridade estrangeira, com reciprocidade e protocolo".'
    ],
    dicas: [
      'A inversão entre advertência e censura ética é a pegadinha mais comum.',
      'Itens que estendem o Código a todos os servidores federais estão errados.'
    ],
    pegadinhas: [
      'Atribuir a administração do Código à CGU.',
      'Dizer que a autoridade pode receber favores de particulares sem restrição.',
      'Permitir que a autoridade opine publicamente sobre o mérito de questão que vai decidir.'
    ]
  },

  'Ética e Cidadania|5.1 Transparência e acesso à informação (Lei 12.527/2011 e Decreto 7.724/2012)': {
    resumo: 'A Lei de Acesso à Informação (LAI) regulamenta o direito constitucional de acesso a informações públicas e alcança os três Poderes, os tribunais de contas, o Ministério Público, as entidades da administração indireta e, em parte, entidades privadas sem fins lucrativos que recebem recursos públicos. A publicidade é a regra e o sigilo a exceção; o pedido não precisa ser motivado. O Decreto 7.724/2012 regulamenta a lei no Executivo federal.',
    pontos: [
      'Abrangência: União, Estados, DF e Municípios; Executivo, Legislativo (com tribunais de contas), Judiciário e Ministério Público; autarquias, fundações, empresas públicas, sociedades de economia mista e controladas.',
      'Diretrizes: publicidade como preceito geral e sigilo como exceção; divulgação de informações de interesse público independentemente de solicitação (transparência ativa); uso de tecnologia; cultura de transparência; controle social.',
      'São vedadas exigências relativas aos motivos determinantes da solicitação de informação de interesse público.',
      'Prazo: acesso imediato; não sendo possível, até 20 dias, prorrogáveis por mais 10 mediante justificativa expressa, com ciência ao requerente.',
      'Classificação: ultrassecreta até 25 anos (prorrogável uma única vez), secreta até 15 anos, reservada até 5 anos.',
      'Informações pessoais relativas à intimidade, vida privada, honra e imagem: acesso restrito por até 100 anos, independentemente de classificação.',
      'Informações sobre condutas que impliquem violação de direitos humanos por agentes públicos ou a mando de autoridades não podem ter acesso restrito.',
      'Negado o acesso, cabe recurso em 10 dias à autoridade hierarquicamente superior.'
    ],
    macetes: [
      'Prazo de resposta "20 + 10".',
      'Sigilo "25-15-5": ultrassecreta, secreta, reservada. Pessoal: 100 anos.',
      '"Não se pergunta por quê": pedido sem motivação.'
    ],
    dicas: [
      'A banca troca os prazos (30 + 15) e os graus (secreta com 25 anos).',
      'Itens que restringem a LAI ao Executivo estão errados.'
    ],
    pegadinhas: [
      'Exigir que o requerente demonstre motivo ou interesse pessoal.',
      'Dizer que informação pessoal tem restrição de 25 anos, igual à ultrassecreta.',
      'Atribuir 25 anos ao grau secreto.'
    ]
  },

  'Ética e Cidadania|5.2 Conflito de interesses e nepotismo (Lei 12.813/2013 e Decreto 7.203/2010)': {
    resumo: 'A Lei 12.813/2013 trata do conflito de interesses no Executivo federal, durante e após o exercício do cargo, e o Decreto 7.203/2010 veda o nepotismo na administração pública federal. Conflito de interesses é o confronto entre interesses públicos e privados que possa comprometer o interesse coletivo ou influenciar indevidamente o desempenho da função; configura-se independentemente de dano ao erário ou de vantagem. A Súmula Vinculante 13 do STF proíbe o nepotismo, inclusive cruzado, com base direta na Constituição.',
    pontos: [
      'Conflito de interesses (art. 3º, I) e informação privilegiada (art. 3º, II: informação relevante, não de conhecimento público).',
      'Art. 4º, § 2º: a ocorrência de conflito independe de lesão ao patrimônio público e de recebimento de vantagem pelo agente ou por terceiro.',
      'Após o cargo (art. 6º): a qualquer tempo, é vedado divulgar ou usar informação privilegiada; por 6 meses após a dispensa/exoneração, salvo autorização da CEP ou da CGU, é vedado, por exemplo, prestar serviço a pessoa com quem teve relacionamento relevante, aceitar cargo em empresa da área de atuação, celebrar contratos de consultoria com órgão a que esteve vinculado e intervir em favor de interesse privado perante esse órgão.',
      'Fiscalização: CEP (alta administração) e CGU (demais agentes).',
      'SV 13: veda a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o 3º grau, da autoridade nomeante ou de servidor com cargo de direção, chefia ou assessoramento, para cargo em comissão, de confiança ou função gratificada, inclusive mediante designações recíprocas (nepotismo cruzado).',
      'Decreto 7.203/2010: familiar = cônjuge, companheiro ou parente em linha reta ou colateral, por consanguinidade ou afinidade, até o 3º grau.',
      'Não se incluem nas vedações: nomeação de familiares ocupantes de cargo efetivo (observadas compatibilidade de escolaridade e vedação de subordinação direta), contratação por concurso público e outras exceções legais.'
    ],
    macetes: [
      'Quarentena: "6 meses" (não 12).',
      'Nepotismo: "até o 3º grau, sangue ou afinidade, direto ou cruzado".',
      'Conflito de interesses: "não precisa dano, não precisa vantagem".'
    ],
    dicas: [
      'A banca troca o grau (2º × 3º) e o prazo da quarentena (6 × 12 meses).',
      'O STF considera a vedação ao nepotismo autoaplicável (decorre de moralidade e impessoalidade), sem lei formal.'
    ],
    pegadinhas: [
      'Exigir dano ao erário para configurar conflito de interesses.',
      'Dizer que a SV 13 não alcança parentes por afinidade.',
      'Vedar a nomeação de familiar para cargo efetivo após aprovação em concurso.'
    ]
  },

  /* ===================== GEOPOLÍTICA ===================== */

  'Geopolítica|1 Brasil político: nação e território': {
    resumo: 'O Brasil é o maior país da América do Sul e o quinto do mundo em área, com fronteira terrestre com dez países (todos da América do Sul, exceto Chile e Equador). Seu território resultou de tratados como Tordesilhas (1494), Madri (1750, baseado no uti possidetis) e Petrópolis (1903, Acre). A CF define a faixa de fronteira (até 150 km) e a legislação marítima define mar territorial (12 milhas) e zona econômica exclusiva (200 milhas).',
    pontos: [
      'Estado: organização político-jurídica soberana sobre um território; nação: comunidade unida por laços históricos, culturais e de identidade.',
      'Faixa de fronteira: até 150 km ao longo das fronteiras terrestres, fundamental para a defesa do território (CF, art. 20, § 2º).',
      'Tratado de Madri (1750): uti possidetis — a terra pertence a quem a ocupa; legitimou a expansão portuguesa além de Tordesilhas.',
      'Acre: incorporado pelo Tratado de Petrópolis (1903), com a Bolívia.',
      'Mar territorial: 12 milhas marítimas (soberania plena, com passagem inocente); zona contígua: até 24 milhas; zona econômica exclusiva: até 200 milhas (direitos de soberania sobre recursos, com liberdade de navegação de outros Estados).',
      'O Brasil é o 5º maior país do mundo em extensão (atrás de Rússia, Canadá, China e EUA, cuja ordem entre si varia conforme o critério).',
      'Fronteira: Uruguai, Argentina, Paraguai, Bolívia, Peru, Colômbia, Venezuela, Guiana, Suriname e Guiana Francesa (território da França).'
    ],
    macetes: [
      'Fronteiras: "todos menos Chile e Equador" (os dois "do Pacífico sem vizinhança").',
      'Mar: "12 - 24 - 200" (territorial, contígua, ZEE). Faixa de fronteira: "150 km".',
      'Madri = "Mora? É dono" (uti possidetis).'
    ],
    dicas: [
      'A banca troca os números (150 × 300 km; 12 × 200 milhas) e o tratado do Acre (Petrópolis, não Madri).',
      'Na ZEE não há soberania plena; há direitos sobre recursos e navegação estrangeira é livre.'
    ],
    pegadinhas: [
      'Dizer que o Brasil faz fronteira com todos os países sul-americanos.',
      'Afirmar que o Brasil é o maior país do mundo.',
      'Dizer que na ZEE é vedada a navegação estrangeira.'
    ]
  },

  'Geopolítica|2 Organização do Estado brasileiro': {
    resumo: 'A República Federativa do Brasil compreende União, Estados, Distrito Federal e Municípios, todos autônomos (CF, art. 18). Hoje são 26 estados e o DF; não há territórios federais, que, se criados, integram a União e não são entes federativos. A forma federativa é cláusula pétrea, e mudanças territoriais exigem consulta popular por plebiscito.',
    pontos: [
      'Entes federativos: União, Estados, DF e Municípios — todos com autonomia política, administrativa e financeira.',
      'Brasília é a capital federal (art. 18, § 1º); o DF não pode ser dividido em municípios (art. 32).',
      'Territórios federais integram a União (art. 18, § 2º); os últimos (Roraima, Amapá) viraram estados e Fernando de Noronha foi reincorporado a Pernambuco pela CF/1988.',
      'Estados podem incorporar-se, subdividir-se ou desmembrar-se mediante plebiscito da população diretamente interessada e lei complementar do Congresso Nacional (art. 18, § 3º).',
      'Municípios: criação por lei estadual, no período fixado por lei complementar federal, após consulta prévia por plebiscito e estudos de viabilidade (art. 18, § 4º).',
      'A forma federativa de Estado é cláusula pétrea (art. 60, § 4º, I).',
      'Tocantins, criado pela CF/1988, pertence à Região Norte do IBGE.'
    ],
    macetes: [
      'Entes: "U-E-DF-M" — todos autônomos; soberana só a República Federativa.',
      'Mudar estado = "Plebiscito + Lei Complementar"; mudar município = "Plebiscito + Lei Estadual".',
      'Tocantins "subiu" para o Norte.'
    ],
    dicas: [
      'Itens que dão autonomia política ou status de ente aos territórios estão errados.',
      'Lembre: a capital é Brasília, e o DF não tem municípios nem prefeitos.'
    ],
    pegadinhas: [
      'Dizer que municípios não são entes federativos.',
      'Dispensar o plebiscito na criação de estados.',
      'Colocar Tocantins no Centro-Oeste.'
    ]
  },

  'Geopolítica|3 Divisão inter-regional do trabalho e da produção': {
    resumo: 'Além das cinco regiões do IBGE, o Brasil pode ser dividido em três complexos geoeconômicos (Pedro Geiger, 1967): Amazônia, Nordeste e Centro-Sul, cujos limites não seguem as divisas estaduais. O Centro-Sul concentra historicamente a produção industrial e o PIB, mas houve relativa desconcentração industrial desde o fim do século XX. Políticas regionais como a Sudene e a Zona Franca de Manaus buscaram reduzir desigualdades.',
    pontos: [
      'Complexos geoeconômicos: limites cortam estados — norte de Minas no Nordeste; oeste do Maranhão na Amazônia; sul do Tocantins e de Mato Grosso no Centro-Sul.',
      'Centro-Sul: maior concentração industrial, urbana e de renda; Sudeste segue líder na indústria mesmo após a desconcentração.',
      'Desconcentração industrial: incentivos fiscais (guerra fiscal), custos menores de mão de obra e terra, melhoria de infraestrutura e deseconomias de aglomeração nas metrópoles.',
      'Sudene (1959): desenvolvimento econômico do Nordeste e redução das disparidades regionais.',
      'Zona Franca de Manaus: polo industrial, comercial e agropecuário com incentivos fiscais na Amazônia Ocidental — destaque para o Polo Industrial de Manaus.',
      'Sub-regiões do Nordeste: Zona da Mata (clima tropical úmido, cana-de-açúcar, cidades grandes); Agreste (transição, policultura, pecuária leiteira, minifúndios); Sertão (semiárido, pecuária extensiva); Meio-Norte (transição para a Amazônia, extrativismo de babaçu e carnaúba).'
    ],
    macetes: [
      'Geiger = "3 complexos que ignoram as divisas".',
      'Nordeste de leste a oeste: "Mata, Agreste, Sertão, Meio-Norte" — da umidade à seca e de volta à transição.'
    ],
    dicas: [
      'A banca troca as características da Zona da Mata e do Sertão.',
      'Desconcentração não significa perda da liderança do Sudeste.'
    ],
    pegadinhas: [
      'Dizer que os limites geoeconômicos coincidem com os estaduais.',
      'Dizer que a Zona Franca foi criada só para a agropecuária.',
      'Atribuir monocultura canavieira ao Agreste.'
    ]
  },

  'Geopolítica|4 Estrutura urbana e grandes metrópoles': {
    resumo: 'A urbanização brasileira foi rápida e concentrada: a população urbana superou a rural entre as décadas de 1960 e 1970, impulsionada pela industrialização e pelo êxodo rural. Formaram-se metrópoles, conurbações e regiões metropolitanas, com forte segregação socioespacial. A CF e o Estatuto da Cidade (Lei 10.257/2001) disciplinam a política urbana, e o IBGE define a hierarquia urbana (REGIC).',
    pontos: [
      'Regiões metropolitanas: instituídas pelos estados, por lei complementar, agrupando municípios limítrofes (CF, art. 25, § 3º).',
      'RIDE (Região Integrada de Desenvolvimento): criada pela União, envolve municípios de mais de uma unidade da federação (ex.: RIDE do DF e entorno).',
      'Plano diretor: obrigatório para cidades com mais de 20 mil habitantes; instrumento básico da política de desenvolvimento e expansão urbana (art. 182, § 1º).',
      'Conurbação: junção das manchas urbanas de cidades vizinhas.',
      'REGIC/IBGE: São Paulo é a grande metrópole nacional; Rio de Janeiro e Brasília são metrópoles nacionais.',
      'Segregação socioespacial: população de baixa renda em periferias distantes e assentamentos precários; condomínios fechados para as classes altas.',
      'Metropolização seguida de crescimento das cidades médias nas últimas décadas.'
    ],
    macetes: [
      'RM = Estado + LC estadual; RIDE = União + mais de um estado.',
      'Plano diretor: "acima de 20 mil, obrigatório".',
      'REGIC: "SP grande; Rio e Brasília nacionais".'
    ],
    dicas: [
      'A banca troca a competência (União × Estados) para regiões metropolitanas e RIDEs.',
      'Atenção a afirmações de que a urbanização brasileira foi lenta ou tardia (século XXI).'
    ],
    pegadinhas: [
      'Dizer que o plano diretor é facultativo para todos.',
      'Dizer que Brasília tem influência apenas local.',
      'Afirmar que a RIDE é criada por lei complementar estadual e restrita a um estado.'
    ]
  },

  'Geopolítica|5 Distribuição da população e migrações internas': {
    resumo: 'A população brasileira é distribuída de forma irregular, concentrada perto do litoral por herança da ocupação colonial. O Sudeste é a região mais populosa e São Paulo o estado com mais habitantes; o Norte tem a menor densidade demográfica. As migrações internas acompanharam ciclos econômicos: Nordeste → Amazônia na borracha, Nordeste → Sudeste na industrialização, Sul → Centro-Oeste/Norte na fronteira agrícola e migração de retorno a partir dos anos 1990.',
    pontos: [
      'Sudeste: mais populosa e mais povoada (alta densidade); Norte: maior área e menor densidade.',
      'Êxodo rural intenso na segunda metade do século XX, por múltiplos fatores: concentração fundiária, mecanização, atração industrial e urbana, além das secas.',
      'Ciclo da borracha (fim do século XIX): nordestinos migraram para a Amazônia.',
      'Anos 1970–1980: frente pioneira agrícola atraiu sulistas para Mato Grosso, Rondônia e outras áreas do Centro-Oeste e da Amazônia.',
      'Migração de retorno: a partir dos anos 1990, nordestinos voltando do Sudeste.',
      'Migração pendular: deslocamento diário casa–trabalho/estudo entre municípios, típico das regiões metropolitanas. Transumância: migração sazonal, temporária, com retorno.',
      'Transição demográfica: fecundidade abaixo do nível de reposição (cerca de 2,1 filhos por mulher) e envelhecimento da população.'
    ],
    macetes: [
      'Populoso = muita gente (Sudeste); Povoado = gente por km² (Norte é pouco povoado).',
      'Pendular = vai e volta no mesmo dia; Transumância = vai e volta com a estação.'
    ],
    dicas: [
      'Diferencie população absoluta de densidade demográfica.',
      'Desconfie de "exclusivamente" para causas de migração.'
    ],
    pegadinhas: [
      'Dizer que o Norte tem a maior densidade por ser a maior região.',
      'Inverter o fluxo do ciclo da borracha.',
      'Afirmar que a fecundidade está acima da reposição e a população rejuvenesce.'
    ]
  },

  'Geopolítica|6 Integração indústria, cidade e agricultura': {
    resumo: 'A modernização da agricultura brasileira a partir dos anos 1960–1970 aproximou o campo da indústria e da cidade, formando complexos agroindustriais. A mecanização e o uso de insumos químicos ocorreram sem reforma da estrutura fundiária, por isso se fala em modernização conservadora. A pesquisa (Embrapa) viabilizou a expansão sobre o Cerrado, e o agronegócio fez crescer cidades médias especializadas em serviços ao campo.',
    pontos: [
      'Complexo agroindustrial: indústrias a montante (máquinas, fertilizantes, sementes) e a jusante (processamento, alimentos, frigoríficos).',
      'Modernização conservadora: tecnificação sem alterar a concentração de terras; aumentou o êxodo rural.',
      'A mecanização reduziu a demanda por mão de obra permanente e ampliou o trabalho temporário (boias-frias: assalariados rurais temporários, sem terra própria).',
      'Sistema de integração (avicultura, suinocultura no Sul): a agroindústria fornece insumos e assistência técnica, e o produtor entrega a produção.',
      'Embrapa: pesquisa que permitiu correção dos solos ácidos do Cerrado e adaptação de cultivares, como a soja.',
      'A soja no Cerrado expandiu-se em médias e grandes propriedades altamente tecnificadas, voltadas à exportação.',
      'Cidades do agronegócio no Centro-Oeste oferecem serviços, crédito, máquinas e insumos ao campo.'
    ],
    macetes: [
      'Montante = antes da porteira; Jusante = depois da porteira.',
      'Modernização conservadora = "trator novo, cerca velha".'
    ],
    dicas: [
      'A modernização aumentou a dependência do campo em relação à indústria — itens dizendo o contrário estão errados.',
      'A cidade fornece serviços e insumos ao campo, não só mão de obra.'
    ],
    pegadinhas: [
      'Dizer que a mecanização reverteu o êxodo rural.',
      'Definir boias-frias como pequenos proprietários.',
      'Associar a soja do Cerrado a pequenas propriedades de subsistência.'
    ]
  },

  'Geopolítica|7 Rede de transportes: modais e infraestrutura': {
    resumo: 'O transporte de cargas no Brasil é dominado pelo modal rodoviário, opção consolidada a partir da segunda metade do século XX com a indústria automobilística e o rodoviarismo. Ferrovias e hidrovias seriam mais baratas para grandes volumes e longas distâncias, mas são subaproveitadas e pouco integradas (ex.: diversidade de bitolas). Para o policial rodoviário, é essencial a nomenclatura das rodovias federais.',
    pontos: [
      'Nomenclatura BR pelo primeiro algarismo: 0 = radial (parte de Brasília); 1 = longitudinal (norte-sul); 2 = transversal (leste-oeste); 3 = diagonal; 4 = ligação.',
      'Exemplos: BR-040 (radial, Brasília–Rio); BR-116 e BR-101 (longitudinais); BR-230 Transamazônica (transversal); BR-364 (diagonal).',
      'Rodoviário: flexível, porta a porta, mas com custo por tonelada maior em longas distâncias.',
      'Ferroviário e hidroviário: menor custo por tonelada para grandes volumes e longas distâncias (minério, grãos).',
      'Aéreo: cargas leves, urgentes e de alto valor agregado.',
      'Problemas: malha ferroviária pequena e com bitolas diferentes; hidrovias subutilizadas; dependência rodoviária encarece o frete de exportação.',
      'Dutoviário: transporte de petróleo, derivados e gás.'
    ],
    macetes: [
      'BR: "0 Radial, 1 Longitudinal, 2 Transversal, 3 Diagonal, 4 Ligação" — "R-L-T-D-L".',
      '1 é um traço em pé (norte-sul); 2 "deitado" (leste-oeste).',
      'Aéreo = "leve, caro e urgente"; trem/barco = "pesado e barato".'
    ],
    dicas: [
      'A banca troca o algarismo das radiais (0) com o das diagonais (3).',
      'Confira o tipo de cada BR famosa: 116 longitudinal, 230 transversal, 040 radial.'
    ],
    pegadinhas: [
      'Dizer que o hidroviário é o modal mais usado no Brasil.',
      'Dizer que a predominância rodoviária barateia o frete de longa distância.',
      'Classificar a BR-116 como diagonal.'
    ]
  },

  'Geopolítica|8 Brasil e internacionalização da economia': {
    resumo: 'Desde os anos 1990, o Brasil passou por abertura comercial, privatizações com participação de capital estrangeiro e maior inserção no comércio mundial. A pauta exportadora é marcada por commodities (soja, minério de ferro, petróleo bruto), e a China é o principal parceiro comercial desde o fim dos anos 2000. No plano regional, o Mercosul é uma união aduaneira imperfeita; no global, o Brasil integra o G20 e o BRICS.',
    pontos: [
      'Mercosul: Tratado de Assunção (1991) — Argentina, Brasil, Paraguai e Uruguai. O Protocolo de Ouro Preto (1994) deu-lhe estrutura institucional e personalidade jurídica internacional.',
      'Mercosul é união aduaneira imperfeita: tarifa externa comum com muitas exceções; não é mercado comum consolidado nem tem moeda única.',
      'Abertura comercial do início dos anos 1990 expôs a indústria nacional à concorrência externa.',
      'Privatizações (anos 1990) tiveram participação de empresas e capitais estrangeiros.',
      'Exportações concentradas em commodities agrícolas e minerais; reprimarização da pauta.',
      'China: principal parceiro comercial do Brasil desde 2009.',
      'G20 reúne as principais economias desenvolvidas e emergentes, incluindo o Brasil; BRICS: Brasil, Rússia, Índia, China e África do Sul, ampliado com novos membros.'
    ],
    macetes: [
      'Mercosul: "Assunção nasce (1991), Ouro Preto estrutura (1994)".',
      'Integração: zona de livre comércio → união aduaneira → mercado comum → união econômica. Mercosul parou no 2º degrau, "imperfeito".'
    ],
    dicas: [
      'A banca troca tratados (Assunção × Ouro Preto) e membros fundadores (inclui o Chile indevidamente).',
      'Itens que descrevem exportações predominantemente de alta tecnologia estão errados.'
    ],
    pegadinhas: [
      'Chamar o Mercosul de mercado comum com moeda única.',
      'Dizer que o Brasil não integra o G20.',
      'Negar a participação estrangeira nas privatizações.'
    ]
  },

  'Geopolítica|9 Geografia e gestão ambiental': {
    resumo: 'A gestão ambiental brasileira se apoia na CF (art. 225) e em leis como a Política Nacional do Meio Ambiente (Lei 6.938/1981), a Política Nacional de Recursos Hídricos (Lei 9.433/1997), o SNUC (Lei 9.985/2000), a Política Nacional de Resíduos Sólidos (Lei 12.305/2010) e o Código Florestal (Lei 12.651/2012). A banca cobra o rol constitucional de patrimônio nacional, os grupos de unidades de conservação e os percentuais de reserva legal.',
    pontos: [
      'Patrimônio nacional (art. 225, § 4º): Floresta Amazônica, Mata Atlântica, Serra do Mar, Pantanal Mato-Grossense e Zona Costeira. Cerrado e Caatinga NÃO constam.',
      'Estudo prévio de impacto ambiental, com publicidade, para obra ou atividade potencialmente causadora de significativa degradação (art. 225, § 1º, IV).',
      'PNMA (Lei 6.938/1981), anterior à CF/1988, criou o Sisnama e o Conama.',
      'PNRH: água é bem de domínio público, recurso limitado e dotado de valor econômico; bacia hidrográfica é a unidade territorial; gestão descentralizada e participativa.',
      'SNUC — proteção integral: estação ecológica, reserva biológica, parque nacional, monumento natural, refúgio de vida silvestre. Uso sustentável: APA, ARIE, floresta nacional, reserva extrativista, reserva de fauna, RDS, RPPN.',
      'Reserva legal na Amazônia Legal: 80% em área de florestas, 35% em cerrado, 20% em campos gerais; nas demais regiões, 20%.',
      'PNRS: logística reversa (retorno de resíduos ao setor empresarial) e responsabilidade compartilhada pelo ciclo de vida dos produtos.'
    ],
    macetes: [
      'Patrimônio nacional: "AMA, SERRA, PANTANAL e COSTA" — Cerrado e Caatinga ficaram de fora.',
      'Reserva legal na Amazônia: "80 - 35 - 20" (floresta, cerrado, campos).',
      'Proteção integral: "EREPAMORE" — Estação, REserva biológica, PArque, MOnumento, REfúgio.'
    ],
    dicas: [
      'A banca inclui Cerrado e Caatinga no rol do art. 225, § 4º — errado.',
      'APA e reserva extrativista são de uso sustentável, não de proteção integral.'
    ],
    pegadinhas: [
      'Dizer que a reserva legal em floresta na Amazônia Legal é 20%.',
      'Afirmar que a água é recurso ilimitado e sem valor econômico.',
      'Dizer que a PNMA foi criada pela CF/1988.'
    ]
  },

  'Geopolítica|10 Biomas, domínios e ecossistemas': {
    resumo: 'O IBGE reconhece seis biomas continentais: Amazônia (o maior), Cerrado (o segundo), Mata Atlântica, Caatinga, Pampa e Pantanal (o menor). Aziz Ab\'Sáber classificou o território em domínios morfoclimáticos (Amazônico, Cerrados, Mares de Morros, Caatingas, Araucárias e Pradarias), separados por faixas de transição. A banca cobra características de vegetação, clima e localização de cada um.',
    pontos: [
      'Amazônia: maior bioma, floresta equatorial densa e heterogênea.',
      'Cerrado: segundo maior; árvores de troncos tortuosos e casca grossa, raízes profundas, solos ácidos; "berço das águas".',
      'Caatinga: exclusivamente brasileira, semiárida, vegetação xerófila e caducifólia (perde folhas na seca).',
      'Mata Atlântica: a mais devastada, pois a ocupação histórica concentrou-se no litoral.',
      'Pantanal: uma das maiores planícies inundáveis do planeta; menor bioma brasileiro; ciclos de cheia e vazante.',
      'Pampa: campos do Rio Grande do Sul (no Brasil, só nesse estado).',
      'Mata de Araucárias: clima subtropical, planaltos mais altos do Sul. Mata dos Cocais (babaçu, carnaúba): Maranhão e Piauí, transição entre Amazônia, Cerrado e Caatinga.',
      'Manguezais: ecossistemas costeiros, berçários de espécies marinhas e estuarinas.'
    ],
    macetes: [
      'Tamanho: "Amazônia > Cerrado > Mata Atlântica > Caatinga > Pampa > Pantanal".',
      'Caatinga = "mata branca" (perde as folhas na seca) e 100% brasileira.',
      'Araucária = "frio e altitude"; Cocais = "Meio-Norte".'
    ],
    dicas: [
      'Itens que tratam o Pantanal ou o Pampa como o maior bioma estão errados.',
      'Ab\'Sáber: domínios separados por faixas de transição — a banca pode negar essa transição.'
    ],
    pegadinhas: [
      'Dizer que a Mata Atlântica é a mais preservada.',
      'Situar a Mata de Araucárias no Norte equatorial.',
      'Situar a Mata dos Cocais no litoral do Sul.'
    ]
  }
});

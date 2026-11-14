/*
 * Banco de questões — Informática (PRF)
 * Itens inéditos no estilo CEBRASPE (Certo/Errado).
 *
 * Para adicionar um item, copie um objeto e ajuste:
 *   id         -> único em todo o banco (ex.: "INF-047")
 *   disciplina -> nome exibido no seletor de disciplina
 *   tema       -> assunto (vira um filtro na tela inicial)
 *   enunciado  -> o item a ser julgado
 *   gabarito   -> "C" (Certo) ou "E" (Errado)
 *   comentario -> justificativa exibida na correção
 *
 * Novas disciplinas: crie data/<disciplina>.js no mesmo formato e
 * inclua o <script> correspondente em index.html.
 */
window.QUESTOES = (window.QUESTOES || []).concat([
  // ---------------- Redes e Internet ----------------
  {
    id: 'INF-001', disciplina: 'Informática', tema: 'Redes e Internet', gabarito: 'C',
    enunciado: 'A intranet é uma rede privada que utiliza os mesmos protocolos da Internet, como os da pilha TCP/IP, e cujo acesso costuma ser restrito aos colaboradores da organização.',
    comentario: 'Correto. A intranet usa as mesmas tecnologias da Internet (TCP/IP, HTTP, navegadores), mas é de uso interno e restrito. Ela pode, inclusive, ser acessada remotamente, por exemplo, via VPN.'
  },
  {
    id: 'INF-002', disciplina: 'Informática', tema: 'Redes e Internet', gabarito: 'E',
    enunciado: 'O protocolo HTTPS utiliza, por padrão, a porta 80 e dispensa o uso de certificados digitais, já que a criptografia é feita pelo próprio navegador.',
    comentario: 'Errado. O HTTPS usa, por padrão, a porta 443 (a 80 é do HTTP) e se apoia em TLS, que utiliza certificados digitais para autenticar o servidor e negociar a criptografia.'
  },
  {
    id: 'INF-003', disciplina: 'Informática', tema: 'Redes e Internet', gabarito: 'C',
    enunciado: 'O DNS é o serviço responsável por traduzir nomes de domínio, como www.gov.br, em endereços IP.',
    comentario: 'Correto. O DNS (Domain Name System) faz a resolução de nomes em endereços IP, permitindo que o usuário acesse sítios sem memorizar números.'
  },
  {
    id: 'INF-004', disciplina: 'Informática', tema: 'Redes e Internet', gabarito: 'E',
    enunciado: 'O endereço IPv4 é composto por 128 bits, representados em oito grupos de dígitos hexadecimais separados por dois-pontos.',
    comentario: 'Errado. O IPv4 tem 32 bits, escritos em quatro octetos decimais (ex.: 192.168.0.1). Os 128 bits em oito grupos hexadecimais descrevem o IPv6.'
  },
  {
    id: 'INF-005', disciplina: 'Informática', tema: 'Redes e Internet', gabarito: 'E',
    enunciado: 'O protocolo UDP é orientado à conexão e garante a entrega ordenada e confiável dos pacotes, razão pela qual é preferido em transmissões de vídeo ao vivo.',
    comentario: 'Errado. O UDP não é orientado à conexão e não garante entrega nem ordem. Essas são características do TCP. O UDP é usado em streaming e VoIP justamente por ter menos overhead e menor latência.'
  },
  {
    id: 'INF-006', disciplina: 'Informática', tema: 'Redes e Internet', gabarito: 'C',
    enunciado: 'Uma VPN cria um túnel criptografado sobre uma rede pública, como a Internet, o que permite a um servidor acessar com segurança os recursos da rede corporativa a partir de casa.',
    comentario: 'Correto. A VPN (Virtual Private Network) encapsula e cifra o tráfego, garantindo confidencialidade no acesso remoto à rede interna.'
  },
  {
    id: 'INF-007', disciplina: 'Informática', tema: 'Redes e Internet', gabarito: 'C',
    enunciado: 'Na topologia em estrela, todos os dispositivos se conectam a um nó central, de modo que a falha de um computador periférico não interrompe a comunicação entre os demais.',
    comentario: 'Correto. Na estrela, cada estação tem ligação própria com o concentrador (switch). A falha de uma estação não afeta as outras, mas a falha do nó central derruba a rede.'
  },
  {
    id: 'INF-008', disciplina: 'Informática', tema: 'Redes e Internet', gabarito: 'C',
    enunciado: 'A extranet permite que usuários externos autorizados, como fornecedores e parceiros, acessem parte dos recursos da intranet de uma organização.',
    comentario: 'Correto. A extranet é a extensão controlada da intranet para públicos externos autorizados.'
  },
  {
    id: 'INF-009', disciplina: 'Informática', tema: 'Redes e Internet', gabarito: 'E',
    enunciado: 'O switch opera exclusivamente na camada física do modelo OSI e, por isso, replica todos os quadros recebidos para todas as suas portas, assim como o hub.',
    comentario: 'Errado. O switch opera tipicamente na camada de enlace (2) e encaminha os quadros apenas para a porta de destino, com base no endereço MAC. Quem replica para todas as portas é o hub (camada física).'
  },

  // ---------------- Navegadores e Correio Eletrônico ----------------
  {
    id: 'INF-010', disciplina: 'Informática', tema: 'Navegadores e E-mail', gabarito: 'E',
    enunciado: 'Ao utilizar a navegação anônima do navegador, o usuário impede que o seu provedor de acesso à Internet e o administrador da rede identifiquem os sítios visitados.',
    comentario: 'Errado. A navegação privativa apenas evita que histórico, cookies e dados de formulário fiquem gravados no próprio computador ao fechar a janela. O provedor, a rede e os sítios ainda podem registrar o acesso.'
  },
  {
    id: 'INF-011', disciplina: 'Informática', tema: 'Navegadores e E-mail', gabarito: 'C',
    enunciado: 'Os destinatários incluídos no campo Cco de uma mensagem de correio eletrônico não são visíveis aos demais destinatários da mensagem.',
    comentario: 'Correto. Cco (cópia carbono oculta / Bcc) oculta esses endereços dos demais destinatários.'
  },
  {
    id: 'INF-012', disciplina: 'Informática', tema: 'Navegadores e E-mail', gabarito: 'E',
    enunciado: 'O protocolo SMTP é empregado no recebimento de mensagens pelo programa cliente de correio eletrônico, ao passo que o POP3 é utilizado para o envio.',
    comentario: 'Errado. A relação está invertida: o SMTP é usado para envio (e transferência entre servidores); POP3 e IMAP são usados para recebimento.'
  },
  {
    id: 'INF-013', disciplina: 'Informática', tema: 'Navegadores e E-mail', gabarito: 'C',
    enunciado: 'O protocolo IMAP permite que as mensagens permaneçam armazenadas no servidor, o que possibilita acessá-las de forma sincronizada a partir de diferentes dispositivos.',
    comentario: 'Correto. O IMAP mantém as mensagens e as pastas no servidor, sincronizando o estado (lida, movida etc.) entre dispositivos. O POP3, em geral, baixa as mensagens para o dispositivo.'
  },
  {
    id: 'INF-014', disciplina: 'Informática', tema: 'Navegadores e E-mail', gabarito: 'C',
    enunciado: 'Cookies são pequenos arquivos de texto gravados pelo navegador a pedido dos sítios visitados e podem armazenar preferências do usuário e informações de sessão.',
    comentario: 'Correto. Cookies guardam dados como login de sessão, carrinho de compras e preferências. Também podem ser usados para rastreamento.'
  },
  {
    id: 'INF-015', disciplina: 'Informática', tema: 'Navegadores e E-mail', gabarito: 'C',
    enunciado: 'No Google Chrome, a combinação de teclas Ctrl + Shift + N abre uma nova janela de navegação anônima.',
    comentario: 'Correto. No Chrome (e no Edge), Ctrl + Shift + N abre a janela anônima/InPrivate. No Firefox, a janela privativa é aberta com Ctrl + Shift + P.'
  },
  {
    id: 'INF-016', disciplina: 'Informática', tema: 'Navegadores e E-mail', gabarito: 'E',
    enunciado: 'O cadeado exibido na barra de endereços do navegador atesta que o sítio acessado é legítimo e livre de golpes.',
    comentario: 'Errado. O cadeado indica apenas que a conexão é cifrada (HTTPS) e que há certificado válido para aquele domínio. Sítios fraudulentos também podem ter certificado, por isso é preciso conferir o endereço.'
  },

  // ---------------- Segurança da Informação ----------------
  {
    id: 'INF-017', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'E',
    enunciado: 'Vírus de computador é um programa capaz de se propagar automaticamente pelas redes, explorando vulnerabilidades, sem depender de arquivo hospedeiro nem de ação do usuário.',
    comentario: 'Errado. A descrição é de worm. O vírus depende de um hospedeiro (arquivo ou programa) e de sua execução para se propagar.'
  },
  {
    id: 'INF-018', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'C',
    enunciado: 'Ransomware é um tipo de código malicioso que torna inacessíveis os dados armazenados em um equipamento, geralmente por meio de criptografia, e exige pagamento de resgate para restabelecer o acesso.',
    comentario: 'Correto. Essa é a definição de ransomware. A melhor proteção contra ele são backups atualizados e mantidos desconectados.'
  },
  {
    id: 'INF-019', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'C',
    enunciado: 'Phishing é uma técnica de engenharia social em que o golpista tenta obter dados pessoais e financeiros da vítima por meio de mensagens e páginas falsas que se passam por instituições confiáveis.',
    comentario: 'Correto. O phishing explora a confiança do usuário, normalmente por e-mail, SMS (smishing) ou mensagens instantâneas, e direciona a vítima para páginas falsas.'
  },
  {
    id: 'INF-020', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'E',
    enunciado: 'Um firewall corretamente configurado é suficiente para impedir a infecção do computador por qualquer tipo de malware, o que torna dispensável o uso de antivírus.',
    comentario: 'Errado. O firewall filtra o tráfego de rede conforme regras, mas não analisa o conteúdo de arquivos em busca de códigos maliciosos. Firewall e antivírus são complementares.'
  },
  {
    id: 'INF-021', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'C',
    enunciado: 'Na criptografia assimétrica, uma mensagem cifrada com a chave pública do destinatário só pode ser decifrada com a chave privada correspondente.',
    comentario: 'Correto. A criptografia assimétrica usa um par de chaves. Cifrar com a chave pública do destinatário garante confidencialidade, pois só ele possui a chave privada.'
  },
  {
    id: 'INF-022', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'E',
    enunciado: 'A assinatura digital garante a confidencialidade do documento assinado, uma vez que seu conteúdo passa a ser cifrado com a chave privada do signatário.',
    comentario: 'Errado. A assinatura digital garante autenticidade, integridade e não repúdio, mas não a confidencialidade. Qualquer pessoa com a chave pública do signatário pode verificá-la, e o documento continua legível.'
  },
  {
    id: 'INF-023', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'C',
    enunciado: 'No backup incremental, são copiados apenas os arquivos criados ou alterados desde o último backup realizado, seja ele completo ou incremental.',
    comentario: 'Correto. O incremental copia o que mudou desde o último backup de qualquer tipo. A restauração exige o último completo e todos os incrementais posteriores.'
  },
  {
    id: 'INF-024', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'E',
    enunciado: 'O backup diferencial copia os arquivos alterados desde o último backup completo e, assim como o incremental, desmarca o atributo de arquivamento dos arquivos copiados.',
    comentario: 'Errado. O diferencial não desmarca o atributo de arquivamento. Por isso, cada diferencial acumula tudo o que mudou desde o último completo. Quem desmarca o atributo são o backup completo e o incremental.'
  },
  {
    id: 'INF-025', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'C',
    enunciado: 'Keylogger é um tipo de spyware capaz de capturar e armazenar as teclas digitadas pelo usuário no teclado do computador.',
    comentario: 'Correto. O keylogger é um spyware que registra o que é digitado. Há também o screenlogger, que captura a tela ou a região clicada.'
  },
  {
    id: 'INF-026', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'C',
    enunciado: 'Botnet é uma rede de computadores infectados controlados remotamente por um atacante, que pode utilizá-la para realizar ataques de negação de serviço distribuídos (DDoS).',
    comentario: 'Correto. Os computadores infectados (zumbis/bots) recebem comandos do controlador e podem ser usados em DDoS, envio de spam e outros ataques.'
  },
  {
    id: 'INF-027', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'C',
    enunciado: 'A autenticação de dois fatores combina elementos de categorias distintas, como algo que o usuário sabe (uma senha) e algo que ele possui (um token ou um celular).',
    comentario: 'Correto. Os fatores são: algo que você sabe, algo que você possui e algo que você é (biometria). Duas senhas não configuram dois fatores, porque são da mesma categoria.'
  },
  {
    id: 'INF-028', disciplina: 'Informática', tema: 'Segurança da Informação', gabarito: 'E',
    enunciado: 'O princípio da disponibilidade assegura que a informação somente seja acessada por pessoas autorizadas.',
    comentario: 'Errado. Esse é o princípio da confidencialidade. A disponibilidade garante que a informação esteja acessível aos usuários autorizados sempre que necessário.'
  },

  // ---------------- Sistemas Operacionais ----------------
  {
    id: 'INF-029', disciplina: 'Informática', tema: 'Sistemas Operacionais', gabarito: 'C',
    enunciado: 'No Windows 10, o atalho de teclado formado pela tecla do logotipo do Windows e a tecla L bloqueia a sessão do usuário.',
    comentario: 'Correto. Win + L bloqueia o computador. Outros atalhos frequentes: Win + E (Explorador de Arquivos), Win + D (mostrar área de trabalho).'
  },
  {
    id: 'INF-030', disciplina: 'Informática', tema: 'Sistemas Operacionais', gabarito: 'E',
    enunciado: 'No Windows, um arquivo excluído de uma unidade local com o atalho Shift + Delete é enviado para a Lixeira, de onde pode ser restaurado.',
    comentario: 'Errado. Shift + Delete exclui o arquivo permanentemente, sem passar pela Lixeira (após confirmação).'
  },
  {
    id: 'INF-031', disciplina: 'Informática', tema: 'Sistemas Operacionais', gabarito: 'C',
    enunciado: 'No Linux, o comando chmod 755 relatorio.sh concede permissões de leitura, gravação e execução ao proprietário e apenas de leitura e execução ao grupo e aos demais usuários.',
    comentario: 'Correto. 7 = rwx (4+2+1), 5 = r-x (4+1). Logo, 755 = rwxr-xr-x.'
  },
  {
    id: 'INF-032', disciplina: 'Informática', tema: 'Sistemas Operacionais', gabarito: 'E',
    enunciado: 'No Linux, o comando ls é utilizado para alterar o diretório de trabalho corrente.',
    comentario: 'Errado. O ls lista o conteúdo de diretórios. Para mudar de diretório usa-se cd. O pwd mostra o diretório atual.'
  },
  {
    id: 'INF-033', disciplina: 'Informática', tema: 'Sistemas Operacionais', gabarito: 'C',
    enunciado: 'O Linux é um sistema operacional de código aberto, e seu núcleo (kernel) é distribuído sob a licença GPL.',
    comentario: 'Correto. O kernel Linux é licenciado sob a GNU GPL (versão 2), que permite usar, estudar, modificar e redistribuir o código.'
  },
  {
    id: 'INF-034', disciplina: 'Informática', tema: 'Sistemas Operacionais', gabarito: 'E',
    enunciado: 'No Linux, os nomes de arquivos não diferenciam letras maiúsculas de minúsculas, de modo que Relatorio.txt e relatorio.txt referem-se ao mesmo arquivo.',
    comentario: 'Errado. Os sistemas de arquivos usuais do Linux são case sensitive: Relatorio.txt e relatorio.txt são arquivos distintos e podem coexistir no mesmo diretório.'
  },

  // ---------------- Editores e Planilhas ----------------
  {
    id: 'INF-035', disciplina: 'Informática', tema: 'Editores e Planilhas', gabarito: 'E',
    enunciado: 'No Microsoft Excel, a fórmula =SOMA(A1:A4) retorna a soma apenas dos valores contidos nas células A1 e A4.',
    comentario: 'Errado. O dois-pontos indica intervalo: soma A1, A2, A3 e A4. Para somar só A1 e A4 usa-se ponto e vírgula: =SOMA(A1;A4).'
  },
  {
    id: 'INF-036', disciplina: 'Informática', tema: 'Editores e Planilhas', gabarito: 'C',
    enunciado: 'No Excel, se a fórmula =$A$1*B1, digitada na célula C1, for copiada para a célula C2, a fórmula resultante em C2 será =$A$1*B2.',
    comentario: 'Correto. $A$1 é referência absoluta e não muda. B1 é relativa e, ao descer uma linha, passa a B2.'
  },
  {
    id: 'INF-037', disciplina: 'Informática', tema: 'Editores e Planilhas', gabarito: 'C',
    enunciado: 'No Excel, a fórmula =SE(A1>=7;"Aprovado";"Reprovado") retorna Aprovado quando o valor de A1 for exatamente igual a 7.',
    comentario: 'Correto. O operador >= inclui a igualdade, então 7 satisfaz a condição.'
  },
  {
    id: 'INF-038', disciplina: 'Informática', tema: 'Editores e Planilhas', gabarito: 'C',
    enunciado: 'No Microsoft Word em português, o atalho Ctrl + N aplica a formatação negrito ao texto selecionado.',
    comentario: 'Correto. Na versão em português: Ctrl + N (negrito), Ctrl + I (itálico), Ctrl + S (sublinhado). Na versão em inglês, os atalhos são Ctrl + B, I e U.'
  },
  {
    id: 'INF-039', disciplina: 'Informática', tema: 'Editores e Planilhas', gabarito: 'C',
    enunciado: 'Tanto no Microsoft Excel quanto no LibreOffice Calc, o caractere & pode ser utilizado como operador para concatenar textos em uma fórmula.',
    comentario: 'Correto. Ex.: ="PRF"&" 2026" resulta em "PRF 2026". Também existem funções como CONCAT/CONCATENAR.'
  },
  {
    id: 'INF-040', disciplina: 'Informática', tema: 'Editores e Planilhas', gabarito: 'E',
    enunciado: 'No Excel, a função PROCV procura um valor na última coluna do intervalo especificado e retorna o conteúdo da primeira coluna da mesma linha.',
    comentario: 'Errado. O PROCV procura o valor na primeira coluna do intervalo e retorna o valor da coluna indicada pelo número de índice, na mesma linha.'
  },
  {
    id: 'INF-041', disciplina: 'Informática', tema: 'Editores e Planilhas', gabarito: 'E',
    enunciado: 'O formato padrão de arquivos do LibreOffice Writer é o .docx, o mesmo utilizado pelo Microsoft Word.',
    comentario: 'Errado. O padrão do Writer é o .odt (OpenDocument Text). O Writer abre e salva .docx, mas esse não é seu formato nativo.'
  },

  // ---------------- Nuvem, Dados e IA ----------------
  {
    id: 'INF-042', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', gabarito: 'C',
    enunciado: 'No modelo de computação em nuvem SaaS (software como serviço), o usuário utiliza aplicações pela Internet sem precisar gerenciar a infraestrutura nem a plataforma subjacentes.',
    comentario: 'Correto. Exemplos de SaaS: webmail, editores on-line, armazenamento de arquivos. O provedor cuida de toda a pilha.'
  },
  {
    id: 'INF-043', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', gabarito: 'E',
    enunciado: 'No modelo IaaS (infraestrutura como serviço), o provedor de nuvem é o responsável por administrar o sistema operacional e as aplicações instaladas pelo cliente.',
    comentario: 'Errado. No IaaS, o provedor fornece recursos virtualizados (servidores, armazenamento, rede), e o cliente gerencia o sistema operacional, o middleware e as aplicações.'
  },
  {
    id: 'INF-044', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', gabarito: 'C',
    enunciado: 'Volume, velocidade e variedade estão entre as características tradicionalmente associadas ao conceito de big data.',
    comentario: 'Correto. São os 3 Vs originais. Modelos ampliados acrescentam veracidade e valor, entre outros.'
  },
  {
    id: 'INF-045', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', gabarito: 'C',
    enunciado: 'No aprendizado de máquina supervisionado, o modelo é treinado a partir de dados rotulados, isto é, de exemplos cujas saídas esperadas são conhecidas.',
    comentario: 'Correto. Classificação e regressão são tarefas típicas de aprendizado supervisionado.'
  },
  {
    id: 'INF-046', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', gabarito: 'E',
    enunciado: 'A clusterização é uma técnica de aprendizado supervisionado que exige que cada registro possua um rótulo previamente definido.',
    comentario: 'Errado. A clusterização (agrupamento, ex.: k-means) é uma técnica não supervisionada: agrupa os dados por similaridade sem rótulos prévios.'
  },
  {
    id: 'INF-047', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', gabarito: 'C',
    enunciado: 'A mineração de dados busca identificar padrões, tendências e relações não explícitas em grandes volumes de dados.',
    comentario: 'Correto. O data mining aplica técnicas estatísticas e de aprendizado de máquina (associação, classificação, agrupamento) para extrair conhecimento útil.'
  },
  {
    id: 'INF-048', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', gabarito: 'C',
    enunciado: 'Na linguagem Python, a indentação tem função sintática e delimita blocos de código, como os de estruturas condicionais e de repetição.',
    comentario: 'Correto. O Python não usa chaves para delimitar blocos: a indentação é obrigatória, e um erro nela gera IndentationError.'
  },
  {
    id: 'INF-049', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', gabarito: 'E',
    enunciado: 'Em Python, as listas são imutáveis, ao passo que as tuplas podem ter seus elementos alterados após a criação.',
    comentario: 'Errado. É o contrário: listas ([ ]) são mutáveis e tuplas (( )) são imutáveis.'
  },
  {
    id: 'INF-050', disciplina: 'Informática', tema: 'Nuvem, Dados e IA', gabarito: 'C',
    enunciado: 'Em Python 3, o resultado da expressão 7 // 2 é 3.',
    comentario: 'Correto. O operador // faz a divisão inteira (com arredondamento para baixo). Já 7 / 2 resulta em 3.5, e 7 % 2 resulta em 1.'
  },
  {
    id: 'INF-051', disciplina: 'Informática', tema: 'Bancos de Dados', gabarito: 'E',
    enunciado: 'Em um banco de dados relacional, a chave primária de uma tabela pode conter valores repetidos, desde que nenhum deles seja nulo.',
    comentario: 'Errado. A chave primária deve ser única e não nula, pois identifica cada registro da tabela.'
  }
]);

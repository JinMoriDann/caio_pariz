import PrivacyLayout from "./PrivacyLayout";

export function OrbitaSucataDeleteAccount() {
  return (
    <PrivacyLayout product="Órbita de Sucata" documentType="Exclusão de conta">
      <h1>{"Excluir conta e dados — Órbita de Sucata"}</h1>
      <p>{"Última atualização: "}<strong>{"24 de outubro de 2026"}</strong>{"."}</p>
      <p>{"Responsável pelo jogo: "}<strong>{"Caio de Andrade Pariz"}</strong>{". Contato: "}<strong><a href="mailto:caio.pariz2000@gmail.com">{"caio.pariz2000@gmail.com"}</a></strong>{"."}</p>
      <p>{"Você pode solicitar a exclusão pelo aplicativo ou por e-mail, inclusive se não tiver mais acesso ao jogo. Pais e responsáveis também podem entrar em contato sobre os dados de uma criança sob sua responsabilidade."}</p>
      <h2>{"Pelo aplicativo"}</h2>
      <ol><li>{"Abra "}<strong>{"Órbita de Sucata → Configurações"}</strong>{"."}</li><li>{"Entre na conta Google usada no jogo, se ainda não estiver conectado."}</li><li>{"Toque em "}<strong>{"Excluir conta e dados online"}</strong>{"."}</li><li>{"Leia a confirmação e autentique novamente a mesma conta Google."}</li><li>{"Aguarde a mensagem de conclusão. É necessária conexão com a internet."}</li></ol>
      <p>{"Se aparecer uma falha ou "}<strong>{"Concluir exclusão"}</strong>{", o pedido ainda está incompleto. Conecte-se novamente e use essa opção. O jogo suspende a sincronização enquanto a exclusão estiver pendente; ele não declara concluído um pedido que falhou."}</p>
      <h2>{"Sem acesso ao aplicativo"}</h2>
      <p>{"Envie um e-mail para "}<strong><a href="mailto:caio.pariz2000@gmail.com?subject=%C3%93rbita%20de%20Sucata%20%E2%80%94%20exclus%C3%A3o%20de%20conta">{"caio.pariz2000@gmail.com"}</a></strong>{" com o assunto "}<strong>{"“Órbita de Sucata — exclusão de conta”"}</strong>{"."}</p>
      <p>{"Informe o e-mail da conta Google utilizada no jogo e que deseja excluir a conta e seus dados online. Se souber, inclua o identificador técnico da conta; ele não é obrigatório para enviar o pedido. Em pedidos feitos por responsáveis, informe essa condição, sem enviar documentos ou dados adicionais da criança por iniciativa própria."}</p>
      <p>{"O pedido será analisado para confirmar a titularidade ou representação antes da exclusão. Poderemos pedir somente as informações necessárias para essa verificação. Nunca envie senha Google, códigos de autenticação, número de cartão ou senha bancária."}</p>
      <p>{"O botão de e-mail abre o aplicativo de correio do seu aparelho: "}<strong>{"o pedido só é enviado quando você efetivamente envia a mensagem"}</strong>{". Se não houver um aplicativo configurado, copie o endereço acima e use seu serviço de e-mail. O envio não significa que a exclusão já foi concluída; o atendimento ocorrerá pelo mesmo canal, nos prazos legais aplicáveis."}</p>
      <h2>{"O que é excluído"}</h2>
      <ul><li>{"Conta de autenticação do Órbita de Sucata no Firebase."}</li><li>{"Conquistas vinculadas à conta e armazenadas no Firebase."}</li><li>{"Recordes e sessões do ranking mundial."}</li><li>{"Resultados dos desafios diários e contribuições comunitárias vinculados à conta."}</li><li>{"Registros detalhados das partidas vinculados à conta."}</li></ul>
      <h2>{"O que permanece ou precisa de outra ação"}</h2>
      <ul><li><strong>{"Progresso no aparelho:"}</strong>{" use "}<strong>{"Configurações → Resetar progresso"}</strong>{" para apagá-lo. Desinstalar não substitui o pedido de exclusão online."}</li><li><strong>{"Backups:"}</strong>{" exclua separadamente os arquivos exportados e administre os backups nas configurações do Android ou do serviço em que os guardou."}</li><li><strong>{"Conta Google, conquistas do Play Games e compras da Google Play:"}</strong>{" são independentes da conta do jogo. Sua gestão segue os controles e políticas do Google; a exclusão no jogo não gera reembolso."}</li><li><strong>{"Registro mínimo de segurança:"}</strong>{" permanece o identificador técnico da conta com a data do pedido, sem nome nem e-mail, para impedir novos envios por sessões antigas. Esse registro não tem hoje prazo fixo de remoção automática; você pode pedir esclarecimentos ou revisão da conservação por e-mail."}</li><li><strong>{"Estatísticas opcionais sem identificador de conta:"}</strong>{" eventos eventualmente registrados não podem ser localizados por e-mail ou UID, pois esses campos não fazem parte deles. A versão atual não define expiração automática desses eventos."}</li><li><strong>{"Registros do atendimento e obrigações legais:"}</strong>{" podem ser conservados conforme a necessidade do pedido e a legislação aplicável."}</li></ul>
      <p>{"Se você mantiver o progresso local e criar ou conectar uma nova conta, novas sincronizações poderão gerar novos registros. Para remover tanto a cópia online quanto a local, conclua a exclusão e também resete o progresso do aparelho."}</p>
      <p>{"Mais informações na "}<a href="https://jinmoridann.github.io/caio_pariz/#/privacy/orbitadesucata">{"Política de Privacidade do Órbita de Sucata"}</a>{"."}</p>
    </PrivacyLayout>
  );
}

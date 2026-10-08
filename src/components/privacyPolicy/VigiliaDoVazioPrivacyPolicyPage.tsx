export function VigiliaDoVazioPrivacyPolicy() {
  const sectionTitle = { color: "#0f172a", marginTop: 32 };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #061018 0%, #08131d 100%)",
        padding: "48px 16px",
      }}
    >
      <article
        style={{
          maxWidth: 920,
          margin: "0 auto",
          background: "#ffffff",
          color: "#111827",
          borderRadius: 24,
          padding: "32px 24px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.08)",
          lineHeight: 1.75,
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: 8, fontSize: "2.2rem", color: "#0f172a" }}>
          Política de Privacidade — Vigília do Vazio
        </h1>
        <p style={{ marginTop: 0, color: "#475569", fontSize: "0.98rem" }}>
          Última atualização: 08/10/2026
        </p>
        <p>
          Esta Política de Privacidade explica como o jogo <strong>Vigília do Vazio</strong>,
          desenvolvido pela Caelus, trata informações relacionadas ao seu uso.
        </p>

        <h2 style={sectionTitle}>1. Sobre o jogo</h2>
        <p>
          Vigília do Vazio é um jogo de entretenimento. Atualmente, não exige cadastro,
          criação de conta nem fornecimento de nome, e-mail ou outros dados pessoais para jogar.
        </p>

        <h2 style={sectionTitle}>2. Dados coletados pelo desenvolvedor</h2>
        <p>
          O jogo não coleta diretamente dados pessoais para envio ou armazenamento em
          servidores próprios. Informações necessárias à partida, como progresso e
          preferências, podem ser guardadas localmente no dispositivo.
        </p>

        <h2 style={sectionTitle}>3. Banner de anúncios e serviços de terceiros</h2>
        <p>
          O jogo poderá exibir um banner publicitário por meio do <strong>Google AdMob</strong>.
          Quando o serviço estiver ativo, o Google e seus parceiros poderão tratar dados
          técnicos, como identificadores do dispositivo, endereço IP, informações sobre
          interações com anúncios e dados de diagnóstico, para veiculação, medição,
          prevenção de fraudes e, conforme as configurações e permissões aplicáveis,
          personalização dos anúncios.
        </p>
        <p>
          Esse tratamento é realizado por terceiros conforme suas próprias políticas.
          Consulte a{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Política de Privacidade do Google
          </a>{" "}
          e as{" "}
          <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">
            orientações de privacidade do Google AdMob
          </a>.
        </p>

        <h2 style={sectionTitle}>4. Compartilhamento de informações</h2>
        <p>
          O desenvolvedor não vende dados pessoais dos jogadores. O eventual tratamento
          de informações pelo serviço de anúncios ocorre de acordo com as práticas do
          respectivo fornecedor, descritas acima.
        </p>

        <h2 style={sectionTitle}>5. Armazenamento e controle</h2>
        <p>
          Dados de progresso salvos localmente podem ser removidos ao apagar os dados
          do aplicativo ou desinstalá-lo, conforme as opções do dispositivo. Para
          preferências de publicidade, utilize os controles de privacidade disponíveis
          no dispositivo e nas configurações do Google.
        </p>

        <h2 style={sectionTitle}>6. Crianças e privacidade</h2>
        <p>
          O uso de publicidade deverá respeitar as regras da plataforma e a classificação
          etária do jogo. Caso sejam implementados recursos que alterem o tratamento de
          dados, esta política será atualizada.
        </p>

        <h2 style={sectionTitle}>7. Contato</h2>
        <p>
          Para dúvidas sobre privacidade, escreva para{" "}
          <a href="mailto:caio.pariz2000@gmail.com">caio.pariz2000@gmail.com</a>.
        </p>

        <h2 style={sectionTitle}>8. Atualizações desta política</h2>
        <p>
          Esta política pode ser revisada quando o jogo receber novas funcionalidades,
          serviços ou alterações nas práticas de tratamento de dados. A data da última
          atualização será indicada nesta página.
        </p>

        <p style={{ marginTop: 36 }}>
          <a href="#/">Voltar ao site</a>
        </p>
      </article>
    </main>
  );
}

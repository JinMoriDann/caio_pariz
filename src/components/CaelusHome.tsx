import { useState } from "react";
import "./CaelusHome.css";

function Constellation({ small = false }: { small?: boolean }) {
  return (
    <svg
      className={small ? "mark" : "constellation"}
      viewBox="0 0 420 460"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M92 365 170 263 220 232 252 100 322 61"
        stroke="currentColor"
        strokeWidth={small ? 9 : 1}
      />
      {[
        [92, 365],
        [170, 263],
        [220, 232],
        [252, 100],
        [322, 61],
      ].map(([x, y], i) => (
        <g key={x}>
          <circle cx={x} cy={y} r={small ? 13 : 4} fill="currentColor" />
          {!small && (
            <>
              <circle
                cx={x}
                cy={y}
                r="13"
                stroke="currentColor"
                opacity=".25"
              />
              <path
                d={`M${x - 20} ${y}h40 M${x} ${y - 20}v40`}
                stroke="currentColor"
                opacity=".45"
              />
              <text
                x={x + 23}
                y={y - 16}
                fill="currentColor"
                stroke="none"
                fontSize="10"
              >
                {["α", "β", "γ", "δ", "ε"][i]}
              </text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

export default function CaelusHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quiet, setQuiet] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className={`caelus ${quiet ? "quiet" : ""}`}>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header wrap">
        <a href="#inicio" className="brand" aria-label="Caelus — início">
          <Constellation small />
          <span>
            CAELUS<small>INDIE GAME STUDIO</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Fechar" : "Menu"}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? "open" : ""}
          aria-label="Navegação principal"
        >
          <a href="#jogos" onClick={closeMenu}>
            Nossos jogos
          </a>
          <a href="#estudio" onClick={closeMenu}>
            O estúdio
          </a>
          <a href="#contato" onClick={closeMenu}>
            Vamos conversar <span>↗</span>
          </a>
        </nav>
      </header>
      <main id="conteudo">
        <section className="hero wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> UM ESTÚDIO INDIE. UM UNIVERSO DE
              IDEIAS.
            </p>
            <h1>
              Pequenas estrelas.
              <br />
              Grandes <em>universos.</em>
            </h1>
            <p className="intro">
              Criamos jogos para quem olha para o céu
              <br className="desktop-break" /> e imagina o que existe além.
            </p>
            <a className="button light" href="#jogos">
              Explore nossos jogos <span>↗</span>
            </a>
            <div className="hero-note">
              <span>FEITO NO BRASIL</span>
              <span>COM CURIOSIDADE, SEM LIMITES.</span>
            </div>
          </div>
          <div className="star-map">
            <div className="map-ring ring-one" />
            <div className="map-ring ring-two" />
            <div className="map-cross" />
            <Constellation />
            <span className="map-label">CAELUS / MAPA CELESTE</span>
            <span className="map-coordinate">IMAGINAR É O PRIMEIRO PASSO.</span>
            <span className="star stray-one">✦</span>
            <span className="star stray-two">+</span>
          </div>
          <div className="hero-bottom">
            <a href="#jogos">
              ROLE PARA EXPLORAR <span>↓</span>
            </a>
            <button aria-pressed={quiet} onClick={() => setQuiet(!quiet)}>
              {quiet ? "✧ Ativar movimento" : "✦ Pausar movimento"}
            </button>
          </div>
        </section>
        <section className="games wrap" id="jogos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / NOSSOS JOGOS</p>
              <h2>Um novo mundo em órbita.</h2>
            </div>
            <span className="section-aside">
              IDEIAS QUE GANHAM VIDA <span>↙</span>
            </span>
          </div>
          <article className="featured-game">
            <div className="game-art">
              <img
                src={`${import.meta.env.BASE_URL}orbita-de-sucata.png`}
                alt="Mariposa, nave de Órbita de Sucata, cercada por um anel dourado e fragmentos espaciais"
                width="1024"
                height="1024"
                loading="lazy"
              />
              <span className="art-caption">
                ESTAÇÃO 07 · UM ENDEREÇO NO ESCURO
              </span>
            </div>
            <div className="game-copy">
              <p className="eyebrow">
                <span className="status-dot" /> EM PRODUÇÃO
              </p>
              <h3>
                Órbita
                <br />
                de <em>Sucata.</em>
              </h3>
              <p className="game-hook">O que sobrou pode ser um novo começo.</p>
              <p>
                Depois da Grande Deriva, você e SETE têm uma missão: devolver um
                endereço à Estação 07. Pilote entre órbitas, recupere materiais
                e transforme destroços em um lugar para voltar.
              </p>
              <div className="tags">
                <span>ARCADE INCREMENTAL</span>
                <span>EXPLORAÇÃO ESPACIAL</span>
                <span>ANDROID</span>
              </div>
              <a className="text-link" href="#orbita">
                Conheça o universo <span>↗</span>
              </a>
            </div>
          </article>
          <div className="game-details" id="orbita">
            <div>
              <span className="detail-number">01 — EXPLORE</span>
              <h3>Um toque. Outra órbita.</h3>
              <p>
                Encontre seu caminho entre perigos, materiais raros e regiões
                cada vez mais profundas.
              </p>
            </div>
            <div>
              <span className="detail-number">02 — RECONSTRUA</span>
              <h3>Da sucata ao lar.</h3>
              <p>
                Melhore sua nave e faça o Espaçoporto crescer a cada retorno de
                uma expedição.
              </p>
            </div>
            <div>
              <span className="detail-number">03 — DESCUBRA</span>
              <h3>O vazio tem histórias.</h3>
              <p>
                Entre registros e conversas com SETE, descubra os ecos que a
                Grande Deriva deixou.
              </p>
            </div>
          </div>
        </section>
        <section className="trailer-section wrap" aria-labelledby="trailer-title">
          <div className="trailer-copy">
            <p className="eyebrow">TRANSMISSÃO RECEBIDA / ÓRBITA DE SUCATA</p>
            <h2 id="trailer-title">Um pequeno sinal.<br /><em>Um universo inteiro.</em></h2>
            <p>Veja Órbita de Sucata em movimento. Dê o play no trailer e embarque nessa órbita.</p>
            <a className="text-link" href="https://www.youtube.com/shorts/oNJRdrRfhT0" target="_blank" rel="noreferrer">Assistir no YouTube <span>↗</span></a>
          </div>
          <div className="trailer-frame">
            <iframe src="https://www.youtube-nocookie.com/embed/oNJRdrRfhT0" title="Trailer vertical de Órbita de Sucata" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
          </div>
        </section>
        <section className="vigilia-section wrap" aria-labelledby="vigilia-title">
          <div className="vigilia-sky" aria-hidden="true"><div className="void-ring" /><span>✦</span><small>CAELUS / VIGÍLIA DO VAZIO</small></div>
          <div className="vigilia-copy">
            <p className="eyebrow">OUTRO UNIVERSO CAELUS</p>
            <h2 id="vigilia-title">Vigília<br />do <em>Vazio.</em></h2>
            <p>Nosso céu tem mais de uma história. Vigília do Vazio também faz parte do universo de jogos da Caelus.</p>
            <a className="text-link" href="https://www.instagram.com/caelussys/" target="_blank" rel="noreferrer">Acompanhe a Caelus <span>↗</span></a>
            <a className="vigilia-privacy" href="#/privacy/vigiliadovazio">Política de privacidade ↗</a>
          </div>
        </section>
        <section className="studio wrap" id="estudio">
          <div>
            <p className="eyebrow">02 / A CAELUS</p>
            <h2>
              A curiosidade
              <br />é nossa <em>bússola.</em>
            </h2>
          </div>
          <div className="studio-copy">
            <span className="tiny-star">✳</span>
            <p>
              Somos uma produtora independente de jogos. Um pequeno ponto no
              mapa, com vontade de criar universos que mereçam ser explorados.
            </p>
            <p>
              Na Caelus, tecnologia e imaginação se encontram para transformar
              ideias em experiências. Nosso próximo horizonte está nos games — e
              Órbita de Sucata é parte dessa jornada.
            </p>
            <a
              className="text-link"
              href="https://www.instagram.com/caelussys/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram @caelussys <span>↗</span>
            </a>
          </div>
        </section>
        <section className="archive wrap">
          <details>
            <summary>
              <span>
                OUTRAS COORDENADAS{" "}
                <small>Projetos que também fazem parte da nossa história</small>
              </span>
              <span className="expand">+</span>
            </summary>
            <div className="archive-links">
              <a
                href="https://jinmoridann.github.io/rpginatab/"
                target="_blank"
                rel="noreferrer"
              >
                RPG In A Tab ↗
              </a>
              <a
                href="https://jinmoridann.github.io/SosPet/"
                target="_blank"
                rel="noreferrer"
              >
                SOSPet ↗
              </a>
              <a href="#/privacy/orcafacil">Orçamento Fácil · Privacidade ↗</a>
            </div>
          </details>
        </section>
        <section className="contact-section wrap" id="contato">
          <p className="eyebrow">03 / ABRA UM CANAL</p>
          <h2>
            Todo universo começa
            <br />
            com um <em>olá.</em> <span>↗</span>
          </h2>
          <div className="contact-bottom">
            <p>
              Ideias, parcerias ou uma boa conversa sobre jogos.
              <br />
              Nosso canal está aberto.
            </p>
            <a className="button light" href="mailto:caio.pariz2000@gmail.com">
              Fale com a Caelus <span>↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div className="footer-top">
          <a className="brand" href="#inicio">
            <Constellation small />
            <span>
              CAELUS<small>JOGOS FEITOS PARA IR ALÉM.</small>
            </span>
          </a>
          <div className="privacy-links">
            <span>PRIVACIDADE</span>
            <a href="#/privacy/orbitadesucata">Órbita de Sucata</a>
            <a href="#/privacy/orcafacil">Orçamento Fácil</a>
            <a href="#/privacy/vigiliadovazio">Vigília do Vazio</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Caelus · Produtora de jogos indie
          </span>
          <span>DO BRASIL PARA OUTROS UNIVERSOS ✦</span>
        </div>
      </footer>
    </div>
  );
}

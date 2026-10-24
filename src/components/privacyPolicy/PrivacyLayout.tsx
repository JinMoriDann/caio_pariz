import { Children, cloneElement, isValidElement, useEffect, type ReactNode } from "react";
import "./PrivacyLayout.css";

export default function PrivacyLayout({ product, children }: { product: string; children: ReactNode }) {
  const sections: { id: string; title: ReactNode }[] = [];
  const content = Children.map(children, child => {
    if (isValidElement<{ children: ReactNode; id?: string }>(child) && child.type === "h2") {
      const id = `policy-section-${sections.length + 1}`;
      sections.push({ id, title: child.props.children });
      return cloneElement(child, { id });
    }
    return child;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = `${product} · Privacidade | Caelus`;
    return () => { document.title = previous; };
  }, [product]);
  return (
    <div className="privacy-page">
      <button className="privacy-skip" onClick={() => document.getElementById("policy-document")?.focus()}>Ir para o documento</button>
      <header className="privacy-header">
        <a href="#/" className="privacy-brand">✦ CAELUS <small>UNIVERSOS INDEPENDENTES</small></a>
        <a href="#/">← Voltar ao estúdio</a>
      </header>
      <main>
        <section className="privacy-intro">
          <p>CAELUS / CENTRAL DE PRIVACIDADE</p>
          <h1>Clareza em cada<br /><em>coordenada.</em></h1>
          <span>Informações sobre privacidade, reunidas em um só lugar.</span>
          <div className="privacy-orbit" aria-hidden="true">✦</div>
        </section>
        <nav className="privacy-products" aria-label="Políticas por projeto">
          {[["Órbita de Sucata", "orbitadesucata"], ["Vigília do Vazio", "vigiliadovazio"], ["Orçamento Fácil", "orcafacil"]].map(([name, route]) => (
            <a key={route} href={`#/privacy/${route}`} aria-current={product === name ? "page" : undefined}>{name}<span>↗</span></a>
          ))}
        </nav>
        <div className="privacy-layout">
          <aside className="privacy-index">
            <p>NESTE DOCUMENTO</p>
            <nav aria-label="Seções da política">{sections.map(section => (
              <button key={section.id} onClick={() => {
                const target = document.getElementById(section.id);
                target?.scrollIntoView({ block: "start" });
                target?.setAttribute("tabindex", "-1");
                target?.focus({ preventScroll: true });
              }}>{section.title}</button>
            ))}</nav>
            <a href="mailto:caio.pariz2000@gmail.com">Fale com a Caelus ↗</a>
          </aside>
          <article className="privacy-document" id="policy-document" tabIndex={-1}>{content}</article>
        </div>
      </main>
      <footer className="privacy-footer"><span>✦ CAELUS · Pequenas estrelas. Grandes universos.</span><a href="#/">Voltar ao início ↑</a></footer>
    </div>
  );
}

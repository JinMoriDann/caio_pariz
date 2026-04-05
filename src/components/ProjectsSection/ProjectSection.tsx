import "./ProjectSection.css";
import { motion } from "framer-motion";

const projects = [
    {
        title: "RPG In A Tab",
        description:
            "Sistema completo de RPG online com foco em narrativa, combate e experiência multiplayer em tempo real.",
        link: "https://jinmoridann.github.io/rpginatab/",
        tag: "GAME SYSTEM",
    },
    {
        title: "SOSPet",
        description:
            "Plataforma para auxílio e resgate de animais, conectando pessoas e organizações de forma simples e eficiente.",
        link: "https://jinmoridann.github.io/SosPet/",
        tag: "SOCIAL PLATFORM",
    },
    {
        title: "Orçamento Fácil",
        description:
            "Sistema prático para geração de orçamentos rápidos voltado para pequenos negócios e prestadores de serviço.",
        link: "https://produto.mercadolivre.com.br/MLB-4478748387-orcamento-facil-orcamentos-rapidos-para-pequenos-negocios-_JM",
        tag: "BUSINESS TOOL",
    },
];

export default function ProjectsSection() {
    return (
        <section className="projects">
            <div className="projects__header">
                <span>PROJETOS</span>
                <h2>Soluções que já existem no mundo real</h2>
            </div>

            <div className="projects__grid">
                {projects.map((project, index) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="project-card__glow" />

                        <div className="project-card__content">
                            <span className="project-card__tag">{project.tag}</span>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <span className="project-card__cta">
                                Acessar projeto →
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
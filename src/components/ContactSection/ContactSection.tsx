import "./ContactSection.css";
import { motion } from "framer-motion";

export default function ContactSection() {
  const whatsappNumber = "5519997003291";

  const message = encodeURIComponent(
    "Olá, vim pelo site da InBlock e gostaria de falar sobre um projeto."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="contact" id="contato">
      <div className="contact__container">
        <motion.div
          className="contact__left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact__tag">CONTATO</span>

          <h2>
            Vamos tirar sua ideia do papel e transformar em sistema
          </h2>

          <p>
            Se você precisa de um sistema, automação ou solução digital sob medida,
            me chama. A gente entende seu problema e constrói algo sólido de verdade.
          </p>

          <div className="contact__info">
            <div>
              <strong>Email</strong>
              <a href="mailto:caio.pariz2000@gmail.com">
                caio.pariz2000@gmail.com
              </a>
            </div>

            <div>
              <strong>Localização</strong>
              <span>Santa Cruz da Conceição - SP</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact__right"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            className="contact__whatsapp"
          >
            Falar no WhatsApp
          </a>

          <div className="contact__note">
            Resposta geralmente rápida ⚡
          </div>
        </motion.div>
      </div>
    </section>
  );
}
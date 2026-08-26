function Contact() {
  return (
    <section className="contact" id="contacto">

      <div className="contact-container">

        <div className="contact-info">

          <h2>Contacto</h2>

          <p className="contact-subtitle">
            Estamos para ayudarte a encontrar el repuesto que necesitas.
          </p>

          <div className="contact-item">
            <span className="contact-icon">📍</span>

            <div>
              <h3>Dirección</h3>
              <p>Ferrari 167, Lo Espejo, Santiago</p>
            </div>
          </div>


          <div className="contact-item">
            <span className="contact-icon">💬</span>

            <div>
              <h3>WhatsApp</h3>

              <p>
                <a
                  href="https://wa.me/56990516112"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +56 9 9051 6112
                </a>

                <br />

                <a
                  href="https://wa.me/56983603852"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +56 9 8360 3852
                </a>
              </p>

            </div>
          </div>


          <div className="contact-item">
            <span className="contact-icon">✉️</span>

            <div>
              <h3>Correo</h3>

              <p>
                <a href="mailto:partsmack@gmail.com">
                  partsmack@gmail.com
                </a>
              </p>
            </div>
          </div>


          <div className="contact-item">
            <span className="contact-icon">🕐</span>

            <div>
              <h3>Horario de atención</h3>

              <p>
                Lunes a jueves: 09:00 – 18:00
                <br />
                Viernes: 09:00 – 17:00
                <br />
                Sábado y Domingo: Cerrado              </p>
            </div>
          </div>

        </div>


        <div className="contact-map">

          <iframe
            title="Ubicación JLB Repuestos"
            src="https://www.google.com/maps?q=Ferrari+167,+Lo+Espejo,+Santiago,+Chile&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Contact;
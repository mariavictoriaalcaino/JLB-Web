import {
  Award,
  Truck,
  Wrench,
  MessageCircle,
} from "lucide-react";

function Features() {
  return (
   <section className="features" id="porque-jlb">
      <div className="container">

        <h2>¿Por qué elegir JLB?</h2>

        <p className="subtitle">
          Más de 30 años siendo un referente en la importación y venta de
          repuestos para camiones Mack en Chile.
        </p>

        <div className="features-grid">

          <div className="feature">
            <Award className="feature-icon" />
            <h3>Más de 30 años</h3>
            <p>
              Experiencia atendiendo empresas de transporte y particulares.
            </p>
          </div>

          <div className="feature">
            <Truck className="feature-icon" />
            <h3>Despachos a Todo Chile</h3>
            <p>
              Enviamos repuestos de forma rápida y segura a cualquier región.
            </p>
          </div>

          <div className="feature">
            <Wrench className="feature-icon" />
            <h3>Gran Stock</h3>
            <p>
              Amplia disponibilidad de repuestos originales y alternativos.
            </p>
          </div>

          <div className="feature">
            <MessageCircle className="feature-icon" />
            <h3>Atención Personalizada</h3>
            <p>
              Te ayudamos a encontrar el repuesto correcto para tu camión.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;
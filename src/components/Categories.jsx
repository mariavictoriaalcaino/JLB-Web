import accesorios from "../assets/products/accesorios.png";
import amortiguacion from "../assets/products/AMORTIGUACION.png";
import cabina from "../assets/products/CABINA.png";
import cajaFuller from "../assets/products/CAJA FULLER.png";
import cajaMaxitorque from "../assets/products/CAJA MAXITORQUE.png";
import diferencialSuspension from "../assets/products/DIFERENCIAL Y SUSPENSIÓN.png";
import kitAjusteMotor from "../assets/products/KIT AJUSTE MOTOR.png";
import motor from "../assets/products/MOTOR.png";
import valvulaSensores from "../assets/products/VALVULAS Y SENSORES.png";

import products from "../data/products";
import pai from "../assets/pai.png";


function normalizeCategory(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toUpperCase();
}


function Categories({ onSelectCategory }) {

  const categoryImages = {
    "ACCESORIOS": accesorios,
    "AMORTIGUACION": amortiguacion,
    "CABINA": cabina,
    "CAJA FULLER": cajaFuller,
    "CAJA MAXITORQUE": cajaMaxitorque,
    "DIFERENCIAL Y SUSPENSION": diferencialSuspension,
    "KIT AJUSTE MOTOR": kitAjusteMotor,
    "MOTOR": motor,
    "VALVULAS Y SENSORES": valvulaSensores,
  };


  const categories = [
  ...new Set(
    products
      .map((product) => product.categoria)
      .filter(Boolean)
  ),
].sort((a, b) => a.localeCompare(b, "es"));

  return (
    <section className="categories" id="catalogo">

      <div className="categories-header">

        <h2>Catálogo</h2>

        <p>
          Encuentra rápidamente el repuesto que necesitas.
        </p>

      </div>


      <div className="categories-grid">

        {categories.map((category) => {

          const image =
            categoryImages[normalizeCategory(category)];


          return (
            <button
              key={category}
              type="button"
              className="category-card"
              onClick={() => onSelectCategory(category)}
            >

              <div className="category-image">

                {image && (
                  <img
                    src={image}
                    alt={category}
                  />
                )}

              </div>

              <h3>{category}</h3>

              <span>
                Ver productos →
              </span>

            </button>
          );

        })}

      </div>


      <div className="pai-logo">

        <img
          src={pai}
          alt="PAi Industries"
        />

      </div>


    </section>
  );
}


export default Categories;
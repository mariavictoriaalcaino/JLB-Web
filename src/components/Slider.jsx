import { useState } from "react";

import camion1 from "../assets/slider/camion1.png";
import camion2 from "../assets/slider/camion2.jpeg";
import camion3 from "../assets/slider/camion3.jpeg";

function Slider() {
  const slides = [
    {
      image: camion1,
      title: "Repuestos para Camiones Mack",
      text: "Calidad y confianza para mantener tu camión siempre en movimiento.",
    },
    {
      image: camion2,
      title: "Despachamos a Todo Chile",
      text: "Enviamos tus repuestos de forma rápida y segura a cualquier región.",
    },
    {
      image: camion3,
      title: "Repuestos Nuevos y Usados",
      text: "Encuentra la alternativa que necesitas para tu camión.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const siguiente = () => {
    setCurrent((current + 1) % slides.length);
  };

  const anterior = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <section className="slider">

      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="slider-image"
      />

      <div className="slider-overlay"></div>

      <button
        className="slider-arrow slider-prev"
        onClick={anterior}
      >
        ‹
      </button>

      <div className="slider-content">
        <h2>{slides[current].title}</h2>
        <p>{slides[current].text}</p>
      </div>

      <button
        className="slider-arrow slider-next"
        onClick={siguiente}
      >
        ›
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>

    </section>
  );
}

export default Slider;
import { useState, useEffect } from "react";

import camion1 from "../assets/slider/camion1.png";
import camion2 from "../assets/slider/camion2.jpeg";
import camion3 from "../assets/slider/camion3.jpeg";

function Hero() {
  const slides = [
    {
      image: camion1,
      title: (
        <>
          IMPORTADORA DE
          <br />
          REPUESTOS MACK
        </>
      ),
      text: "Más de 30 años entregando calidad y confianza a todo Chile.",
    },
    {
      image: camion2,
      title: (
        <>
          DESPACHAMOS
          <br />
          A TODO CHILE
        </>
      ),
      text: "Enviamos tus repuestos de forma rápida y segura a cualquier región.",
    },
    {
      image: camion3,
      title: (
        <>
          REPUESTOS NUEVOS
          <br />
          Y USADOS
        </>
      ),
      text: "Encuentra la alternativa que necesitas para tu camión.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const siguiente = () => {
    setCurrent((current) => (current + 1) % slides.length);
  };

  const anterior = () => {
    setCurrent((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >

     

      <div className="hero-overlay"></div>

      <button
        className="hero-arrow hero-prev"
        onClick={anterior}
      >
        ‹
      </button>

      <div className="hero-content">

  <h1 key={`title-${current}`}>
    {slides[current].title}
  </h1>

  <p key={`text-${current}`}>
    {slides[current].text}
  </p>

        <div className="hero-buttons">

          <a
            href="https://wa.me/56990516112"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            Ventas 1
          </a>

          <a
            href="https://wa.me/56983603852"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            Ventas 2
          </a>

        </div>

      </div>

      <button
        className="hero-arrow hero-next"
        onClick={siguiente}
      >
        ›
      </button>

      <div className="hero-dots">

        {slides.map((_, index) => (
          <button
            key={index}
            className={
              current === index
                ? "hero-dot active"
                : "hero-dot"
            }
            onClick={() => setCurrent(index)}
          ></button>
        ))}

      </div>

    </section>
  );
}

export default Hero;
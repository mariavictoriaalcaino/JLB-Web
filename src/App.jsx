import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {
  const [showCatalog, setShowCatalog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const openCatalog = (category = "Todas") => {
    setSelectedCategory(category);
    setShowCatalog(true);

    window.history.pushState(
      { catalog: true },
      "",
      "#catalogo"
    );
  };

  const goHome = () => {
    setShowCatalog(false);
    setSelectedCategory("Todas");

    window.history.replaceState(
      { home: true },
      "",
      "#inicio"
    );
  };

  useEffect(() => {
    const handleBack = () => {
      setShowCatalog(false);
      setSelectedCategory("Todas");
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  return (
    <>
      <Navbar />

      {showCatalog ? (
        <Products
          selectedCategory={selectedCategory}
          onBack={goHome}
        />
      ) : (
        <>
          <Hero />

          <Categories
            onSelectCategory={openCatalog}
          />

          <Features />

          <Contact />
        </>
      )}
    </>
  );
}

export default App;
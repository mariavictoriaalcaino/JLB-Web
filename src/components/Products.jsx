import { useState } from "react";
import products from "../data/products";

const productImages = import.meta.glob(
  "../assets/productos/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

function getProductImage(imageName) {
  const wanted = String(imageName || "noimage")
    .toLowerCase()
    .replace(/\.(jpg|jpeg|png|webp)$/i, "");

  const found = Object.entries(productImages).find(([path]) => {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.(jpg|jpeg|png|webp)$/i, "");

    return fileName.toLowerCase() === wanted;
  });

  if (found) {
    return found[1];
  }

  const fallback = Object.entries(productImages).find(([path]) =>
    path.toLowerCase().endsWith("/noimage.jpg")
  );

  return fallback?.[1] || "";
}

function Products({ selectedCategory = "Todas", onBack }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(selectedCategory);
  const categories = [
    "Todas",
    ...new Set(
      products
        .map((product) => product.categoria)
        .filter(Boolean)
    ),
  ];
    const filteredProducts = products.filter((product) => {
  const text = search.toLowerCase().trim();

  const matchesSearch =
    product.nombre.toLowerCase().includes(text) ||
    product.codigoJLB.toLowerCase().includes(text) ||
    product.codigoMack.toLowerCase().includes(text);

  const matchesCategory =
    category === "Todas" ||
    product.categoria === category;

  // Si está buscando, busca en todo el catálogo.
  // Si no está buscando, respeta la categoría seleccionada.
  if (text !== "") {
    return matchesSearch;
  }

  return matchesCategory;
});
  const totalPages = Math.ceil(
  filteredProducts.length / productsPerPage
);

const startIndex = (currentPage - 1) * productsPerPage;

const currentProducts = filteredProducts.slice(
  startIndex,
  startIndex + productsPerPage
);
  return (
    <section className="products" id="productos">

      <div className="products-header">
        {onBack && (
  <button
    type="button"
    className="catalog-back"
    onClick={onBack}
  >
    ← Volver al inicio
  </button>
)}
        <h2>
  {category === "Todas"
    ? "Catálogo"
    : `Catálogo — ${category}`}
</h2>

    <p>
  {category === "Todas"
    ? "Encuentra los repuestos que necesitas para tu camión Mack."
    : `Repuestos disponibles en ${category}.`}
</p>
<div className="products-count">
  {filteredProducts.length}{" "}
  {filteredProducts.length === 1
    ? "producto encontrado"
    : "productos encontrados"}
</div>
        <div className="products-filters">

  <input
    type="text"
    placeholder="🔎 Buscar por nombre o código..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <div className="category-buttons">

    {categories.map((cat) => (
      <button
        key={cat}
        type="button"
        className={
          category === cat
            ? "category-button active"
            : "category-button"
        }
       onClick={() => {
  setCategory(cat);
  setCurrentPage(1);
}}
      >
        {cat}
      </button>
    ))}

  </div>

</div>
      </div>

      <div className="products-grid">
{filteredProducts.length === 0 && (
  <div className="no-products">
    No encontramos productos que coincidan con tu búsqueda.
  </div>
)}
       {currentProducts.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-image">
              <img
                src={getProductImage(product.imagen)}
                alt={product.nombre}
              />
            </div>

            <div className="product-info">

              <h3 className="product-name">
  {product.nombre
    .toLowerCase()
    .replace(/\b\w/g, (letra) => letra.toUpperCase())}
</h3>

              <button
                type="button"
                className="product-button"
                onClick={() => setSelectedProduct(product)}
              >
                Ver producto
              </button>

            </div>

          </div>
        ))}

      </div>
            {totalPages > 1 && (
  <div className="pagination">

    <button
      type="button"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((page) => page - 1)}
    >
      ←
    </button>

    {Array.from(
      { length: totalPages },
      (_, index) => index + 1
    )
      .filter((page) => {
        if (totalPages <= 7) {
          return true;
        }

        return (
          page === 1 ||
          page === totalPages ||
          Math.abs(page - currentPage) <= 1
        );
      })
      .map((page, index, pages) => (
        <span key={page} className="pagination-item">

          {index > 0 &&
            page - pages[index - 1] > 1 && (
              <span className="pagination-dots">
                ...
              </span>
            )}

          <button
            type="button"
            className={
              currentPage === page
                ? "pagination-button active"
                : "pagination-button"
            }
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>

        </span>
      ))}

    <button
      type="button"
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage((page) => page + 1)}
    >
      →
    </button>

  </div>
)}

      {selectedProduct && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >

          <div
            style={{
              position: "relative",
              background: "white",
              width: "900px",
              maxWidth: "95%",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "15px",
              padding: "35px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
              boxSizing: "border-box",
            }}
          >

            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                border: "none",
                background: "transparent",
                fontSize: "32px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div
              style={{
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={getProductImage(selectedProduct.imagen)}
                alt={selectedProduct.nombre}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ padding: "20px" }}>

              <h2
                style={{
                  color: "#06468f",
                  fontSize: "30px",
                  marginBottom: "25px",
                }}
              >
                {selectedProduct.nombre}
              </h2>

            
              <p>
                <strong>Código Mack:</strong>{" "}
                {selectedProduct.codigoMack || "No disponible"}
              </p>

              <p>
                <strong>Categoría:</strong>{" "}
                {selectedProduct.categoria || "No disponible"}
              </p>

              <h3>Descripción</h3>

              <p>
                {selectedProduct.descripcion ||
                  "Contáctenos para más información de este producto."}
              </p>

              <a
                href={`https://wa.me/56990516112?text=${encodeURIComponent(
                  `Hola, quisiera consultar por el repuesto ${selectedProduct.nombre}${
                    selectedProduct.codigoMack
                      ? `, código Mack ${selectedProduct.codigoMack}`
                      : ""
                  }.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "25px",
                  padding: "14px 22px",
                  background: "#20c969",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "600",
                }}
              >
                💬 Consultar por WhatsApp
              </a>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Products;
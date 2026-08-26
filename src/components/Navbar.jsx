import logo from "../assets/logo.jpeg";
function Navbar() {
  return (
    <header>

 <div className="social-bar">

  <a
    href="https://www.facebook.com/share/1Dxgf5snJ2/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1z"
      />
    </svg>
  </a>

  <a
    href="https://www.instagram.com/partsmack"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  </a>

</div>

      <div className="navbar">

        <a href="#">
          <img
            src={logo}
            alt="JLB Repuestos"
            className="logo"
          />
        </a>

        <nav className="menu">

          <a href="#">Inicio</a>

          <a href="#porque-jlb">Nosotros</a>

          <a href="#catalogo">Productos</a>

          <a href="#contacto">
            Contacto
          </a>

          <a
            href="https://wa.me/56983603852"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-menu"
          >
            Cotizar
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;
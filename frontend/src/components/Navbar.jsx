import SearchBar from "./SearchBar.jsx";

// Enlaces reales a las plataformas de redes sociales (no simulados).
const SOCIAL_LINKS = [
  { nombre: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { nombre: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
  { nombre: "X (Twitter)", href: "https://twitter.com", icon: "twitter" },
];

const NAV_LINKS = ["Inicio", "Productos", "Ofertas", "Nosotros", "Contacto"];

function SocialIcon({ icon }) {
  const paths = {
    facebook:
      "M13.5 9H15V6.5h-1.75C11.3 6.5 10 7.8 10 9.75V11H8.5v2.5H10V19h2.5v-5.5h1.8l.4-2.5h-2.2v-1c0-.65.35-1 1-1Z",
    instagram:
      "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5ZM17 6.75a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z",
    twitter:
      "M20 6.6c-.6.27-1.24.45-1.9.53a3.3 3.3 0 0 0 1.46-1.83 6.6 6.6 0 0 1-2.1.8 3.3 3.3 0 0 0-5.63 3 9.36 9.36 0 0 1-6.8-3.45 3.3 3.3 0 0 0 1.02 4.4 3.28 3.28 0 0 1-1.5-.4v.04a3.3 3.3 0 0 0 2.65 3.24 3.3 3.3 0 0 1-1.49.06 3.3 3.3 0 0 0 3.08 2.29A6.63 6.63 0 0 1 4 17.5a9.34 9.34 0 0 0 5.06 1.48c6.07 0 9.39-5.03 9.39-9.39l-.01-.43A6.7 6.7 0 0 0 20 6.6Z",
  };
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[icon]} />
    </svg>
  );
}

export default function Navbar({
  searchTerm,
  onSearchChange,
  cartCount,
  onCartClick,
  activeLink,
  onLinkClick,
}) {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="container navbar-top-inner">
          <div className="navbar-top-info">
            <span>🚚 Envíos a todo Chile</span>
            <span>🔒 Compra segura</span>
            <span>🎧 Soporte 24/7</span>
          </div>
          <div className="navbar-social">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.nombre}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.nombre}
                className="social-link"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="navbar-main">
        <div className="container navbar-main-inner">
          <div className="navbar-logo">
            <span className="navbar-logo-mark">⌁</span>
            <span>Tech<em>Store</em></span>
          </div>

          <SearchBar value={searchTerm} onChange={onSearchChange} />

          <div className="navbar-actions">
            <button className="btn btn-ghost">Iniciar sesión</button>
            <button className="btn btn-outline">Registrarse</button>
            <button className="cart-button" onClick={onCartClick} aria-label="Abrir carrito">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="18" cy="21" r="1.5" fill="currentColor" stroke="none" />
                <path d="M2.5 3h2l2.2 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="navbar-menu">
        <ul className="container navbar-menu-inner">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`nav-link ${activeLink === link ? "active" : ""}`}
                onClick={() => onLinkClick(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

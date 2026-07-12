const SOCIAL_LINKS = [
  { nombre: "Facebook", href: "https://www.facebook.com" },
  { nombre: "Instagram", href: "https://www.instagram.com" },
  { nombre: "X (Twitter)", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h4>TechStore Chile</h4>
          <p>Tu tienda de tecnología de confianza, con los mejores productos y precios de Chile.</p>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>📍 Av. Providencia 1234, Santiago, Chile</li>
            <li>✉️ contacto@techstore.cl</li>
            <li>📞 +56 2 2345 6789</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Redes sociales</h4>
          <ul className="footer-social">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.nombre}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} TechStore Chile. Todos los derechos reservados.</p>
        <p>Proyecto académico — Ingeniería en Informática, INACAP.</p>
      </div>
    </footer>
  );
}

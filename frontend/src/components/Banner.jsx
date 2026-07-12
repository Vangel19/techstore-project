export default function Banner() {
  return (
    <section className="banner">
      <div className="container banner-inner">
        <div className="banner-text">
          <span className="eyebrow">Nueva temporada tech</span>
          <h1>
            La tecnología que lleva
            <br />
            tu mundo <span className="gradient-text">al siguiente nivel</span>
          </h1>
          <p>Descubre los mejores productos en tecnología con las mejores ofertas.</p>
          <a href="#productos" className="btn btn-primary">
            Ver ofertas
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="banner-art" aria-hidden="true">
          <div className="banner-glow"></div>
          <div className="banner-grid"></div>
        </div>
      </div>
    </section>
  );
}

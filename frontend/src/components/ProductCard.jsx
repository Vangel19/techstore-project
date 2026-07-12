const formatoCLP = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export default function ProductCard({ producto, onAddToCart }) {
  const estrellas = Math.round(producto.valoracion);

  return (
    <article className="product-card">
      <span className="product-tag">{producto.categoria}</span>
      <div className="product-image">
        <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
      </div>
      <div className="product-info">
        <h4>{producto.nombre}</h4>
        <div className="product-rating">
          {"★".repeat(estrellas)}
          {"☆".repeat(5 - estrellas)}
          <span className="product-reviews">({producto.reviews})</span>
        </div>
        <div className="product-price">{formatoCLP.format(producto.precio)}</div>
        <button className="btn btn-add" onClick={() => onAddToCart(producto)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="18" cy="21" r="1.5" fill="currentColor" stroke="none" />
            <path d="M2.5 3h2l2.2 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

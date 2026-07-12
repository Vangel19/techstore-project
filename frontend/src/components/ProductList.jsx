import ProductCard from "./ProductCard.jsx";

export default function ProductList({ productos, cargando, error, onAddToCart }) {
  if (cargando) {
    return <p className="state-message">Cargando productos...</p>;
  }

  if (error) {
    return <p className="state-message state-error">{error}</p>;
  }

  if (productos.length === 0) {
    return <p className="state-message">No se encontraron productos para tu búsqueda.</p>;
  }

  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <ProductCard key={producto._id || producto.nombre} producto={producto} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

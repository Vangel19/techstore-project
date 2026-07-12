const formatoCLP = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export default function Cart({ isOpen, items, onClose, onIncrease, onDecrease, onRemove }) {
  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? "visible" : ""}`} onClick={onClose} />
      <aside className={`cart-drawer ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <div className="cart-header">
          <h3>Tu carrito ({items.length})</h3>
          <button className="cart-close" onClick={onClose} aria-label="Cerrar carrito">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="state-message">Tu carrito está vacío. ¡Agrega algún producto!</p>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li key={item._id || item.nombre} className="cart-item">
                  <img src={item.imagen} alt={item.nombre} />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.nombre}</p>
                    <p className="cart-item-price">{formatoCLP.format(item.precio)}</p>
                    <div className="cart-item-qty">
                      <button onClick={() => onDecrease(item)} aria-label="Quitar una unidad">
                        −
                      </button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => onIncrease(item)} aria-label="Agregar una unidad">
                        +
                      </button>
                      <button className="cart-item-remove" onClick={() => onRemove(item)}>
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>{formatoCLP.format(total)}</strong>
              </div>
              <button className="btn btn-primary cart-checkout" disabled title="Función de pago no incluida en este proyecto">
                Proceder al pago (próximamente)
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

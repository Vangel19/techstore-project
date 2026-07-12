import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import ProductList from "./components/ProductList.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import productosLocales from "./data/productos.json";
import "./App.css";

// URL de la API del backend (Node.js + Express + MongoDB).
// Si el backend no está disponible, la app usa el JSON local como respaldo.
const API_URL = "http://localhost:4000/api/products";

const INFO_STRIP = [
  { icono: "💳", texto: "Hasta 12 cuotas sin interés" },
  { icono: "🚚", texto: "Despachos en 24 a 48 horas" },
  { icono: "↩️", texto: "Cambios y devoluciones fáciles" },
  { icono: "✅", texto: "Calidad garantizada" },
];

export default function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Inicio");

  // Carga de productos: intenta primero el backend (MongoDB) y,
  // si falla, utiliza el archivo productos.json local como respaldo.
  useEffect(() => {
    let cancelado = false;

    async function cargarProductos() {
      setCargando(true);
      setError("");
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Respuesta no válida del servidor");
        const data = await res.json();
        if (!cancelado) setProductos(data);
      } catch (err) {
        if (!cancelado) {
          console.warn("No se pudo conectar al backend, usando datos locales:", err.message);
          setProductos(productosLocales);
          setError("");
        }
      } finally {
        if (!cancelado) setCargando(false);
      }
    }

    cargarProductos();
    return () => {
      cancelado = true;
    };
  }, []);

  // Filtro de búsqueda con filter(), aplicado sobre el listado ya cargado.
  const productosFiltrados = useMemo(() => {
    if (!searchTerm.trim()) return productos;
    return productos.filter((p) =>
      p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [productos, searchTerm]);

  function handleAddToCart(producto) {
    setCartItems((prev) => {
      const existente = prev.find((item) => item._id === producto._id || item.nombre === producto.nombre);
      if (existente) {
        return prev.map((item) =>
          item === existente ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
    setCartOpen(true);
  }

  function handleIncrease(item) {
    setCartItems((prev) =>
      prev.map((i) => (i === item ? { ...i, cantidad: i.cantidad + 1 } : i))
    );
  }

  function handleDecrease(item) {
    setCartItems((prev) =>
      prev
        .map((i) => (i === item ? { ...i, cantidad: i.cantidad - 1 } : i))
        .filter((i) => i.cantidad > 0)
    );
  }

  function handleRemove(item) {
    setCartItems((prev) => prev.filter((i) => i !== item));
  }

  const cartCount = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="app">
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        activeLink={activeLink}
        onLinkClick={setActiveLink}
      />

      <main>
        <Banner />

        <section id="productos" className="container content-grid">
          <div>
            <div className="section-heading">
              <h2>Productos destacados</h2>
              <span className="section-count">{productosFiltrados.length} productos</span>
            </div>
            <ProductList
              productos={productosFiltrados}
              cargando={cargando}
              error={error}
              onAddToCart={handleAddToCart}
            />
          </div>
          <Sidebar />
        </section>

        <section className="info-strip">
          <div className="container info-strip-inner">
            {INFO_STRIP.map((item) => (
              <div key={item.texto} className="info-strip-item">
                <span>{item.icono}</span>
                {item.texto}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <Cart
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />
    </div>
  );
}

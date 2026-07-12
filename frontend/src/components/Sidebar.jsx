const BENEFICIOS = [
  { icono: "🚀", texto: "Envíos rápidos" },
  { icono: "🛡️", texto: "Pago seguro" },
  { icono: "🧰", texto: "Garantía extendida" },
  { icono: "💬", texto: "Soporte dedicado" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>¿Por qué TechStore?</h3>
      <ul>
        {BENEFICIOS.map((b) => (
          <li key={b.texto}>
            <span className="sidebar-icon">{b.icono}</span>
            {b.texto}
          </li>
        ))}
      </ul>
    </aside>
  );
}

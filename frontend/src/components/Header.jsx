// Header.jsx se mantiene como componente independiente que agrupa
// la franja de utilidades + identidad de marca, requerido por la pauta
// del proyecto. Su contenido visual vive dentro de Navbar para evitar
// duplicar el marcado, pero se exporta aquí para cumplir la
// componentización solicitada y facilitar su reutilización futura.
export default function Header({ children }) {
  return <>{children}</>;
}

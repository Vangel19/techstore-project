# TechStore Chile 🛒💻

Proyecto académico — **Ingeniería en Informática, INACAP**
Asignatura: Programación Front-End

## 1. Integrantes
- Nombre Apellido (completar)

## 2. Objetivo
Desarrollar una aplicación web responsiva que representa la página principal de una
tienda virtual de tecnología (TechStore), permitiendo a un cliente visualizar productos,
buscarlos y agregarlos a un carrito de compras funcional. Los productos se almacenan y
se sirven desde una base de datos MongoDB a través de una API construida con Node.js y
Express.

## 3. Tecnologías utilizadas
**Frontend:** React 18, Vite, HTML5, CSS3, JavaScript ES6
**Backend:** Node.js, Express.js
**Base de datos:** MongoDB + Mongoose
**Control de versiones:** Git / GitHub

## 4. Estructura del proyecto
```
techstore-project/
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── products.js
│   ├── seed/
│   │   ├── productos.json      # datos fuente para poblar MongoDB
│   │   └── seed.js             # script que carga productos.json en la DB
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx / .css
│   │   │   ├── Header.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Cart.jsx
│   │   ├── data/
│   │   │   └── productos.json   # respaldo local si el backend no responde
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── README.md
└── IA_UTILIZADA.md
```

## 5. Instrucciones de instalación

### Requisitos previos
- Node.js 18+
- MongoDB corriendo localmente (`mongodb://127.0.0.1:27017`) **o** una cuenta gratuita
  de [MongoDB Atlas](https://www.mongodb.com/atlas)

### 5.1 Backend
```bash
cd backend
npm install
cp .env.example .env        # ajusta MONGODB_URI si usas Atlas
npm run seed                # carga los productos de ejemplo en la base de datos
npm run dev                 # levanta el servidor en http://localhost:4000
```

### 5.2 Frontend
En otra terminal:
```bash
cd frontend
npm install
npm run dev                 # levanta la app en http://localhost:5173
```

Con ambos servidores corriendo, la tienda consulta los productos directamente desde
MongoDB a través de `GET /api/products`. Si el backend no está disponible, la app
sigue funcionando usando el archivo `src/data/productos.json` como respaldo, para no
dejar la vitrina vacía.

## 6. Funcionalidades implementadas
- Barra superior con información de envíos, buscador, login/registro (visuales,
  sin backend de autenticación real, ya que no era parte del alcance) y accesos a
  redes sociales (enlaces reales a Facebook, Instagram y X).
- Menú de navegación con estado activo y cambio de color al pasar el mouse.
- Banner principal con llamada a la acción.
- Grilla de productos destacados cargados dinámicamente desde MongoDB (vía API) y
  renderizados con `map()`.
- Buscador funcional con `filter()` y `onChange`.
- Carrito de compras funcional: agregar, aumentar/disminuir cantidad y eliminar
  productos, con contador y total actualizados mediante `useState`. El botón de pago
  está deshabilitado intencionalmente, ya que la pasarela de pago no es parte del
  alcance de este proyecto.
- Barra lateral con beneficios y barra inferior con información de cuotas/despachos.
- Footer con información de contacto y redes sociales.
- Diseño responsive (desktop, tablet y móvil).

## 7. Dificultades encontradas
- Se decidió mantener `Header.jsx` como componente independiente (según lo solicitado
  en la pauta) aunque su contenido visual se agrupó dentro de `Navbar` para evitar
  duplicar marcado; `Header` actúa como envoltorio reutilizable.
- No fue posible levantar una instancia de MongoDB en el entorno de generación de este
  entregable para una prueba 100% end-to-end; se resolvió agregando un mecanismo de
  respaldo (`productos.json` local) para que la interfaz nunca quede vacía si el
  backend no está disponible, y se validó la compilación y sintaxis de todos los
  archivos.

## 8. Conclusiones
El proyecto permitió aplicar de forma integrada los principales conceptos de
React (componentes, props, useState, renderizado dinámico) junto con la construcción
de una API REST simple sobre Express y MongoDB, entendiendo cómo conectar un frontend
moderno a una base de datos real a través de una capa de backend.

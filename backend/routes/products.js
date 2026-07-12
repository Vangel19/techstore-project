import { Router } from "express";
import Product from "../models/Product.js";

const router = Router();

// GET /api/products  -> lista todos los productos (soporta ?search=)
router.get("/", async (req, res) => {
  try {
    const { search, categoria } = req.query;
    const filtro = {};

    if (search) {
      filtro.nombre = { $regex: search, $options: "i" };
    }
    if (categoria) {
      filtro.categoria = categoria;
    }

    const productos = await Product.find(filtro).sort({ createdAt: -1 });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener productos", error: error.message });
  }
});

// GET /api/products/:id -> un producto puntual
router.get("/:id", async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el producto", error: error.message });
  }
});

// POST /api/products -> crear producto (uso administrativo)
router.post("/", async (req, res) => {
  try {
    const nuevoProducto = await Product.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el producto", error: error.message });
  }
});

export default router;

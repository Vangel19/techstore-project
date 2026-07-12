import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true },
    imagen: { type: String, required: true },
    valoracion: { type: Number, default: 5, min: 0, max: 5 },
    reviews: { type: Number, default: 0 },
    descripcion: { type: String, default: "" },
    destacado: { type: Boolean, default: true },
    stock: { type: Number, default: 20 },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);

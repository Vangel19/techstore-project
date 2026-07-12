import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Product from "../models/Product.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/techstore";

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Conectado a MongoDB para poblar datos");

    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "productos.json"), "utf-8")
    );

    await Product.deleteMany({});
    await Product.insertMany(data);

    console.log(`✅ Se insertaron ${data.length} productos en la base de datos`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al poblar la base de datos:", error.message);
    process.exit(1);
  }
}

seed();

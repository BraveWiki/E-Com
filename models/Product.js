
import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  image: String,
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)

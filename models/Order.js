
import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
  userEmail: String,
  items: Array,
  total: Number,
  paymentMethod: { type: String, default: "COD" },
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)

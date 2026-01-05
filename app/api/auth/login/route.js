
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req) {
  const { email, password } = await req.json()
  await connectDB()

  let user = await User.findOne({ email })

  if (!user && email === process.env.ADMIN_EMAIL) {
    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
    user = await User.create({ email, password: hash, role: "admin" })
  }

  if (!user) return Response.json({ error: "User not found" }, { status: 401 })

  const ok = await bcrypt.compare(password, user.password)
  if (!ok) return Response.json({ error: "Invalid password" }, { status: 401 })

  const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET)
  return Response.json({ token })
}

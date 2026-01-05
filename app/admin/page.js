
"use client"
import { useState } from "react"

export default function Admin() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")

  async function addProduct() {
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, stock: 10 })
    })
    alert("Product added")
  }

  return (
    <div>
      <h3>Admin Panel</h3>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={addProduct}>Add</button>
    </div>
  )
}

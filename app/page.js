
async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" })
  return res.json()
}

export default async function Home() {
  const products = await getProducts()
  return (
    <div>
      {products.map(p => (
        <div key={p._id} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p>Price: {p.price}</p>
        </div>
      ))}
    </div>
  )
}

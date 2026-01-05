
export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial", padding: 20 }}>
        <h2>Simple E-Commerce</h2>
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
      </body>
    </html>
  )
}

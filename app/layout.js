
export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial", padding: 20 }}>
        <h2>Simple E-Commerce</h2>
        {children}
      </body>
    </html>
  )
}

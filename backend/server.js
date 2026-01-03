
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './utils/mongo.js'
import authRoutes from './routes/auth.js'
import productRoutes from './routes/products.js'
import orderRoutes from './routes/orders.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

connectDB()

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

app.listen(5000, () => console.log('Server running'))


import express from 'express'
import Product from '../models/Product.js'
const r=express.Router()
r.get('/',async(req,res)=>res.json(await Product.find()))
export default r

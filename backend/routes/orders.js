
import express from 'express'
import Order from '../models/Order.js'
const r=express.Router()
r.post('/',async(req,res)=>res.json(await Order.create(req.body)))
export default r

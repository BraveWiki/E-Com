
import express from 'express'
const r=express.Router()
r.post('/google',(req,res)=>res.json({success:true}))
export default r

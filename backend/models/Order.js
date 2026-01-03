
import mongoose from 'mongoose'
export default mongoose.model('Order', new mongoose.Schema({
  user:String,products:Array,address:String,
  paymentMethod:{type:String,default:'Cash on Delivery'},
  status:{type:String,default:'Pending'}
}))

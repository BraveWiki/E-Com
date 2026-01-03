
import mongoose from 'mongoose'
export default mongoose.model('Product', new mongoose.Schema({
  title:String,description:String,price:Number,stock:Number,images:[String]
}))

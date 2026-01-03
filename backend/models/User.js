
import mongoose from 'mongoose'
export default mongoose.model('User', new mongoose.Schema({
  googleId:String,email:String,name:String,role:{type:String,default:'user'}
}))

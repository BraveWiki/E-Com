const mongoose = require('mongoose');
module.exports = mongoose.model('Order', new mongoose.Schema({
  user: Object,
  items: Array,
  total: Number,
  paymentType: String,
  status: { type:String, default:'pending' },
  createdAt: { type: Date, default: Date.now }
}));

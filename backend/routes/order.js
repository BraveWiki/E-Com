const router = require('express').Router();
const Order = require('../models/order');

router.post('/', async (req, res) => {
  const { user, items, total } = req.body;
  const order = new Order({ user, items, total, paymentType:'COD' });
  await order.save();
  res.json({ success:true, order });
});

router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;

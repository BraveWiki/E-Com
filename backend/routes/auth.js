const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASS = process.env.ADMIN_PASS;

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    const token = jwt.sign({ email, role:'admin' }, process.env.JWT_SECRET);
    return res.json({ token, role:'admin' });
  }

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error:'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(403).json({ error:'Invalid credentials' });

  const token = jwt.sign({ userId:user._id, role:'user' }, process.env.JWT_SECRET);
  res.json({ token, role:'user' });
});

router.post('/register', async (req, res) => {
  const u = new User(req.body);
  await u.save();
  res.json({ success:true });
});

module.exports = router;

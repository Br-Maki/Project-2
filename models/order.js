const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cart: { type: String, required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    quantity: { type: Number, required: true }
  }],
  total: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);

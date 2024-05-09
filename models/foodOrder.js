let mongoose = require('mongoose');
let orderSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
    productId: {
        type: Schema.Types.ObjectId,
        ref:'foodItems',
        required: true
    },
    price: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now
    },
    status: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });
module.exports = mongoose.model('foodorder', orderSchema);
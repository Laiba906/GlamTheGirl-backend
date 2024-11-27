const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SubServices = new Schema({
    name: { type: String, required: true }, // E.g., Haircut, Hair Coloring
    price: { type: Number, required: true }, // E.g., 50, 100
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true } // Links to the parent service
}, {
   collection: 'SubServices'
})

module.exports = mongoose.model('SubServices', SubServices)

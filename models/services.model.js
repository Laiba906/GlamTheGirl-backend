const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let services = new Schema({
    name: { type: String, required: true }, // E.g., Hair, Makeup
    salon: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon', required: true } // Links to a specific salon
}, {
   collection: 'services'
})

module.exports = mongoose.model('services', services)
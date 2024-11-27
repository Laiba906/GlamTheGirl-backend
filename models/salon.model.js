const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let salon = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true }
}, {
   collection: 'salon'
})

module.exports = mongoose.model('salon', salon)
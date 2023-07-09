const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true
        
    },
    airport: {
        type: String,
        default: 'DEN',
        enum: ['AUS', 'DEN', 'BWI', 'LAX']
    },
    flightNum: { 
        type: Number,
        min: 10,
        max: 9999
     },
    departs: { type: Date}
}, {
    timestamps: true
});



module.exports = mongoose.model('Flight', flightSchema);
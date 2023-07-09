const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'IAH', 'HKG']
    },
    arrival: {
      type: Date
    }
  });

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
    departs: { type: Date},
    destinations: [destinationSchema]
}, {
    timestamps: true
});



module.exports = mongoose.model('Flight', flightSchema);
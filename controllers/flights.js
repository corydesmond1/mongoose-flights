const Flight = require('../models/flight');

module.exports = {
    index,
    show
}

function show(req, res) {
    res.render('flights/show', {
        flight: Flight.getOne(req.params.id),
        title: 'Flight Details'
    });
}

function index(req, res) {
    res.render('flights/index', {
        flights: Flight.getAll(),
        title: 'All Flights'
    });
}
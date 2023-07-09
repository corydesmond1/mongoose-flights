const Flight = require("../models/flight");
const Ticket = require('../models/ticket');

module.exports = {
  index,
  show,
  new: newFlight,
  create,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", {title: 'All Flights', flights});
}


// async function show(req, res) {
//   const flight = await Flight.findById(req.params.id);
//   console.log(flight);
//   res.render("flights/show", { title: 'Flight Detail', flight });
// }

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  let tickets = await Flight.findById(req.params.id);
  tickets = await Ticket.find({ flight: flight._id });
  res.render('flights/show', { title: 'Flight Detail', flight, tickets });
}



function newFlight(req, res) {
    const newFlight = new Flight();
  res.render("flights/new", { title: 'Add Flight', errorMsg: '' });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

  try {
    await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    res.render("flights/new", { errorMsg: err.message });
  }
}

// function show(req, res) {
//     res.render('flights/show', {
//         flight: Flight.getOne(req.params.id),
//         title: 'Flight Details'
//     });
// }

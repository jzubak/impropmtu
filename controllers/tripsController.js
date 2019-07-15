const db = require("../models");
const router = require("../routes");


// Defining methods for the 
module.exports = {
  findAll : function(req, res) {
    db.Trips
      .find(req)
      // .sort({ date: -1 })
      // .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // ,
  // findById: function(req, res) {
  //   db.Trip
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   router.Trip
  //     .create(req)
  //     .then(res.json(req))
  //     .catch(err => res.status(422).json(err));
  // }
  // ,
  // update: function(req, res) {
  //   db.Trip
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Trip
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
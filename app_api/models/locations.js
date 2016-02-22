/**
 * Created by gijigae on 2/19/16.
 */
var mongoose = require('mongoose');

// Schema for two subdocuments, opening time and reviews
var openingTimeSchema = new mongoose.Schema({
  days: {type: String, required: true},
  opening: String,
  closing: String,
  closed: {type: Boolean, required: true}
});
var reviewSchema = new mongoose.Schema({
  author: String,
  rating: {type: Number, required: true, min: 0, max: 5},
  reviewText: String,
  createdOn: {type: Date, "default": Date.now()}
});

// Schema for location
var locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  rating: {type: Number, "default": 0, min: 0, max: 5},
  facilities: [String],
  coords: {type: [Number], required: true},
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]
});

// Compile and create a Location model from LocationSchema
mongoose.model('Location', locationSchema);
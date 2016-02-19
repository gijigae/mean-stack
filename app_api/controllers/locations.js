/**
 * Created by gijigae on 2/19/16.
 */
var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

module.exports.locationsCreate = function(req, res, next){
  sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsListByDistance = function(req, res, next){
  sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsReadOne = function(req, res, next){
  sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsUpdateOne = function(req, res, next){
  sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsDeleteOne = function(req, res, next){
  sendJsonResponse(res, 200, {"status": "success"});
};
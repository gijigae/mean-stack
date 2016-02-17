/**
 * Created by gijigae on 2/16/16.
 */

/* GET 'home' page */
module.exports.homelist = function(req, res, next){
  res.render('locations-list', {title: 'Home'});
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res, next){
  res.render('location-info', {title: 'Location info'});
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res, next){
  res.render('location-review-form', {title: 'Add review'});
};

/**
 * Created by gijigae on 2/16/16.
 */
/* GET home page */
module.exports.about = function(req, res, next){
  res.render('generic-text', {title: 'About'})
}

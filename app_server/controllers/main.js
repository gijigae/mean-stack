/**
 * Created by gijigae on 2/16/16.
 */
/* GET home page */
module.exports.index = function(req, res, next){
  res.render('index', {title: 'Express'})
}

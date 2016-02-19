/**
 * Created by gijigae on 2/16/16.
 */
/* GET home page */
module.exports.about = function(req, res, next){
  res.render('generic-text', {
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done. \n\n' +
    'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, ' +
    'accumsan id imperdiet et, porttitor at sem.Nulla quis lorem ut libero malesuada feugiat. Curabitur ' +
    'aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. ' +
    'Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. ' +
    'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh.'
  })
}

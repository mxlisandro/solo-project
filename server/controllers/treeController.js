const Tree = require('../models/treeModel');
const treeController = {};

treeController.getAllTrees = (req, res, next) => {
    Tree.find({}, (err, trees) => {
      // if a database error occurs, call next with the error message passed in
      // for the express global error handler to catch
      if (err) return next('Error in treeController.getAllTrees: ' + JSON.stringify(err));
      
      // store retrieved users into res.locals and move on to next middleware
      res.locals.trees = trees;
      console.log('saved db trees in locals');
      console.log(res.locals.trees);
      return next();
    });
  };    

treeController.createTree = (req, res, next) => {
    const {varietyName, lastFertDate} = req.body;
  if (!varietyName || !lastFertDate) return next ('Missing a value in treeController.createTree');
  Tree.create({varietyName, lastFertDate }, (err, user) => {
  if(err){
    return res.render('../client/signup', {error:err});
  }
  else{
    res.locals.user = user;
    console.log('created tree');
    return next()
  }
  });
};

module.exports = treeController;

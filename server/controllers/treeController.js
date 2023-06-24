const Tree = require('../models/treeModel');
const treeController = {};

treeController.getAllTrees = (req, res, next) => {
    Tree.find({}, (err, users) => {
      // if a database error occurs, call next with the error message passed in
      // for the express global error handler to catch
      if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
      
      // store retrieved users into res.locals and move on to next middleware
      res.locals.users = users;
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

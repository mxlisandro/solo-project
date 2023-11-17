const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = (req, res, next) => {
  // write code here
  // let newUser = new User({
  //   username: req.body.username, password: req.body.password
  // });
//   // const { username, password} = req.body;
// //checks to see if all data is passed in correctly
//   if(!newUser.username || !newUser.password || typeof newUser.username != 'string' || typeof newUser.password != 'string' ) {

  //     //object arg passed in next automatically invokes global error handler in server
  //     next({log: 'userController.createUser', message: {err: 'Incorrect data received'}});
  //   } else {

  //     newUser.save()
  //   }
  const {username, password} = req.body;
  if (!username || !password) return next ('Missing username or password in userController.createUser');
  User.create({username, password }, (err, user) => {
  if(err){
    return res.render('../client/signup', {error:err});
  }
  else{
    res.locals.user = user;
    console.log('created user');
    return next()
  }
  });
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = (req, res, next) => {
  // write code here
  const {username, password} = req.body;
  if(!username || !password ) {
    return res.redirect('/signup');
  }

  User.findOne({username}, (err, user) => {
    if(err){
        return next(err);
    }
    else if(!user) {
        res.redirect('/signup');
    }
    else {
      bcrypt.compare(password, user.password)
      .then(result => {
        if(!result){
        //password did not match
        res.redirect('/signup')
        }
        else{
            //password did match, save user for following middlewares
            res.locals.user = user;
            
            return next();
        }
      })
      .catch(err => {
        return next('Error in userController.verifyUser: ' + JSON.stringify(err))
      })
    }
  });
};

module.exports = userController;

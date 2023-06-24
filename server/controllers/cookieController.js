const User = require('../models/userModel');
const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  // write code here
  
  res.cookie('codesmith', 'Hi');
  res.cookie('secret', Math.floor(Math.random() * 100));

  return next();
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  res.cookie('ssid',res.locals.user._id.id, {httpOnly:true});
  console.log('SSIDCookie set')
  return next();
}

module.exports = cookieController;
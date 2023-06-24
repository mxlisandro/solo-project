const Session = require('../models/sessionModel');
const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = (req, res, next) => {
  // write code here
  Session.findOne({cookield: req.cookies.ssid }, (err, session) => {
    if (err) {
    // database error
    return next ('Error in sessionController. ¡sLoggedIn: '
    + JSON.stringify(err));
    } else if (!session) {
    // no session found
    res. redirect ('/signup');
    } else{
    // session found 
    return next ();
        }
    })

};

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {
  //write code here
  Session.create({cookieId: res.locals.user._id.id }, (err, session) => {
    if (err) {
        return next('Error in sessionController.startSession:' + JSON.stringify(err))
    }
    else{
        console.log('newSessionCreated');
        return next();
    }
    });
  
};

module.exports = sessionController;
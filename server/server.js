const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
const treeController = require('./controllers/treeController')

const PORT = 3000;
const MONGO_URI =
  "mongodb+srv://test:test@cluster0.ohuw5qj.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "SoloProject",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

  /**
* Automatically parse urlencoded body content and form data from incoming requests and place it
* in req.body
*/
app.use(express.json());
app.use(express.urlencoded());

app.use('/client', express.static(path.resolve(__dirname, '../client')));

app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  // what should happen here on successful log in?
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});

app.use('/build', express.static(path.join(__dirname, '../build')));
// serve login.html on the route '/'
app.get('/', cookieController.setCookie, (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/login.html'));
});
//signup
app.get('/signup',  (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/signup.html'));
});
//delete
app.get('/delete', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/delete.html'))
})
app.post('/signup', userController.createUser , cookieController.setSSIDCookie , sessionController.startSession, (req, res) => {
  // what should happen here on successful sign up?
  //sends file to client sendFile is a biult in method
  res.redirect('/');
});

// //login
// app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
//   // what should happen here on successful log in?
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
// });
//addTreea
app.get('/api/addTree/trees', treeController.getAllTrees, (req, res) => {
  // console.log('trees in final middleware')
  // console.log(res.locals.trees)
  return res.status(200).json(res.locals.trees);
});

app.get('/deleteTree', treeController.deleteTree, (req, res) => {
  // console.log('trees in final middleware')
  // console.log(res.locals.trees)
  console.log(__dirname);
  return res.status(200).sendFile('/Users/lisandroolivares/solo-project/client/index.html')
  // path.join(__dirname, '..','client', 'index.html')
  // return res.redirect('/login');
});

app.post('/addTree', treeController.createTree, (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});



//404 handler
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  //console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;
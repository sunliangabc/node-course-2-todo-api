var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
// console.log(req.body);
})

app.listen(3000, () => {
  console.log('Started on port 3000');
})

module.exports = {app};

















// var user = new User({
//   email: 'sunliangabc@gmail.com'
// });
// user.save().then((doc) => {
//   console.log('saved', doc);
// }, (err) => {
//   console.log('unsaved', err);
// });

//save new Something
// var newTodo = new Todo({
//   text: 'Learning NodeJS'
// });
// newTodo.save().then((doc) => {
//   console.log('Saved doc', doc);
// }, (e) => {
//   console.log('Unable to save');
// }, (err) => {
//   console.log('Unable to save', err);
// });
// var newTodo = new Todo({
//   text: 'Cook dinner'
//
// });
// newTodo.save().then((doc) => {
//   console.log('Saved doc', doc);
// }, (e) => {
//   console.log('Unable to save');
// })
//

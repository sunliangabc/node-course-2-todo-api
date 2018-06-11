var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;
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
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});
app.get('/todos/:id', (req,res) => {
  // res.send(req.params);
  var id = req.params.id;
  if(ObjectID.isValid(id)){
    Todo.findById(id).then((todo) => {
      if(todo){
        res.send({todo});
      }else{
          res.status(404).send({});
      }
    }, (err) => {
        res.status(404).send(err);
    }). catch((e) => {
        res.status(404).send(e);
    });
  }else{
    return res.status(404).send({});
  }
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
      return res.status(404).send({});
  }else{
    Todo.findByIdAndRemove(id).then((todo) => {
      if(!todo){
          return res.status(404).send({});
      }else{
        res.send({todo});
        console.log(todo);
      }
    }, (e) => {
      res.status(400).send({});
    });
  }
});
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

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

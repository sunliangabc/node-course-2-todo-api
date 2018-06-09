const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var uid = '5b186552e2ce7d01f0baf366';
if(ObjectID.isValid(uid)){
  // User.find
}
var id = '5b1c1697e8b8ebf358109c18';
if(ObjectID.isValid(id)){
  User.findById(uid).then((user) => {
    if(!user){
      return console.log('Id not found');
    }
    console.log('user found by id', user);
  }).catch((err) => console.log(err));
}
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });
Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found!');
  }
  console.log('find by id', todo);
}, (e) => {
  console.log(e);
}).catch((err) => console.log(err));

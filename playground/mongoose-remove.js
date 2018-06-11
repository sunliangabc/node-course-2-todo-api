const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

//Todo.remove()
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5b1e83b3ae245a97e85a05de').then((todo) => {
  var r = 1/0;
  console.log(r);
  if(todo){
    console.log('todo', todo);
  }else{
    console.log('not found');
  }
}, (e) => {
  console.log('e', e);
}).catch((err) => {
  console.log('err', err);
})

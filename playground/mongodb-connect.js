const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  // if(err){
  //   return console.log('Unable to connect to MongoDB server');
  // }
  // console.log('Connected to MongoDB server...');
  // const cdb = client.db('CollegeDB');
  // cdb.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // const udb = client.db('UserDB');
  // udb.collection('Users').insertOne({
  //   name: 'Steven',
  //   age: 34,
  //   location: 'Toronto'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo.', err);
  //   }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  client.close();
});

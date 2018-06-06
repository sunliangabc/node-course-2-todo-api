// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  const db = client.db('UserDB');
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  db.collection('Users').findOneAndUpdate({
    name: 'Steven'
  }, {
    $set: {
      name: 'Liang'
    },
    $inc:{
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b17f56715d443c3e3c95143')
  // }, {
  //   $set: {
  //     complete: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });
  client.close();
});

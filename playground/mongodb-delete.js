// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  const db = client.db('demo');
  //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat dinner'}).then((res) => {
  //   console.log(res);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((res) => {
  //   console.log(res);
  // })

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((res) => {
    console.log(res);
  })
  client.close();
});

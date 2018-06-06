// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  const db = client.db('demo');
  db.collection('Todos').find({
    _id: new ObjectID('5b1835b61defe7bcfa8b7806')
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  const udb = client.db('UserDB');
  udb.collection('Users').find({name: 'Steven'}).toArray().then((count) => {
    console.log('Todos count: ', count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  client.close();
});

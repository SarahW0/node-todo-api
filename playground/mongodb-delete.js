const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';

MongoClient.connect(url,function(err,client){
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
   console.log("Connected successfully to server");

   const db = client.db(dbName);

   const collection = db.collection('Todos');
   //const userCollection = db.collection('Users');

    //browser all the documents
   collection.deleteMany({"completed" : false},function(err,docs){
      //console.log(docs);
      if(err) {
        return console.log('Deleting items failed');
      }
      console.log('Deleting items successfully');
    });


   client.close();
});

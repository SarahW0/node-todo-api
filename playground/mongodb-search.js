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
   collection.find({"completed" : false}).toArray(function(err,docs){
      //console.log(docs);
      docs.forEach((item, index)=>{
         console.log(item);
      });
   });

   client.close();
});

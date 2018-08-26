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

    //deleteMany
   /*collection.deleteMany({"completed" : false}).then((result) =>{
     console.log(result);
   });*/

   collection.findOneAndDelete({"completed" : false}).then((result) =>{
     console.log(result);
   });

   client.close();
});

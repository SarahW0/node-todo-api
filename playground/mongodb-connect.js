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
   const userCollection = db.collection('Users');

   /*userCollection.insertMany([
            {
              name: 'Sarah Wang',
              age: 43,
              location: 'Melbourne'
            },
            {
              name: 'Kitty Wang',
              age: 16,
              location: 'Melbourne'
            }
     ],(err,result)=>{
         if(err) {
           return console.log('Inserting failed',err);
         }
         console.log('Inserting successfully', result.ops.length);

   });*/
    //browser all the documents
   userCollection.find({}).toArray(function(err,docs){
      //console.log(docs);
      docs.forEach((item, index)=>{
         console.log(item._id.getTimestamp());
      });
   });

   /*//Insert a document

   collection.insertMany([
            {text: 'test 1', completed: false},
            {text: 'test 2', completed: true},
            {text: 'test 3', completed: false}
     ],(err,result)=>{
         if(err) {
           return console.log('Inserting failed',err);
         }
         console.log('Inserting successfully', result.ops.length);

   });*/
   client.close();
});

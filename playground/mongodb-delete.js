// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var obj = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connected to MongoDB Server');
  }


// delete many
// db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

// deleteOne
// db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
//   console.log(result);
// });

// FindOneDelete



//
// db.collection('Users').deleteMany({name:"Ravi"}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({
  name:"Renuka"
}).then((result) => {
  console.log(JSON.stringify(result,undefined,2));
});


db.close();

});

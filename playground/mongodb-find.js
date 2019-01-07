// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');
//
// var obj = new ObjectID();
//
// console.log(obj);
//
//

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connected to MongoDB Server');
  }
// db.collection('Todos').find().toArray().then((docs)=>{})....to find all result in given collection
// db.collection('Todos').find({completed:false}).toArray().then((docs)=>{})....to find result of specific field
// db.collection('Todos').find({
//   _id: new ObjectID('5c2dda32b6535d039008b4fe')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('Unable to fetch todo',err);
// });


//Another method of find() alternative to toArray

db.collection('Todos').find({
  _id: new ObjectID('5c2dda32b6535d039008b4fe')
}).count().then((count)=>{
  console.log(`Todos count :${count}`);
},(err)=>{
  console.log('Unable to fetch todo',err);
});


db.collection('Users').find({name:'Ravi'}).count().then((count)=>{
  console.log(`Todos count :${count}`);
},(err)=>{
  console.log('Unable to fetch todo',err);
});
db.close();

});

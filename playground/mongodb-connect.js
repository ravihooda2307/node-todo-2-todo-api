const MongoClient = require('mongodb').MongoClient;

// const {MongoClient,ObjectID} = require('mongodb');
//
// var obj = new ObjectID();
//
// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connected to MongoDB Server');
  }

  db.collection('Todos').insertOne({
    text:'Something to do',
    completed:false
  },(err ,result) => {

if(err){
  console.log('unable to insert todo',err);
} else {

console.log(JSON.stringify(result.ops,undefined,2));

}
});

db.collection('Users').insertOne({
  name:'Ravi',
  age:22,
  Location:'New Delhi'
},(err ,result) => {
  if(err){
    console.log('Unable to connect to  users',err);
  } else {
    // console.log(JSON.stringify(result.ops,undefined,2));
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  }
});

db.close();
});

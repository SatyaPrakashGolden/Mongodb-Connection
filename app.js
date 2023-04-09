const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0';
const client = new MongoClient(url);
const database="college";
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0
async function getData()
{
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection("student");
    let respose=await collection.find({}).toArray();
    console.log(respose);
}
getData();

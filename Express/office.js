const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://sandhya488495:C2yUnOYTrZeuK7Q9@cluster0.ajpou.mongodb.net/  ';
const client = new MongoClient(url);
// Database Name
const dbName = 'office';

async function insertData(){
    let empData ={
        "name":"sandhya",
        "mobile":"9867234234",
        "address":"mugappair",
    }
    await client.connect();
    const db = client.db(dbName);
    const collection = await db.collection('employee');
    await collection.insertOne(empData);
    console.log('Record inserted');
}


insertData();
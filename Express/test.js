var express = require("express") 
var app = express();
app.use(express.json()); 
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://sandhya488495:C2yUnOYTrZeuK7Q9@cluster0.ajpou.mongodb.net/ ';
const client = new MongoClient(url);
// Database Name
const dbName = 'staff';
app.post("/createdetails",async(req,res)=>{
    await client.connect();
        let db = client.db(dbName);
        await db.collection('userdetails').insertMany(req.body);
        res.status(200).json({"message":"userdetails inserted"})
   })
app.get("/listdetails",async(req,res)=>{

    await client.connect();
    let db = client.db(dbName);
    let list = await db.collection("userdetails").find({}).toArray();
    res.status(200).json(list)
   })
app.get("/listproductname/:productname",async(req,res)=>{
    await client.connect();
    let {productname}=req.params;
     let db = client.db(dbName);
     let list = await db.collection("products").find({"productname":productname}).toArray();
     res.status(200).json(list)
})
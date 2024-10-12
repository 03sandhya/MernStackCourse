var express = require("express") 
var app = express();
app.use(express.json()); 
const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb+srv://sandhya488495:C2yUnOYTrZeuK7Q9@cluster0.ajpou.mongodb.net/ ';
const client = new MongoClient(url);
// Database Name
const dbName = 'staff';
app.post("/createproduct",async(req,res)=>{
    await client.connect();
        let db = client.db(dbName);
        await db.collection('products').insertMany(req.body);
        res.status(200).json({"message":"Products inserted"})
   })
app.get("/listproductprice/:productprice",async(req,res)=>{
    await client.connect();
    let {productprice}=req.params;
     let db = client.db(dbName);
     let list = await db.collection("products").find({"productprice":productprice}).toArray();
     res.status(200).json(list)
})
app.listen(8080,() => {
    console.log("server started");
});
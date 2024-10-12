var express = require("express") 
var app = express();
app.use(express.json()); 
const { MongoClient, ObjectId } = require('mongodb');
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
app.get("/listproducts",async(req,res)=>{

    await client.connect();
    let db = client.db(dbName);
    let list = await db.collection("products").find({}).toArray();
    res.status(200).json(list)
   })
app.get("/listproductname/:productname",async(req,res)=>{
    await client.connect();
    let {productname}=req.params;
     let db = client.db(dbName);
     let list = await db.collection("products").find({"productname":productname}).toArray();
     res.status(200).json(list)
})
app.get("/listproductprice/:productprice",async(req,res)=>{
    await client.connect();
    let {productprice}=req.params;
     let db = client.db(dbName);
     let list = await db.collection("products").find({"productprice":parseInt(productprice)}).toArray();
     res.status(200).json(list)
})

/*app.get("/condition/:productprice",async(req,res)=>{
    //await client.connect();
    let {productprice}=req.params;
     let db = client.db(dbName);
     let list = await db.collection("products").find({"productprice": { $gt: parseInt(productprice) }}).toArray();
     res.status(200).json(list)
})*/

//deleting from database
app.delete("/deletebyproductname",async(req,res)=>{
    let {productname}=req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection('products').deleteOne({"productname":productname});
    res.status(200).json({"message":"Product deleted"})
    //give in postman--> http://localhost:3000/deletebyproductname?productname=iphone  

})
app.put("/update",async(req,res)=>{
    let {productname,productprice}= req.query;
    await client.connect();
    let db = client.db(dbName);
    await db.collection('products').updateOne({"productname":productname},{$set:{"productprice":productprice}});
    // give the value to be updated after set variable  (select put method)
    //give in postman--> http://localhost:3000/update?productname=pendrive&productprice=9500
    res.status(200).json({"message":"Product price updated"})
})
app.post("/update",async(req,res)=>{
    let {productname,productprice}= req.body;
    await client.connect();
    let db = client.db(dbName);
    await db.collection('products').updateOne({"productname":productname},{$set:{"productprice":productprice}});
    res.status(200).json({"message":"Product price updated"})
    //give in postman-->http://localhost:3000/update   (select post method only)
    //body-->raw-->{"productname":"applewatch","productprice":77777}
})
//retrieve data based on id (id is present in mongodb)
app.get("/getbyid",async(req,res)=>{
    let {id}=req.query;
    await client.connect();
    let db = client.db(dbName);
    let data=await db.collection("products").find({"_id":new ObjectId(id)}).toArray();
    res.json(data)
    //    http://localhost:3000/getbyid?id=66ddafacaab69b0bd2e38ec2
    //  in params --> key id , value la copy id  from mongo
    //  const { MongoClient, ObjectId } = require('mongodb');   automatically comes
})

app.listen(3000,() => {
    console.log("server started"); 
});


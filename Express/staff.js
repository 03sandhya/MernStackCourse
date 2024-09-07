var express = require("express") 
    // require is like import 
// express is built on functions concept 
var app = express();
app.use(express.json()); // middleware function
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://sandhya488495:C2yUnOYTrZeuK7Q9@cluster0.ajpou.mongodb.net/ ';
const client = new MongoClient(url);
// Database Name
const dbName = 'staff';
app.post("/createTeacher",async(req,res)=>{
    
   /* let body = req.body;
    let data = {
        'name':body['name'],
        'email':body['email'],
        'password':body['password'],
        'address':body['address'],
        'mobile':body['mobile'],

    }*/
    // or use this   let {name,email,password,mobile}=req.body;
    //let data={'name':name,'email':email,'password';password,'mobile':mobile}
   

        await client.connect();
        let db = client.db(dbName);
        await db.collection('teachers').insertMany(req.body);
        //if u want to pass array of values, use await db.collection('teachers').insertMany(req.body);
        //in postman give array of values like [{'nm':'sa','ph':34},{'nm':'sa','ph':34},{'nm':'sa','ph':34}]
        res.status(200).json({"message":"Created a record"})
   
})

app.get("/listemp",async(req,res)=>{

     await client.connect();
     let db = client.db(dbName);
     let list = await db.collection("teachers").find({}).toArray();
     res.status(200).json(list)
    
})
//path variable
app.get("/listemployeename/:name",async(req,res)=>{
    await client.connect();
    let {name}=req.params;
     let db = client.db(dbName);
     let list = await db.collection("teachers").find({"name":name}).toArray();
     res.status(200).json(list)
})
//login api
app.post("/login",async(req,res)=>{
    await client.connect();
    let {name,password}=req.body; //password is conidential use req.body
     let db = client.db(dbName);
     let list = await db.collection("teachers").find({"email":name,"password":password}).toArray();
     if(list.length>0){
        res.json({"msg":"you are correct"})
        res.status(200).json(list)
     }else{
        res.status(400).json({"msg":"you are wrong"})
     }
    
})

app.listen(3000,() => {
    console.log("server started");
});




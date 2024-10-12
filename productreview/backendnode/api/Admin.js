var express = require('express');
var router = express.Router();
const { Mongodb,MongoClient,ObjectId} = require('mongodb');
var router = express.Router();

const mongodbUrl = 'mongodb+srv://programmerpraveenkumar:SuPcrULSyxtz4iV7@cluster0.twdnbua.mongodb.net/';

const client = new MongoClient(mongodbUrl);
const dbName ='product-review';
// http://localhost:8080/admin/login
router.post("/login",(req,res)=>{
let{email,password} = req.body;

})

// http://localhost:8080/admin/getUnApprovedList
router.get("/getUnApprovedList",async(req,res)=>{
    await client.connect();
    let db=client.db(dbName);
   let list = await  db.collection("product").find({"isApproved":"0"}).toArray();
    res.json(list);
    
})

// http://localhost:8080/admin/approveReview
router.post("/approveReview",async(req,res)=>{
    try{
        let{id} = req.body;
        await client.connect();
        let db=client.db(dbName);
         await  db.collection("product").updateOne({"_id":ObjectId.createFromHexString(id)},{$set:{"isApproved":"1"}});
        res.json({"msg":"approved!!!"})
    }
    catch(e){
        res.status(400).json({"msg":e})
    }
    
})

module.exports = router;

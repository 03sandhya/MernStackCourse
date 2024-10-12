var express = require('express');
const { Mongodb,MongoClient,ObjectId} = require('mongodb');
var router = express.Router();

const mongodbUrl = 'mongodb+srv://sandhya488495:C2yUnOYTrZeuK7Q9@cluster0.ajpou.mongodb.net/';
const client = new MongoClient(mongodbUrl);
const dbName ='product-review';
router.post("/createProduct",async(req,res)=>{
    let{category,reviewText,name} = req.body;
    
    let data = {
        "name":name,
        "category":category,
        "reviewText":reviewText,
        "filename":req.files.img.name,
        "isApproved":0
    }
    let path = process.cwd()+"/uploads/"+req.files.img.name;
    req.files.img.mv(path,(err)=>{});
    await client.connect();
    let db=client.db(dbName);

    await db.collection("product").insertOne(data);
    res.json({"msg":"product added"});
    })


router.post("/addReviewForProduct",async(req,res)=>{
let{id,reviewText,rating} = req.body;

let data = {
    "product_id":id,
    "rating":rating,
    "reviewText":reviewText,
    "isApproved":0
} 
await client.connect();
let db=client.db(dbName);
await db.collection("review").insertOne(data);
res.json({"msg":"review added .."});
})


// http://localhost:8080/Product/getAllApprovedProducts
router.get("/getAllApprovedProducts",async (req,res)=>{
    await client.connect();
    let db=client.db(dbName);
   //let list = await  db.collection("product").find().skip(2).limit(10).sort({"name":1}).toArray();
   let list = await  db.collection("product").find({"isApproved":1}).toArray();
    res.json(list);
})

router.get("/getProductDetailById",async (req,res)=>{
    let {id} = req.query;
    await client.connect();
    let db=client.db(dbName);
    let product = await db.collection("product").findOne({"_id":ObjectId.createFromHexString(id)});
    let review = await db.collection("review").find({"product_id":id}).toArray();
    res.json({"product":product ,"review":review});
})

module.exports = router;



/*var express = require('express')
var router=express.Router();
const { MongoClient,ObjectId } = require('mongodb');
// Connection URL
const url = 'mongodb+srv://sandhya488495:C2yUnOYTrZeuK7Q9@cluster0.ajpou.mongodb.net/ ';
const client = new MongoClient(url);
// Database Name
const dbName = 'product-review';
// in postman -->http://localhost:8080/Product/getallproducts
router.get("/getallproducts",async(req,res)=>{
    await client.connect();
    let db=client.db(dbName);
    let productlist= await db.collection("product").find({}).sort({"name":1}).skip(1).limit(3).toArray();
    res.status(200).json(productlist)
    console.log("review list fetched ",productlist);

   //let productlist=[{"name":"product1"},{"name":"product18"},{"name":"product12"},{"name":"product3"}] 
  // res.json(productlist);
})
router.get("/getproductbyid",(req,res)=>{
    let {id}=req.query;
})
router.post("/addreviewforproduct",async(req,res)=>{
    let {category,reviewtext,name}=req.body;
    let data={"name":name,"category":category,"reviewtext":reviewtext}
    await client.connect();
    let db=client.db(dbName);
    await db.collection("product").insertOne(data);
    res.json({"msg":"Product is added for review"})

    let path = __dirname + "/uploads/" + req.files.name ;
    req.files.img.mv(path,(err)=>{

    }) ;

    
    //db connect details
})
module.exports=router;   */

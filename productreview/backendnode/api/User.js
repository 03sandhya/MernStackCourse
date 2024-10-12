var express = require('express')
var router=express.Router();
// in postman -->http://localhost:8080/user/login
router.post("/login",(req,res)=>{
    let {email,password}=req.body;
    res.json({"msg":"login test"})
    //db connect details
})
router.post("/register",(req,res)=>{
    let {email,password,name,mobile}=req.body;
    res.json({"msg":"registered"})
})

module.exports=router;


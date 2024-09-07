var express=require("express");
var app=express();
app.use(express.json()); //middleware function
app.get("/myname", (req,res)=>{
    res.json({"msg": "sandhya"});


}) ;
app.post("/myname", (req,res)=>{
    res.json({"msg": "rose"});
}) ;
app.post("/login",(req,res)=>{
    //let email=req['query']['email'];
    //let pwd=req['query']['password'];
    //destructuring in javascript avoid above code
    let {email,pwd}=req['query'];
    if(email=='sandhya@gmail.com' && pwd=='sandy'){
        res.json({"msg":"you are correct"})
    }else{
        res.json({"msg":"you are wrong"})
    }
    //console.log(email,pwd);
    res.json({"msg":"login success"})
});
app.post("/register",(req,res)=>{
    //let {name,email,pwd,address}=req['query'];
    let {name,email,pwd,address}=req.body;
    if(name=='' || email=='' || pwd==''){
        res.json({"msg":"Error, it is empty"})
    }else{
        res.json({"msg":"Registered successfully"})
    }
})
app.post("/add",(req,res)=>
{
    let{num1,num2}=req.body;
    res.json({"valueadded":num1+num2})

});

app.listen(8080,()=>{
    console.log("server started");
});
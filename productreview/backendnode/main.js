var cors = require('cors');
var express = require('express');
const fileUpload = require('express-fileupload');
var app = express();
app.use(cors())
app.use(express.json());
app.use(fileUpload());
app.use('/upload', express.static('uploads'))
app.use(express.static('public'))

var user=require("./api/User")
app.use("/User", user)

var prod=require("./api/Product")  //prod is variable, /api/Product is Product.js  , /Product is we give in url localhost
app.use("/Product", prod)

var admin = require("./api/Admin");
app.use("/Admin",admin)



const portno = 8080
app.listen(portno,()=>{
    console.log(`server is running on ${portno}`);
})
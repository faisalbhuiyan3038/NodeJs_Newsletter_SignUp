const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    var Name = req.body.Name;
    var Email = req.body.Email;
    console.log(Name+"/n"+Email);
})

app.listen(3000, function(){
    console.log("Server is up and running at port 3000");
})

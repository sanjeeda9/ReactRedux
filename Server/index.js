var express=require("express");
var path=require("path");
var app=express();
app.get('/*',(req,res)=>{
  //res.send("hello san");
  //sending html file
  res.sendFile(path.join(__dirname,'./index.html'));
});
app.listen(3000,()=>console.log("Running localhost on 3000"));

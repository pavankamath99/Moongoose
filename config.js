var app=require('./config/server.config');
var express=require('express');
var bodyparser=require('body-parser');

var app=express();
app.use(body_parser.json());

app.get('/',function(req , res)
{
res.send('welcome to Express!');
});

app.post('/',function(req , res){
 let stud_name=req.body.stud_name;
 res.send(stud_name+'welcome to MCA Dept!');
});
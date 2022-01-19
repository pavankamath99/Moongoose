var app = require('./config/server.config');
var Register = require('./models/models.employees');
const express = require("express");
//const app = require("../app");



app.post('/register', function(req, res, next) {
    var registerEmployee = new Register(req.body);
    registerEmployee.save(function(err,docs) {
        if (err) {
            return next(err);
        } else {
            res.json(registerEmployee);
            console.log("DOCS", docs);
        }
    });
});

app.post('/update', function(req, res, next) {
    Register.updateOne({ name: req.body.name }, { age: req.body.age }, function(err, docs, data)  {
        if (err) {
            return next(err);
        } else {
            res.json(data);
            console.log("DOCS", docs);
        }
      })
      
  });
  app.post("/delete", function(req, res, next)  {
    //const emp = await employee
    Register.deleteOne({ name: req.body.name }, function(err, docs, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
          console.log("DOCS", docs);
        }
      })
      //.clone();
  });
  app.get("/", async (req, res) => {
     Register.find(function(err, data, docs){
        if (err) {
            return next(err);
        } else {
        res.json(data);
          console.log("DOCS", docs); 
        }
    });
    //res.json(emp);
  });
app.post('/update_student', function(req, res, next) {
    //var updateStudent = new Register();
    var email = req.body.email;
    var firstName = req.body.firstName;
    Register.updateOne({ "email": email }, { "firstName": firstName }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});
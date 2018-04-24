var express = require("express");
var app = express();

// "/" => "Hi there"

app.get("/", function(req, res){
    res.send("Hi there");
});

app.get("/bye", function(req, res){
    res.send("Goodbye");
});

app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog!");
    res.send("MEOW");
});

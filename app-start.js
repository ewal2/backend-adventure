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

app.get("/r/:subredditName", function(req, res){
    console.log(req.params);
   res.send("Welcome to Subreddit!"); 
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
      console.log(req.params);
   res.send("Welcome to the comments page!"); 
});

app.get("*", function(req, res){
    res.send("You are a star!");   
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});

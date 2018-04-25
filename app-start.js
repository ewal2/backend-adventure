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

-------------------------------------------------------
    var express = require("express");
var app = express();

app.get("/speak/pig", function(req, res){
    res.send("The pig says 'Oinnk'");
});

app.get("/", function(req, res){
    res.send("Hi there, welcom to my assigment!");
});

app.get("/speak/cow", function(req, res){
    res.send("The cow says 'Moo'");
});

app.get("/speak/dog", function(req, res){
    res.send("The dog says 'Woof Woof!'");
});

app.get("/repeat/hello/3", function(req, res){
    res.send("hello hello hello");
});

app.get("/repeat/hello/5", function(req, res){
    res.send("hello hello hello hello hello");
});

app.get("/repeat/hello/5", function(req, res){
    res.send("hello hello hello hello hello");
});

app.get("/repeat/blah/2", function(req, res){
    res.send("blah blah");
});


app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");   
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});

------------------------------------------------------
    var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assigment!");
});

app.get("/speak/:animal", function(req, res){
  var sounds = {
      pig: "Oink",
      cow: "Moo",
      dog: "Woof Woof",
      cat: "I hate you human",
      goldfish: "..."
  }
  
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
  
    res.send("The " + animal + " says '" + sound + "'");
});


app.get("/repeat/:message/:times", function(req, res){
   var message = req.params.message;
   var times = Number(req.params.times);
   var result = "";
   
   for(var i=0; i < times; i++){
       result += message + " ";
   }
   res.send(result);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");   
});

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("Now serving your app!");   
});

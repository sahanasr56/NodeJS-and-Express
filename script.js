const express=require('express');
const app=express();

app.set("view engine", "ejs");
app.use(express.static("./public"))

app.get('/', function(req,res){
    res.render("index", {age:21})
})

app.get('/error', function(req,res){
    throw Error("Finally....");
})

app.use(function(err,req,res,next){
    if(res.headersSent){
        return next(err)
    }
    res.status(500);
    res.render("error", {err})
})

app.listen(3000);
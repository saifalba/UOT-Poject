const express=require('express');
const path=require('path');
const HOSTNAME= process.env.HOSTNAME || "localhost";
const PORT= process.env.PORT || 3000;
const app=express();

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.sendFile(path.join(__dirname+'/index.html'));

})

app.get('/css/main.css',(req,res)=>{
    res.sendFile(path.join(__dirname+'/css'+'/main.css'))
})

app.get('/imgs/left.png',(req,res)=>{
    res.sendFile(path.join(__dirname+'/imgs'+'/left.png'))
})

app.get('/imgs/logo.jpg',(req,res)=>{
    res.sendFile(path.join(__dirname+'/imgs'+'/logo.jpg'))
})

app.get('/css/404.css',(req,res)=>{
    res.sendFile(path.join(__dirname+'/css'+'/404.css'))
})

app.get('/about',(req,res)=>{
   res.statusCode=200;
   res.sendFile(path.join(__dirname+'/about.html')); 
});

app.all('*',(req,res)=>{
    res.statusCode=404;
    res.sendFile(path.join(__dirname+'/404.html'));
})




app.listen(PORT);

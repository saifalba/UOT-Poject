const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path=require('path');
const fs=require('fs');
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

app.get('/projectlists',(req,res)=>{
    res.statusCode=200;
    res.sendFile(path.join(__dirname+'/projects'+'/info.json'));
})

app.get('/projects/patient_manager',(req,res)=>{
    res.statusCode=200;
    res.download(path.resolve(__dirname+'/projects/patient_manager'));
})

app.get('/projects',(req,res)=>{
    res.statusCode=200;
    res.sendFile(path.join(__dirname+'/projects.html'));
})

//app.get('/test',(req,res)=>{
//    res.statusCode=200;
//    res.sendFile(path.join(__dirname+"/test.html"))
//})

app.get('/projects/logo/th-4050477786.jpg',(req,res)=>{
    res.statusCode=200;
    res.sendFile(path.join(__dirname+'/projects'+'/logo/th-4050477786.jpg'));
})

app.all('*',(req,res)=>{
    res.statusCode=404;
    res.sendFile(path.join(__dirname+'/404.html'));
})



app.listen(PORT);

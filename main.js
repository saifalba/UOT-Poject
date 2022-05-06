const express=require('express');
const path=require('path');
const HOSTNAME= process.env.HOSTNAME || "localhost";
const PORT= process.env.PORT || 3000;
const app=express();

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.sendFile(path.join(__dirname+'/index.html'));
})


app.all('*',(req,res)=>{
    res.statusCode=404;
    res.sendFile(path.join(__dirname+'/404.html'));
})




app.listen(PORT);

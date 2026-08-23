const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Authentication middleware called");
    next();
})

app.use('/welcome',(req,res,next)=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.");
    console.log("Access to the user who have valid credentials for party");
    next();
})

app.get('/welcome',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send('<h1>Welcome Guest</h1>');
})

app.listen(3000);
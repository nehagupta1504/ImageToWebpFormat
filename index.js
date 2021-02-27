const express = require('express');
const app = express();
var webpImage = require('./convertImage');

app.get('/api', (req,res)=>{
    res.send("Hello!!");
    var imageURL = req.param('imageurl');
    console.log(imageURL);
    webpImage(imageURL);
});

app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})
const express = require('express');
const router = express.Router();
const data = require('../DB/data')

router.route('/user')
.get((req,res)=>{
    res.status(200).send(data);  
})
.post((req,res)=>{
    res.send(req.body);
});

router.route('/user/:id')
.patch((req,res)=>{
    //res.send("Updated");
    res.send(`Updated ID: ${req.params.id}`)
   
}) 

.delete((req,res)=>{
    //res.send("Deletd");
    res.send(`Delted ID: ${req.params.id}`)
  
}) ; 
module.exports = router;

// function myMiddleware(req,res,next){
//     console.log("Reached Middleware");
//     next();
// }
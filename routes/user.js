const express = require('express');
const router = express.Router();
const data = require('../DB/data')

router.get('/user',(req,res)=>{
    res.status(200).send(data);  
});
router.post('/user',(req,res)=>{
    res.send(req.body);
}) ;  

router.patch('/user/:id',(req,res)=>{
    //res.send("Updated");
    res.send(`Updated ID: ${req.params.id}`)
   
}) ; 

router.delete('/user/:id',(req,res)=>{
    //res.send("Deletd");
    res.send(`Delted ID: ${req.params.id}`)
  
}) ; 
module.exports = router;

// function myMiddleware(req,res,next){
//     console.log("Reached Middleware");
//     next();
// }
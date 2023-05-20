const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/user')

app.use(express.json());

app.use('/api/v1',routes)

// app.use(myMiddleware);


// app.post('/user',(req,res)=>{
//     res.send(req.body);
// }) ;  

// app.patch('/user',(req,res)=>{
//     res.send("Updated");
// }) ; 

// app.delete('/user',(req,res)=>{
//     res.send("Deletd");
// }) ; 

// function myMiddleware(req,res,next){
//     console.log("Reached Middleware");
//     next();
// }


app.listen(PORT,()=>{
    console.log(`API is running on port ${PORT}`);

})
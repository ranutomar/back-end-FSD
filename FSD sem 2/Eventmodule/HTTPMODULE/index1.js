
import express from 'express';
import fs from 'fs';
const app =express();1
const PORT=3000;
app.get('/',(req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        if (err){
            res.status(500).send('error reading files');
            return;
        }
        else{
            res.send(data);
        }
    })
})
app.get('/about',(res,req)=>{})
fs.readFile('./pages/contact.html','utf-8',(err,data)=>{}

)



app.get('/contact',(req,res)=>{})
    app.listen(PORT,()=>{

})
//you have create a portfolio about yourself using express
//git hub repo-//fsd 24//class task-
//assignment-asssignnet//http modulgit.ingone=e//fsmodule//
//product:rest api
//portfolio using express js
//git.ignore=node_modules.env




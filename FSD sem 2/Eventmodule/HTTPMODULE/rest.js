import express from 'express';
const app = express();
app.use(express.json());
let users=[
    { id: 1, name: "Nirjara", email: "nirjara@example.com" },
    { id: 2, name: "Pavni", email: "pavni@example.com" }
];

//get : get request to fetch from all the users
app.get('/users',(req,res)=>{
    res.json(users);
});

app.post('/users',(req,res)=>{
const user={
    id:users.length+1,
    name:req.body.name,
    email:req.body.email
};
users.push(user);
res.json(user);
});
//put : put request to update the pull request
app.put('/users/:id',(req,res)=>{
    let user=users.find(u=>u.id==req.params.id);
    user.name=req.body.name;
    user.email=req.body.email;
    res.send("user updated successfully");
     
    res.json(user);
    //delete: request to delete the user 
    app.delete('/users/:id',(req,res)=>{
        users=users.filter(u=>u.id!=req.params.id);
        res.send(" user is successfully ")
});

app.listen(8000,()=>{
    console.log('Server is running on port http://localhost:8000');
})});
//Create a PRODUCT REST API and test all method in THUNDER CLIENT
//work it on approx 100 products and test all the methods in THUNDER CLIENT
//Structure
//1. create folder productrestapi
//2. create index.js file
//3.create a product.json
//4.install npm init :package.json
//5.install express: npm i express :package_lock.json

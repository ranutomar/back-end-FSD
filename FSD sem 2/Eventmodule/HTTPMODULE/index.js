import express from 'express';
const app = express();
app.use(express.json());

let users=[
    {id:1, name:"Parth",email:"Parth713@gmail.com"}
];
//GET:get request to fetch all users
app.get('/users',(req,res)=>{
    res.json(users);
})
//Post:post request to create a new user
app.post('/users',(req,res)=>{
    const user={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email
    };
users.push(user);
res.json(user);
})
app.listen(8000,()=>{
    console.log('server is running on port 8000 https://localhost:8000')
})
//PUT : put request to update a user
app.put("/users/:id", (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({message: 'User not found'});
    }
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});


//Delete : delete request to delete a user
app.delete('/users/:id', (req, res) => {
    const userExists = users.some(u => u.id === parseInt(req.params.id));
    if (!userExists) {
        return res.status(404).json({message: 'User not found'});
    }
    users = users.filter(u => u.id !==req.params.id);
    res.json({message: 'User deleted successfully'});
});

app.listen(8000, () => {
    console.log('Server is running on port 8000 http://localhost:8000');
});
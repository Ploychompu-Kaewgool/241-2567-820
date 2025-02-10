const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const port = 8000;

// เก็บ user ที่ส่งมาจาก client
let users = [];
let counter = 1


// path = GET /users
app.get('/users', (req, res) => {
    res.json(users);
});

// path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter;
    counter += 1;
    users.push(user);
    res.json({
        message : "User created",        
        user : user
    });
});

// path = PUT /user/:id
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    // หา index ของ user ที่ต้องการแก้ไข
    let selsctedIndex = users.findIndex(user =>user.id == id )
    // update user
    if(updateUser.firstname){
        users[selsctedIndex].firstname = updateUser.firstname;
    }

    if(updateUser.lastname){
        users[selsctedIndex].lastname = updateUser.lastname;
    }
    

    res.json({
        message : "User updated",
      data:{
        user : updateUser,
        indexUpdate : selsctedIndex
      }
    });
});

// path = DELETE /user/:id
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    // หา index ของ user ที่ต้องการลบ
    let selsctedIndex = users.findIndex(user =>user.id == id)

    users.splice(selsctedIndex, 1);   
    res.json({
        message : "User deleted",
        indexDeleted : selsctedIndex
    });
});

app.listen(port, (req, res) => {
    console.log('Server is running on port' + port);
});


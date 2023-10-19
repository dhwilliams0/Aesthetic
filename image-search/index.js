// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// // Load environment variables from .env file
// require('dotenv').config();

// app.get('/e', (req, res) => {
//   res.send('Hello, Express and MySQL!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

 const express = require('express');
 const app = express();

//  const mysql = require("mysql");

 const db = require('./models');

 const  {User} = require('./models');

 app.get('/insert', (req,res) => {
    User.create({
        username: "huey",
        email:"@mail",

    }).catch((err) => {
        if(err){
            console.log(err);
        }
    })
    res.send("insert")
 })
//  = mysql.createConnection({
//   user: "postgres",
//   host: "localhost",
//   password: "postgres",
//   database: "postgres",
//  });


 db.sequelize.sync().then((req) => {
 app.listen(3001, () => {
  console.log("server running");
 });
});
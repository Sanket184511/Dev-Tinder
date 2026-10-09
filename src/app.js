const express = require('express');
const app = express();


app.use("/login",(req,res)=>{
    res.send("Login Page");
});

app.use("/",(req,res)=>{
    res.send("Home Page");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
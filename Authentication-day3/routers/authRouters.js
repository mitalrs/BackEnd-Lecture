const express = require("express"); 
const router = express.Router();
const bcrypt = require("bcrypt");
const {validateName,
  validateEmail,
  validatePassword} = require("../utils/validator.js");

let users ={}
router.post("/signup", async (req,res)=>{
  try{
    const { name, email, password } = req.body;
    // console.log(req);
    console.log(name, email, password);
    const userExist = users.hasOwnProperty(email);

    if(userExist){
      return res.send("user exists")
    }
    if(!validateName(name)){
      return res.send("Invalid name");
    }
    if(!validateEmail(email)){
      return res.send("Invalid email");
    }
    if(!validatePassword(password)){
      return res.send("Invalid password");
    }

    const Epassword = await bcrypt.hash(password, 10);

    console.log("password", Epassword);

    
    users[email]={name, password:Epassword};
    console.log(users[email]);
    return res.send("Success");
  } catch(e){
    res.send(e);
  }
})

router.post("/signin", async (req,res)=>{
  try{
    const {email, password} = req.body;
    console.log(users);
    const userExist = users.hasOwnProperty(email);
    
// console.log(users[email]);
    if(!userExist){
      return res.send("user does not exist");
    }

    const passMatch = await bcrypt.compare(password, users[email].password);

    if(!passMatch){
      return res.send("password missmatch");
    }
    res.send("success");
  }catch(e){
    
  }
})

module.exports =  router;
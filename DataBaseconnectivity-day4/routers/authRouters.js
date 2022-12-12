const express = require("express"); 
const router = express.Router();
const bcrypt = require("bcrypt");
const createDB = require("../config/db")
const User = require("../models/userModels");
const {
  validateName,
  validateEmail,
  validatePassword
} = require("../utils/validator.js");

createDB.sync().then(()=>{
  console.log("DB is rinning");
});



// let users ={}
router.post("/signup", async (req,res)=>{
  try{
    const { name, email, password } = req.body;
    // console.log(req);
    // console.log(name, email, password);
    const userExist = await User.findOne({
      where: {
        email
      }
    });

    if(userExist){
      res.send("user exists")
    }
    if(!validateName(name)){
      res.send("Invalid name");
    }
    if(!validateEmail(email)){
      res.send("Invalid email");
    }
    if(!validatePassword(password)){
      res.send("Invalid password");
    }

    const Epassword = await bcrypt.hash(password, 10);

    // console.log("password", Epassword);

    
    // users[email]={name, password:Epassword};

    const saveToDB = {
      name, email,  password:Epassword
    }
    console.log(saveToDB)
    const createdUser = await User.create(saveToDB)


    // console.log(User[email]);
    return res.send(createdUser);
  } catch(e){
    res.send(e);
  }
})

router.post("/signin", async (req,res)=>{
  try{
    const {email, password} = req.body;
  
    // const userExist = users.hasOwnProperty(email);
    const userExist = await User.findOne({
      where: {
        email
      }
    });
    
// console.log(users[email]);
    if(!userExist){
      res.send("user does not exist");
    }

    const newPassword = userExist.dataValues.password;
    // console.log(userExist);
    const passMatch = await bcrypt.compare(password, newPassword);

    if(!passMatch){
      res.send("password missmatch");
    }
    res.send("success");
  }catch(e){
    
  }
})

module.exports =  router;
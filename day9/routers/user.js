const express = require('express');

const router = express.Router();
const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const{
    validateName,
    validateEmail,
    validatePassword
} = require('../utils/validators');

router.post("/signup", async (req, res)=>{
    try{
        const { name, email, password, isSeller } = req.body;

        const existingUser = await User.findOne({ where: { email }});
        if(existingUser){
            return res.status(403).json({ err: "User already exists"})
        }

        if(!validateName(name)){
            return res.status(400).json({ err: "Name validate failed"})
        }

        if(!validateEmail(email)){
            return res.status(400).json({ err: "Email validate fails"})
        }

        if(!validatePassword(password)){
            return res.status(400).json({ err: "password validation fails"})
        }

        const hashPassword = await bcrypt.hash(password, (saltOrRounds = 10));
        const user = {
            email,
            name,
            isSeller,
            password: hashPassword
        };

        const createdUser = await User.create(user)

        return res.status(201).json({
            message: `Welcome ${createdUser.name}`,

        })
    }catch(e){
        return res.status(500).send(e);
    }
});

router.post('/signin', async(req, res)=>{
    try{
        const { email, password } = req.body;
        if(email.length === 0){
            return res.status(400).json({
                err: "provide right email"
            })
        }
        if(password.length === 0){
            return res.status(400).json({
                err: "provide right password"
            })
        }

        const existingUser = await User.findOne({ where: { email }});
        if(!existingUser){
            return res.status(404).json({
                err: "User not found"
            })
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password)
        if(!passwordMatch){
            return res.status(400).json({
                err: "email or pass mismatched"
            })
        }

        const payload = { user: { id: existingUser.id }};
        const bearertoken = await jwt.sign(payload, "SECRET MESSAGE", {
            expiresIn: 360000,
        });
        res.cookie('t', bearertoken, { expire: new Date() + 9999 })

        return res.status(200).json({
            bearertoken
        })
    }catch(e){
        return res.status(500).send(e);
    }
})
module.exports = router;



// vedio timestand- 33:31
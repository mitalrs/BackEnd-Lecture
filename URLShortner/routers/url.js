const express = require('express');
const router = express.Router();
const { nanoid } = require("nanoid");
const createDB = require('../config/db');
const URL = require('../models/urlModel');


//post api call
router.post("/", async (req, res)=>{
    try{
        const { longUrl } = req.body;
        //longUrl->id
        const shortId = nanoid(4)
    }catch(e){
        console.error(e)
        return res.status(500).send(e);
    }
})

module.exports = router;
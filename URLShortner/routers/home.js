const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', (req, res) =>{
   const htmlPath= path.join(__dirname, 'public', 'index.html');
   res.sendFile(htmlPath);
   console.log('__dirName', __dirname,htmlPath)

   res.sendFile(htmlPath);
});

router.post('/', ()=>{})
router.delete('/', ()=>{})

module.exports = router;
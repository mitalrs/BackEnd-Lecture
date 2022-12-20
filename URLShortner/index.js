const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.static("public"));

const PORT = 2020;

app.listen(POST,()=>{
    console.log("app is runnig on port: ", PORT);
})
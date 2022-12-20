const express = require('express');
const app = express();

//middlewares: The role of middleware is to enable and ease access to those back-end resources. Middleware programs will typically provide a messaging service for applications to transfer data, such as simple object access protocol (SOAP), representational state transfer (REST) or JavaScript object notation (JSON).
//middleware function that called before making the API call
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const PORT = 2020;

app.listen(POST,()=>{
    console.log("app is runnig on port: ", PORT);
})
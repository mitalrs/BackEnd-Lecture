const express = require('express');
const app = express();
const shorturl = require('./routers/url')
const homeRoutes = require('./routers/home')

//middlewares: The role of middleware is to enable and ease access to those back-end resources. Middleware programs will typically provide a messaging service for applications to transfer data, such as simple object access protocol (SOAP), representational state transfer (REST) or JavaScript object notation (JSON).
//middleware function that called before making the API call
app.use(express.json()); // it's basically accept application/json for express server
app.use(express.static("public")); // we are put ower html in to public folder
app.use(express.urlencoded({ extended: false })); //u can accept req.body

const PORT = 2020;

app.use('/urlapi',shorturl);
app.use('/', homeRoutes);

app.listen(PORT,()=>{
    console.log("app is runnig on port: ", PORT);
})
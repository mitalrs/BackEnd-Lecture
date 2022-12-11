//import the express package
const express = require("express"); 
const routes = require("./routes/authRoutes.js");

const app =  express(); //express pkg return a function 

//accept json
app.use(express.json());

//midelware are function that called before ur function return api it's called
//express appliction how to be accept the body? ans:
app.use(express.urlencoded({ extended: true}));

//use html
//the public is the folder
app.use(express.static("public"));

const PORT = 1337; //any numericx for port

app.use("/api/v1", routes);

//listen on this port
app.listen(PORT, ()=>{
  console.log('app is runnig at port: ',PORT);
}); 
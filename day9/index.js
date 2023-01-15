const express = require('express');
const app = express();
const { connectedDB } = require('./config/db');
const userRoutes = require('./routers/user');

//middleware
app.use(express.json());
app.use(express.static('content'));
app.use(express.urlencoded({ extends: false }));


const PORT = 1313;

app.use('/api/v1/user',userRoutes)

app.listen(PORT, ()=>{
    console.log('server is running');
    connectedDB();
})
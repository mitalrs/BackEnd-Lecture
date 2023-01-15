const { Sequelize } = require('sequelize');

const createdDB = new Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './config/db.sqlite'
});

const connectedDB = () =>{
    createdDB.sync().then(()=>{
        console.log('connected to db');
    })
    .catch((e)=>{
        console.log('db connection faile', e);
    })
}

module.exports = { createdDB, connectedDB };

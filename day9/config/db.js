const { Sequelize } = require('sequelize');

const createDB = new Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './config/db.sqlite'
});

const connectedDB = () =>{
    createDB.sync().then(()=>{
        console.log('connected to db');
    })
    .catch((e)=>{
        console.log('db connection faile', e);
    })
}

module.exports = { createDB, connectedDB };

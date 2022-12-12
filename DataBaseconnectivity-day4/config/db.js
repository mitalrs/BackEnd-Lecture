const { Sequelize } = require("sequelize");


//new for create a object ||  passing database name,user,pasword || tellling which database going to use || where put the .sql file
const createDB = new Sequelize("test-db","user", "pass",{
    dialect: "sqlite",
    host:"./config/db.sqlite",
});

module.exports = createDB;
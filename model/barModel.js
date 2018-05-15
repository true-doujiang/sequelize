const Sequelize = require('sequelize');
const sequelize = require('./db');


const Bar = sequelize.define('bar', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    deadline: Sequelize.DATE
});

Bar.sync({force: true});
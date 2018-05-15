const Sequelize = require('sequelize');
const sequelize = require('./db');

const Project = sequelize.define('project', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
});

const Task = sequelize.define('task', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    deadline: Sequelize.DATE
});




   console.log('over');
   
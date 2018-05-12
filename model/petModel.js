const Sequelize = require('sequelize');
const sequelize = require('./db');


const Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        //field: 'id',
        //autoIncrement: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
        timestamps: false
});

module.exports = Pet;
// Pet.sync({force: true});
// console.log('over');


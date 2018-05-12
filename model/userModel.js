const Sequelize = require('sequelize');
const sequelize = require('./db');


const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER(15),
        filed: 'id',
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        filed: 'name'
    }, 
    age: {
        type: Sequelize.INTEGER,
        filed: 'age'
    }
}, {
    freezeTableName: true,
    timestamps: false  //false  禁止自动生成createAt updateAt字段
});

module.exports = User;

// var user = User.sync({force: true});

// User.create({
//     id: 5,
//     name: 'wuxi',
//     age: 10
// }).then(function(p) {
//     //console.log(p);
//     console.log('create success: ' + JSON.stringify(p));
// }).catch(function(err) {
//     console.log('insert faile: ' + err);
// });


// User.update({
//     name: 'shanghai',
//     age: 11
// }, {
//     'where': {
//         'id': 1
//     }
// });


// User.destroy({
//     'where': {
//         'id':2
//     }
// });


// User.findAll().then(function (result) {
//        for (let u of result) {
//            //console.log(u);
//            console.log(`${u.id}: ${u.name}`);
//        }
//    }).catch(function (err) {
//        console.error('查询错误');
//    });




// let sql = 'select * from t1';
// sequelize.query(sql);

// console.log('over');


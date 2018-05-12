const User = require('../model/userModel');

const findAll = function () {

    User.findAll().then(function(result) {
        for (const p of result) {
            console.log(p);
        }
    }).catch(function(err){
        console.error('查询失败: ' + err);
    });
}

const addUsers = function (params) {

    for (const param of params) {
        
        User.create(param).then(function(p) {
            console.log('新增成功: ' + JSON.stringify(p));
        }).catch(function(err){
            console.error('新增失败: ' + err);
        });
    }   
}

module.exports = {
    findAll: findAll,
    addUsers: addUsers
}

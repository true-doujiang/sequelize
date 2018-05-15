const Pet = require('../model/petModel');

const findAll = function () {

    Pet.findAll({
        
    }).then(function(result) {
        for (const p of result) {
            console.log(p);
        }
    }).catch(function(err){
        console.error('查询失败: ' + err);
    });
}

const addPets = function (params) {

    for (const param of params) {
        Pet.create(param).then(function(p) {
            console.log('新增成功: ' + JSON.stringify(p));
        }).catch(function(err){
            console.error('新增失败: ' + err);
        });
    }   
}

module.exports = {
    findAll: findAll,
    addPets: addPets
}

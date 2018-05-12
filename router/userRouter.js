const userService = require('../service/userService');





let params = [{
    id: now,
    name: 'wuxi',
    age: 10
},{
    id: now + 1,
    name: 'wuxi',
    age: 10
}];

userService.addUsers(params);
// petService.findAll();
const petService = require('../service/petService');




var now = Date.now();
let params = [{
    id: 'g-' + now,
    name: 'Gaffey',
    gender: false,
    birth: '2007-07-07',
    createdAt: now,
    updatedAt: now,
    version: 0
},{
    id: 'h-' + now,
    name: 'Gaffey',
    gender: true,
    birth: '2007-07-07',
    createdAt: now,
    updatedAt: now,
    version: 0
}];

petService.addPets(params);
// petService.findAll();

console.log('over');
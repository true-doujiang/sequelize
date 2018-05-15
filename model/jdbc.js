
const mysql = require('mysql');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ok',
  database : 'dianda_development'
});
 
connection.connect();
 
// connection.query('SELECT * FROM user', function(err, rows) {
//     if (err) {
//         console.error(err);
//         // error
//     } else {
//         console.log(rows);
//         for (let row of rows) {
//            console.log(JSON.stringify(row));
//         }
//     }
// });



let addSql = 'INSERT INTO user(Id,name,age) VALUES(?,?,?)';
let addSqlParams = [6, 'https://c.runoob.com', 5];
//增
connection.query(addSql, addSqlParams, function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
});
 


 
var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//改
connection.query(modSql,modSqlParams,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
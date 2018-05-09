var sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
    // 仅 SQLite 适用
    storage: 'path/to/database.sqlite'
  });
  
  // 或者可以简单的使用一个连接 uri
  var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
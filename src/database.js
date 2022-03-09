const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'test_nodejs_database'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

module.exports.connectDB = ( ) => {
  return new Promise((resolve, reject) => {
    const con = mysql.createConnection({
      host : process.env.DB_HOST || 'localhost',
      user : process.env.DB_USER || 'myUserName',
      password : process.env.DB_PASS || 'myPassword',
      database : process.env.DB_NAME || 'mydb',
    });
    con.connect((err) => {
      if(err){
        reject(err);
      }
      resolve(con);
    });
  });
};

module.exports.closeDB= (con) => {
  console.log('close DB');
  con.destroy();
}
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '20000225',
  database : 'cs307'
});
 
connection.connect();
 
connection.query('SELECT 1 + 4 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
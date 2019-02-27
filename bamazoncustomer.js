var mysql = require('mysql');
var inq = require("inquirer");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "july28EG",
    database: "mybamazon"
  });

  con.connect(function(err){
      if (err) throw err;
      console.log ('Connection Successful');
      var sql = "SELECT product_name, price FROM products;"
     
  con.query(sql, function(err, result){
      if (err) throw err;
      console.log ('Bamazon product listing: /n' , result);
    });
    
  });

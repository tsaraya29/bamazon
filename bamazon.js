var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "july28EG",
    database: "mybamazon"
  });
  
 con.connect(function(err) {
     if(err) throw err;
     console.log("DB Connected");
     var sql = "INSERT INTO products (product_name, dept_name, price, stock_quantity) VALUES ?";

var values = [
    ['prada heel','shoes',279.99, 20],
    ['black converse', 'shoes', 38.50, 120],
    ['summer espadrille', 'shoes', 19.99, 38],
    ['wine glasses', 'kitchen', 9.99, 50],
    ['plates', 'kitchen', 13.00, 12],
    ['wooden spoons', 'kitchen',3.75, 100],
    ['oven mitts', 'kitchen', 4.99, 75],
    ['rubix cube', 'toys', 7.99, 100],
    ['Nintendo 64', 'toys', 129.99, 25],
    ['slinky', 'toys', 6.00, 35]
];

     con.query(sql, [values], function(err, result){
         if (err) throw err;
         console.log('Number of rows inserted', result.affectedRows);
     });
 });


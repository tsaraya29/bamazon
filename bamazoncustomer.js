var mysql = require('mysql');
var inquirer = require("inquirer");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "july28EG",
    database: "mybamazon"
  });

  con.connect(function(err){
      if (err) throw err;
      console.log ('Connection Successful');
      var sql = "SELECT item_id, product_name, price FROM products;"
      // var item_list = "SELECT product_name FROM products;"
      console.log("Bamazon Product Listing:");
     
  con.query(sql, function(err, result){
      if (err) throw err;
      console.log(result);
      ask_Customer();
    });
    
  });
  //Begin asking question:
  function ask_Customer (){
    inquirer.prompt([
    {
      type: "input",
      name: "choice",
      message: "What would you like to purchase? (enter item ID)",       
    },
    { 
      type: "input",
      name: "quantity",
      message: "How many would you like to purchase?"
    }   
  ])
  .then(function(response){
    var prodQuantity; 
    con.query("SELECT stock_quantity FROM products WHERE item_id=?", [response.choice],
        function(err, result){
      if (err) throw err;
       prodQuantity = result[0].stock_quantity;
      console.log("Number in stock: ", prodQuantity); 
      
      if (prodQuantity > response.quantity) {     
      console.log ("We have enough to fulfull your order")}
      else
      //put else statement here
      console.log("Sorry, we don't have enough of that product");
      return;
      
      });  
  
      con.end();
    });   
  }
 
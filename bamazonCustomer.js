var mysql = require("mysql");
var inquirer = require("inquirer");

// connection to sql database
var connection = mysql.createConnection({
    host: "localhost",
    // user port, if not 3306
    port: 3306,
    // username
    user: "root",
    // password
    password: "L!sb0n13",
    database: "bamazon_db"
});

// connect to the mysql server and database
connection.connect(function (err) {
    if (err) throw err;
    console.log("-----Welcome to Bamazon------")
    // run start function after connection is mage
    // start();
});

// creat table to display product data
// var displayProducts = function(){
//     var query = "Select * FROM products";
//     connection.query(query, function(err, res){
//         if (err) throw err;
//         var displayTable = new Table ({

//         })
//     })
// }
// // function that prompts user for action
// function start() {
// inquirer
// .prompt([
//     {
//     name: "idNumber",
//     type: "input",
//     message: "What is the ID of the product you would like to buy?"
// },
// {
//     name: "quantity",
//     typer: "input",
//     message: "How many would you like to purchase?"
// }
// ])
// .then (function(user){
//     if(){

//     }
//     else if(){

//     } else {
        // connection.end();
//     }
// });
// }

// function buyItem(){
//     connection.query("SELECT * FROM products", function(err, res){
//         if (err) throw err;
//         inquirer
//         .prompt([
//             {
//                 name: "product",
//                 type: "rawlist",
//                 choices: function(){
//                     var productArray = [];
//                     for (var i = 0; i< results.length; i++){
//                         productArray.push(results[i].item_name);
//                     }
//                     return productArray;
//                 },
//                 message: "What item would you like to buy?"
//             },
//             {
//                 name: "quantity",
//                 typer: "input",
//                 message: "How many would you like to buy?"
//             }
//         ])
//         .then(function(answer){
//             var chosenProduct;
//             for (var i = 0; i < results.length; i++){
//                 if (results[i].item_name === answer.choice){
//                     chosenProduct = results[i];
//                 }
//             }
//             if(results[i].item_name === answer.choice){
//                 chosenProduct = results [i];
//             }
//         })
//     })
// }
connection.end();
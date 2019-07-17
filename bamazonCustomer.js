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
    console.log("-----Welcome to Bamazon------");
    queryAllProducts();
    // run start function after connection is made
    // start();
});

// prints products table data
function queryAllProducts(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        for (var i =0; i<res.length; i++){
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("-----------------");
    });
} 
// // function that prompts user for action
// function start() {
// inquirer
// .prompt([
//     {
//     name: "product",
//     type: "input",
//     message: "What is the ID of the product you would like to buy?"
// },
// {
//     name: "quantity",
//     typer: "input",
//     message: "How many would you like to purchase?"
// },
// // ask the user to confirm product and quantity for purchase
// {
//     type: "confirm",
//     message: "Are you sure?",
//     name: "confirm",
//     default: true
// }
// ])
// .then (function(answer){

//     console.log(answer);
// //     // if user confirms, check stock quantity
//     if(answer.confirm){
//         console.log();
//     }
// 
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
// connection.end();

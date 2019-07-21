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
    password: "",
    database: "bamazon_db"
});

// connect to the mysql server and database
connection.connect(function (err) {
    if (err) throw err;
    console.log("-----Welcome to Bamazon------");
    displayProducts();
});


// // displays list of all available products
function displayProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            // prints products table data
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("----Welcome to Bamazon----");

        // requests product and quantity user wants to purchase
        buyProduct();

    });
};

// requests product and quantity user wants to purchase
function buyProduct() {
    inquirer
        .prompt([
            {
                name: "productID",
                type: "input",
                message: "What is the ID of the product you would like to buy?",
                // require integer for product id
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return ("Please enter a number.");
                }
            },
            {
                name: "quantity",
                typer: "input",
                message: "How many would you like?",
                // require an integer be entered for quantity
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return ("Please enter a number.");
                }
            },
        ])
        .then(function (answer) {
            // query database for selected product
            var query = "SELECT stock_quantity, price FROM products WHERE ?";
            connection.query(query, { item_id: answer.productID }, function (err, res) {
                if (err) throw err;
                var available_stock = res[0].stock_quantity;
                var price_per_unit = res[0].price;
                // check if enough inventory for user's purchase
                if (available_stock >= answer.quantity) {
                    // process user request
                    updateStock(available_stock, price_per_unit, answer.productID, answer.quantity);
                } else {
                    // tell user there is not enough stock
                    console.log("Sorry, stock is too low. Please check back.");
                    //let user request new product if desired
                    buyProduct();
                }

            });
            });
}
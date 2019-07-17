DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (100) NOT NULL,
price INT default 0,
stock_quantity INT default 0,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mona Lisa", "Home Decor", 25000.0, 5), ("Recorder", "Music", .99, 99000), ("Creepers", "Shoes", 50.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Poses by Sloth", "Calendars", 7.75, 225), ("Santa Ana's Leg", "Souvenirs", 100.00, 1), ("Borat", "Movies", 1.99, 700);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Little Women", "Books", 4.99, 2578), ("Roasted Seaweed Snack", "Food", 5.99, 315), ("Best of ABBA", "Music", 49.99, 19), ("Tidy Cats Cat Litter", "Pets", 26.30, 99);
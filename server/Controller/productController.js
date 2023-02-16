const db = require('../DB/connection');
const bcrypt = require('bcrypt')
const addProduct = (req, res) => {
    const { Name, Catagory, Price, Size, Quantity } = req.body;


    const q = "INSERT INTO Products(Name, Catagory, Price, Size, Quantity) VALUES (?)";
    const values = [
        Name, Catagory, Price, Size, Quantity
    ]
    let sql = `SELECT * FROM products`;
    db.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
    });
    

}

module.exports = addProduct;
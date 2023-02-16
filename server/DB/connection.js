const mysql = require('mysql');

try {
    module.exports = mysql.createConnection({
        // host:'localhost',
        user:"root",
        password:"admin",
        database:'shop_management'
    })
    console.log("Connection Successfully");

} catch (error) {
    console.log(error);
}



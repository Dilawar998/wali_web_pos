const mysql = require('mysql2');

const connection = mysql.createConnection({
    user: "root",
    host:"localhost",
    password: "abdul17097@",
    database: "wali_pos"
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected");

    
    
    // connection.query("create database wali_pos",(err)=>{
    //     if (err) throw err;
    //     console.log("Database Created");
    // })
})

module.exports = connection;
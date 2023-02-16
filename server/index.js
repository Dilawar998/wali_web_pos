const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const route = require('./Router/product')
require('./DB/connection')

// Prot number
const port = process.env.PORT || 4000


// Middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json());

app.use(route);




app.listen(port,()=>{
    console.log(`server running on: http://localhost:${port}`);
})
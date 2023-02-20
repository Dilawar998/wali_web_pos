const express = require('express');
const bodyparser = require('body-parser');
const app = express();
require('./DB/connection')
const addproductRouter = require('./Router/addproduct')

// Prot number
const port = process.env.PORT || 4000


// Middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json());

app.use(addproductRouter);




app.listen(port,()=>{
    console.log(`server running on: http://localhost:${port}`);
})
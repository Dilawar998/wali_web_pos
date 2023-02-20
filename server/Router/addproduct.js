const express = require('express');
const router = express.Router();
const addproductCon = require('../Controller/addproductCon')


router.post('/addproduct',addproductCon);



module.exports = router;
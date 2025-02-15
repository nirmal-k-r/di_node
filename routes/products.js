//import controller
const products = require('../controllers/products')

const express=require('express');
const router = express.Router()  //create router object

router.get('/allProducts',products.allProducts);
router.get('/oneProduct/:id',products.oneProduct);
router.delete('/delete/:id',products.deleteProduct);
router.post('/add',products.addProduct);
router.post('/update',products.updateProduct);

module.exports=router
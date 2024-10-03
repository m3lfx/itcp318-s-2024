const express = require('express');
const router = express.Router();

const { getProducts, 
    getSingleProduct,
    getAdminProducts,
 } = require('../controllers/product');
router.get('/products', getProducts)
router.get('/product/:id', getSingleProduct)
router.get('/admin/products', getAdminProducts);

module.exports = router;
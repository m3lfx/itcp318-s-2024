const express = require('express');
const router = express.Router();

const { getProducts, 
    getSingleProduct,
    getAdminProducts,
    deleteProduct,
 } = require('../controllers/product');

 const { isAuthenticatedUser, } = require('../middlewares/auth');

router.get('/products', getProducts)
router.get('/product/:id', getSingleProduct)
router.get('/admin/products', getAdminProducts);
router.delete('/admin/product/:id', isAuthenticatedUser, deleteProduct);

module.exports = router;
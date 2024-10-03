const express = require('express')
const router = express.Router();

const { newOrder,
    myOrders,
    getSingleOrder,
 } = require('../controllers/order')
const { isAuthenticatedUser, } = require('../middlewares/auth')

router.post('/order/new', isAuthenticatedUser, newOrder);
router.get('/orders/me', isAuthenticatedUser, myOrders);
router.get('/order/:id', isAuthenticatedUser, getSingleOrder);




module.exports = router;
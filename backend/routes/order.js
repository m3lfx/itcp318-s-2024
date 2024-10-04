const express = require('express')
const router = express.Router();

const { newOrder,
    myOrders,
    getSingleOrder,
    allOrders,
 } = require('../controllers/order')
const { isAuthenticatedUser, } = require('../middlewares/auth')

router.post('/order/new', isAuthenticatedUser, newOrder);
router.get('/orders/me', isAuthenticatedUser, myOrders);
router.get('/order/:id', isAuthenticatedUser, getSingleOrder);
router.route('/admin/orders/').get(isAuthenticatedUser, allOrders);



module.exports = router;
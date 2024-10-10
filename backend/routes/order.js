const express = require('express')
const router = express.Router();

const { newOrder,
    myOrders,
    getSingleOrder,
    allOrders,
    updateOrder,
    deleteOrder,
 } = require('../controllers/order')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.post('/order/new', isAuthenticatedUser, newOrder);
router.get('/orders/me', isAuthenticatedUser, myOrders);
router.get('/order/:id', isAuthenticatedUser, getSingleOrder);
router.route('/admin/orders/').get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);
router.route('/admin/order/:id').put(isAuthenticatedUser, updateOrder).delete(isAuthenticatedUser, deleteOrder);


module.exports = router;
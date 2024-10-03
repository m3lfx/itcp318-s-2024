const express = require('express')
const router = express.Router();

const { newOrder, } = require('../controllers/order')
const { isAuthenticatedUser, } = require('../middlewares/auth')

router.post('/order/new', isAuthenticatedUser, newOrder);
module.exports = router;
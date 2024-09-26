const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");

const { registerUser, 
    loginUser,
    getUserProfile,
    updateProfile,
} = require('../controllers/auth');
    const { isAuthenticatedUser, } = require('../middlewares/auth');

router.post('/register', upload.single('avatar'), registerUser);
router.post('/login', loginUser);
router.get('/me', isAuthenticatedUser, getUserProfile)
router.put('/me/update', isAuthenticatedUser,  upload.single("avatar"), updateProfile)
module.exports = router;
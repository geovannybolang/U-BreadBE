const express = require('express');
const router = express.Router();
const {
    login,
    createAccount,
} = require('./controller');

router.get('/login', login);
router.post('/createaccount', createAccount);

module.exports = router;

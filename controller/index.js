const express = require ('express');
let router = express.Router();

router.use('/register', require('./register'));
router.use('/search', require('./search'));
router.use('/user', require('./user'));

module.exports = router;
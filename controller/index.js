const express = require ('express');
let router = express.Router();

router.use('/register', require('./register'));
router.use('/info', require('./info'));
router.use('/search', require('./search'));


module.exports = router;
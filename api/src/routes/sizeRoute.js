const express = require('express');
const SizeHandler= require('../handlers/sizeHandler');
const router = express();
const {getAllSizes}=new SizeHandler();

router.get('/getAllSizes', getAllSizes);

module.exports = router;
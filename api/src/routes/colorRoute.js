const express = require('express');
const ColorHandler= require('../handlers/colorHandler');
const router = express();
const {getAllColors}=new ColorHandler();

router.get('/getAllColors', getAllColors);

module.exports = router;
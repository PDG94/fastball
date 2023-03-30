const express = require('express');
const ColorHandler= require('../handlers/colorHandler');
const router = express();
const {getAllColors,createColors,updateColors}=new ColorHandler();

router.get('/getAllColors', getAllColors);
router.post('/createColors', createColors);
router.put('/updateColors/:id', updateColors);

module.exports = router;
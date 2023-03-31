const express = require('express');
const SizeHandler= require('../handlers/sizeHandler');
const router = express();
const {getAllSizes,createSizes,updateSizes}=new SizeHandler();

router.get('/getAllSizes', getAllSizes);
router.post('/createSizes', createSizes);
router.put('/updateSizes/:id', updateSizes);

module.exports = router;
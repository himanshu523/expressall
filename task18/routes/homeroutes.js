const express = require('express');

const router = express.Router();

const homeControllers = require('../controllers/homecontrollers');


router.get('/',homeControllers.getHome);

router.post('/add',homeControllers.addData);

router.get('/get-data',homeControllers.getData);

router.delete('/delete-data/:id',homeControllers.deleteData);

module.exports = router;
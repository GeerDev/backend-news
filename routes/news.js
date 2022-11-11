const express = require('express');
const router = express.Router();
const NewController = require('../controllers/NewController')

router.get('/fillDatabase/:pages', NewController.fillDatabase)
router.get('/getAll', NewController.getAll)
router.get('/getById/:id', NewController.getById)

module.exports = router;
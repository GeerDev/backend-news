const express = require('express');
const router = express.Router();
const NewController = require('../controllers/NewController')

router.get('/fillDatabase/:pages', NewController.fillDatabase)
router.get('/getAll', NewController.getAll)
router.get('/getById/:id', NewController.getById)
router.post('/create', NewController.create)

module.exports = router;
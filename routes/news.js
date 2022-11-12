const express = require('express');
const router = express.Router();
const NewController = require('../controllers/NewController')

router.get('/fillDatabase/:pages', NewController.fillDatabase)
router.get('/getAll', NewController.getAll)
router.get('/getById/:id', NewController.getById)
router.get('/showCategories', NewController.showCategories)
router.post('/create', NewController.create)
router.put('/id/:id', NewController.updateArchived)
router.delete('/id/:id', NewController.delete)

module.exports = router;
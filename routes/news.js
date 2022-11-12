const express = require('express');
const router = express.Router();
const NewController = require('../controllers/NewController')

router.get('/fillDatabase/:pages', NewController.fillDatabase)
router.get('/', NewController.getAll)
router.get('/id/:id', NewController.getById)
router.get('/showCategories', NewController.showCategories)
router.get('/title/:title', NewController.searchByTitle)
router.post('/', NewController.create)
router.put('/id/:id', NewController.updateArchived)
router.delete('/id/:id', NewController.delete)

module.exports = router;
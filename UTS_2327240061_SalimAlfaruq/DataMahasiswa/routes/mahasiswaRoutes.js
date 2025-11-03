const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

// routes
router.get('/', mahasiswaController.getAll);
router.get('/:id', mahasiswaController.getById);
router.post('/', mahasiswaController.create);
router.put('/:id', mahasiswaController.update);
router.delete('/:id', mahasiswaController.delete);

module.exports = router;
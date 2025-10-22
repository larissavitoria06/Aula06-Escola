// src/routes/professorRoutes.js
const express = require('express');
const router = express.Router();
const professorController = require('../controllers/profe.js');

router.post('/cadastrar', profe.js.cadastrar);
router.post('/login', profe.js.login);

module.exports = router;

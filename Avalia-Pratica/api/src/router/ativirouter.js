// src/routes/atividadeRoutes.js
const express = require('express');
const router = express.Router();
const atividadeController = require('../controllers/atividadeController');
const auth = require('../middleware/auth');

router.use(auth); // todas as rotas de atividade precisam de login

router.post('/', atividadeController.cadastrar);
router.get('/:turmaId', atividadeController.listar);

module.exports = router;

// src/routes/turmaRoutes.js
const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');
const auth = require('../middleware/auth');

router.use(auth); // todas as rotas de turma precisam de login

router.post('/', turmaController.cadastrar);
router.get('/', turmaController.listar);
router.delete('/:id', turmaController.excluir);

module.exports = router;

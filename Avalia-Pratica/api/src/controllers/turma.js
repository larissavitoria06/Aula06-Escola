// src/controllers/turmaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.cadastrar = async (req, res) => {
  const { nome } = req.body;
  try {
    const turma = await prisma.turma.create({
      data: { nome, professorId: req.professorId }
    });
    res.json(turma);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const turmas = await prisma.turma.findMany({
      where: { professorId: req.professorId },
      include: { atividades: true }
    });
    res.json(turmas);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.excluir = async (req, res) => {
  const { id } = req.params;
  try {
    const turma = await prisma.turma.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'Turma excluída', turma });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

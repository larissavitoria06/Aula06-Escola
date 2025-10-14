// src/controllers/atividadeController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.cadastrar = async (req, res) => {
  const { turmaId, titulo, descricao } = req.body;

  // Verificar se a turma pertence ao professor logado
  const turma = await prisma.turma.findUnique({
    where: { id: turmaId }
  });
  if (!turma || turma.professorId !== req.professorId)
    return res.status(403).json({ error: "Turma não pertence ao professor" });

  try {
    const atividade = await prisma.atividade.create({
      data: { titulo, descricao, turmaId }
    });
    res.json(atividade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listar = async (req, res) => {
  const { turmaId } = req.params;

  // Verificar se a turma pertence ao professor logado
  const turma = await prisma.turma.findUnique({ where: { id: parseInt(turmaId) } });
  if (!turma || turma.professorId !== req.professorId)
    return res.status(403).json({ error: "Turma não pertence ao professor" });

  try {
    const atividades = await prisma.atividade.findMany({ where: { turmaId: parseInt(turmaId) } });
    res.json(atividades);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

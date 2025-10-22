// src/controllers/professorController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = "SENHA_SUPER_SECRETA"; // usar .env em produção

exports.cadastrar = async (req, res) => {
  const { nome, email, senha } = req.body;
  const hash = await bcrypt.hash(senha, 10);
  try {
    const professor = await prisma.professor.create({
      data: { nome, email, senha: hash }
    });
    res.json(professor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const professor = await prisma.professor.findUnique({ where: { email } });
  if (!professor) return res.status(404).json({ error: "Professor não encontrado" });

  const match = await bcrypt.compare(senha, professor.senha);
  if (!match) return res.status(401).json({ error: "Senha inválida" });

  const token = jwt.sign({ id: professor.id }, SECRET, { expiresIn: '2h' });
  res.json({ token, professor: { id: professor.id, nome: professor.nome } });
};

import express from "express";
const router = express.Router();

let turmas = [
  { id: 1, numero: 1, nome: "Turma A" },
  { id: 2, numero: 2, nome: "Turma B" },
];

// Listar turmas
router.get("/", (req, res) => {
  res.json(turmas);
});

// Cadastrar turma
router.post("/", (req, res) => {
  const { numero, nome } = req.body;
  const novaTurma = {
    id: Date.now(),
    numero,
    nome,
  };
  turmas.push(novaTurma);
  res.status(201).json(novaTurma);
});

// Excluir turma
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  turmas = turmas.filter((t) => t.id !== id);
  res.status(204).end();
});

export default router;

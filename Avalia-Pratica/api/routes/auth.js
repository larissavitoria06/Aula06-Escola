import express from "express";
const router = express.Router();

// Simulando um "banco de dados"
const usuarios = [
  { email: "prof@escola.com", senha: "123456" },
  { email: "aluno@teste.com", senha: "senha123" },
];

router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const usuario = usuarios.find(
    (u) => u.email === email && u.senha === senha
  );

  if (!usuario) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  res.json({ message: "Login bem-sucedido!", usuario: usuario.email });
});

export default router;


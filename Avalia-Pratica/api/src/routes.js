import express from "express";
import { listarTurmas, criarTurma, excluirTurma } from "../controllers/turma.js";

const router = express.Router();

router.get("/", listarTurmas);
router.post("/", criarTurma);
router.delete("/:id", excluirTurma);

export default router;

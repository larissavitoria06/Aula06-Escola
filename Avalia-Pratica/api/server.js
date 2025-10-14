import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import turma from "./routes/turma.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/api/turmas", turma);

const PORT = 3006;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

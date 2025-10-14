import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

const PORT = 3006;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

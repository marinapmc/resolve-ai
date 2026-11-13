import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

// Libera o front (Vite roda em http://localhost:5173 por padrão)
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.use("/api", routes);

// Rota não encontrada
app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

// Tratamento de erros genérico
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ erro: err.message || "Erro interno do servidor" });
});

export default app;

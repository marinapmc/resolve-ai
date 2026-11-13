import { Router } from "express";

const router = Router();

// Rota de verificação: GET /api/health
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default router;

import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ Welcome: "API V1 Reached!" });
});

export default router;

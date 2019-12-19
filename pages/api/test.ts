import { Request, Response } from "express";

export default function handle(req: Request, res: Response) {
  return res.json({ testing: "sucess" });
}

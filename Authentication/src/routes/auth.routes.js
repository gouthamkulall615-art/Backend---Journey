import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";

const authRouter = Router();

//post /api/auth/register

authRouter.post("/register", authController.register);

//Get /api/auth/get-me
authRouter.get("/get-me", authController.getMe);

//GET /api/auth/refresh-token
authRouter.get("/refresh-token", authController.refreshToken);

export default authRouter;

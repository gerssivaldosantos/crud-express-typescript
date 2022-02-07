import { Router } from "express";
import { CreateUserTypeController } from "../controllers/CreateUserTypeController";

const routes = Router();

routes.post("/user_type", new CreateUserTypeController().handle);

export { routes }
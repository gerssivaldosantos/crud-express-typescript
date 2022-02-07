import { Router } from "express";
import { CreateUserTypeController } from "../controllers/CreateUserTypeController";

const routes = Router();

routes.post("/", new CreateUserTypeController().handle);

export { routes }
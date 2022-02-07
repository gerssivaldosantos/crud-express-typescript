import { Router } from "express";
import { CreateUserTypeController } from "../controllers/CreateUserTypeController";
import { GetAllUserTypeController } from "../controllers/GetAllTypeUserController";

const routes = Router();

routes.post("/user_type", new CreateUserTypeController().handle);
routes.get("/user_type", new GetAllUserTypeController().handle);

export { routes }
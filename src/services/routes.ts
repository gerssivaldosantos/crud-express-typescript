import { Router } from "express";
import { CreateUserTypeController } from "../controllers/CreateUserTypeController";
import { DeleteUserTypeController } from "../controllers/DeleteUserTypeController";
import { GetAllUserTypeController } from "../controllers/GetAllTypeUserController";
import { GetUserTypeIdController } from "../controllers/GetUserTypeIdController";

const routes = Router();

routes.post("/user_type", new CreateUserTypeController().handle);
routes.delete("/user_type/:id", new DeleteUserTypeController().handle);
routes.get("/user_type", new GetAllUserTypeController().handle);
routes.get("/user_type_id/:name", new GetUserTypeIdController().handle);
export { routes }
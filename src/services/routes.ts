import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateUserTypeController } from "../controllers/CreateUserTypeController";
import { DeleteUserTypeController } from "../controllers/DeleteUserTypeController";
import { GetAllUserTypeController } from "../controllers/GetAllTypeUserController";
import { GetUserTypeIdController } from "../controllers/GetUserTypeIdController";
import { UpdateUserTypeController } from "../controllers/UpdateUserTypeController";

const routes = Router();

/* Routes for user */

routes.post("/user", new CreateUserController().handle);

/* Routes for user type */
routes.post("/user_type", new CreateUserTypeController().handle);
routes.put("/user_type/:id", new UpdateUserTypeController().handle);
routes.delete("/user_type/:id", new DeleteUserTypeController().handle);
routes.get("/user_type", new GetAllUserTypeController().handle);
routes.get("/user_type_id/:name", new GetUserTypeIdController().handle);

export { routes }
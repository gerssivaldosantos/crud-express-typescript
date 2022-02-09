import { Response, Request } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController{
    async handle(request: Request, response: Response){
        const {name, email, password, user_type_id} = request.body;
        const service = new CreateUserService();
        const result = await service.execute({name, email, password, user_type_id});
        return response.json(result);
    }
}
import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserController{
    async handle(request:Request, response: Response):Promise<Response>{
        const {id} = request.params;
        const {name, email, password, user_type_id} = request.body;
        const service = new UpdateUserService();
        const result = await service.execute({id, name, email, password, user_type_id});
        return response.json(result)
    }
}
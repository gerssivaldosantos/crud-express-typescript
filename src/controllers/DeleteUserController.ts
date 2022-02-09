import { DeleteUserService } from "../services/DeleteUserService";
import { Request, Response } from "express";

export class DeleteUserController{
    async handle(request:Request, response:Response):Promise<Response>{
        const service = new DeleteUserService();
        const { id } = request.params;
        const result = await service.execute(id);
        return response.json(result)
    }
}
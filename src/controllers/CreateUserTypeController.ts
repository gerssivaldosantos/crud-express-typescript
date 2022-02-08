import { Request, Response } from "express";
import { CreateUserTypeService } from "../services/CreateUserTypeService";

export class CreateUserTypeController{
    async handle(request: Request, response: Response){
        const {name, description} = request.body;

        const service = new CreateUserTypeService();

        const result = await service.execute({name, description})
        
        return response.json(result);

    }
}
import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateUserTypeService";

export class CreateUserTypeController{
    async handle(request: Request, response: Response){
        const {name, description} = request.body;

        const service = new CreateCategoryService();

        const result = await service.execute({name, description})
    }
}
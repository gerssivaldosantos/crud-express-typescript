import {Request, Response} from "express";
import { GetAllUserTypeService } from "../services/GetAllUserTypeService"; 

export class GetAllUserTypeController {
    async handle(request: Request, response: Response){
        const service = new GetAllUserTypeService();
        const user_types = await service.execute();
        return response.json(user_types);
    }
}
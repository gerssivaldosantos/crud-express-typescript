import {Request, Response} from 'express';
import { GetAllUserService } from '../services/GetAllUserService';

export class GetAllUserController{
    async handle(request:Request, response:Response): Promise<Response>{
        const service = new GetAllUserService();
        const result = await service.execute();
        return response.json(result);
    }
}
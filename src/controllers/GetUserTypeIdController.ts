import { Request, Response } from 'express';
import { GetUserTypeIdService } from '../services/GetUserTypeIdService';

export class GetUserTypeIdController {
    async handle(request: Request, response: Response){
        const { name } = request.params;
        const service = new GetUserTypeIdService();
        const result = await service.execute(name);
        return response.json(result);
    }
}
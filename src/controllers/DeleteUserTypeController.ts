import {Request, Response} from 'express';
import { DeleteUserTypeService } from '../services/DeleteUserTypeService';

export class DeleteUserTypeController{
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const service = new DeleteUserTypeService();
        await service.execute(id);
        return response.json({message: `User type id=${id} deleted`});
    }
}

import { Request, Response } from "express";
import { UserTypeUpdateRequest } from "../dto/UserTypeModel";
import { UpdateUserTypeService} from "../services/UpdateUserTypeService";

export class UpdateUserTypeController{
    async handle(request: Request, response: Response){
        const user_type_update = <UserTypeUpdateRequest>{
            id: request.params.id,
            name: request.body.name,
            description: request.body.description
        }
        const service = new UpdateUserTypeService();
        const result = await service.execute(user_type_update);

        return response.json(result);
    }
}
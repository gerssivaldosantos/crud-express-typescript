import { getRepository, Repository } from "typeorm";
import { UserType } from "../entities/UserType";
import { UserTypeUpdateRequest } from "../dto/UserTypeModel";

export class UpdateUserTypeService {
    async execute({id, name, description}:UserTypeUpdateRequest){
        const user_type_repository = getRepository(UserType);

        try{
            const user_type = await user_type_repository.findOne(id);
            if (user_type){
                user_type.name = name;
                user_type.description = description;
                await user_type_repository.save(user_type);
                return {
                    message: "User type updated successfully",
                    content: user_type,
                    status: 200
                }
            }
            else{
                throw new Error("User type not found");
            }

  
        }
        catch(error){
            return {
                message: "User type not updated",
                content: error,
                status: 500
            }
        }
        
    }
}
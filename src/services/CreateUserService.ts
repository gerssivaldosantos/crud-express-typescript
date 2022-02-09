import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserType } from "../entities/UserType";
import { UserRequest } from "../models/UserModel";
export class CreateUserService{
    public async execute({name, email, password, user_type_id}: UserRequest):Promise<{}>{

        const user_repository = getRepository(User);
        const type_repository = getRepository(UserType)

        try{
            try{
                await type_repository.findOne(user_type_id);
            }
            catch(error){
                return {
                    status: 404,
                    message: error.driverError ?? "Anyone not found",
                    content: null
                }
            }
                
                const user = user_repository.create(
                    {   
                        name,
                        email,
                        password,
                        user_type_id
                    }
                )

                await user_repository.save(user);

                return {
                    status: 200,
                    message: "User created",
                    content: user

                }
            
        }
        catch(error){
            return {
                status: 500,
                message: error.driverError?? "Internal server error",
                content: null
            }
        }
    }
}
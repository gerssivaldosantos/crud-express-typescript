import { getRepository } from "typeorm";
import { User } from "../entities/User";


export class GetAllUserService{
    public async execute(): Promise<{}>{
        const user_repository = getRepository(User);
        try{
            const user = await user_repository.find({
                select:["id","email","name", "user_type"],
                relations: ["user_type"]
            });
            return {
                status: 200,
                message: "Ok",
                content: user
            }
        }

        catch(error){
            return {
                status: 500,
                message: error.driverError ?? "Internal server error",
                content: null
            }
        }
    }
}
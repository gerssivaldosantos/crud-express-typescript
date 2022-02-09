import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class DeleteUserService {
    public async execute(id: string): Promise<{}> {
        const user_repository = getRepository(User);
        try {
            await user_repository.delete({id:id});
            return {
                status: 200,
                message: "Ok",
                content: null
            }
        }
        catch (error) {
            return {
                status: 500,
                message: error.driverError ?? "Internal server error",
                content: null
            }
        }

    }
}
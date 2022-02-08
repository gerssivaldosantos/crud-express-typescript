import { getRepository } from "typeorm";
import { UserType } from "../entities/UserType";

export class GetUserTypeIdService {
    public async execute(name:string): Promise<{}> {
        try {
            const user_type_repository = getRepository(UserType);
            const result = await user_type_repository.findOne({
                name
            });

            return {
                status: 200,
                message: "Ok",
                content: result.id
            }
        }
        catch (error) {
            console.log(error)
            return {
                status: 404,
                message: `User type name=${name} not found`,
                content: null
            }
        }

    }
}
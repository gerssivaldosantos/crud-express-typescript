import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserType } from "../entities/UserType";
import { UserUpdateRequest } from "../dto/UserModel";


export class UpdateUserService {
    public async execute({ id, name, email, password, user_type_id }: UserUpdateRequest): Promise<{}> {
        try {
            const user_type_repository = getRepository(UserType);
            try {
                await user_type_repository.findOne(user_type_id);
            }
            catch (error) {
                return {
                    status: 404,
                    message: error.driverError ?? "User type not found",
                    content: null
                }
            }
            const user_repository = getRepository(User);
            const user = await user_repository.findOne(id);
            user.id = id;
            user.name = name;
            user.email = email;
            user.password = password;
            user.user_type_id = user_type_id;
            await user_repository.save(user);
            return {
                status: 200,
                message: "User updated successfully",
                content: user
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
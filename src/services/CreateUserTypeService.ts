import { getRepository } from "typeorm";
import { UserType } from "../entities/UserType";

type UserTypeRequest = {
    name: string;
    description: string;
}
export class CreateCategoryService {
    async execute({
        name,
        description
    }: UserTypeRequest): Promise<UserType> {
        const repo = getRepository(UserType);
        if (
            //SELECT * FROM user_type WHERE name = 'name' LIMIT 1
            await repo.findOne({ name })
        ) {
            throw new Error('UserType already exists');
        }
        else {
            const user_type = repo.create({
                name,
                description,
            })
            await repo.save(user_type);

            return user_type;
        }
    }
}
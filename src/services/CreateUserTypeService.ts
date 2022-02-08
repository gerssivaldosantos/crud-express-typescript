import { getRepository } from "typeorm";
import { UserType } from "../entities/UserType";

type UserTypeRequest = {
    name: string;
    description: string;
}
export class CreateUserTypeService {
    async execute({
        name,
        description
    }: UserTypeRequest): Promise<{} | Error>{
        //creating the repositories methods based in my data type
        const repo = getRepository(UserType);
        if (
            //SELECT * FROM user_type WHERE name = 'name' LIMIT 1
            await repo.findOne({ name })
        ) {
            console.log("UserType already exists");
            return new Error('UserType already exists');
        }
        else {
            const result = repo.create({
                name,
                description,
            })
            await repo.save(result);

            return {
                status: 200,
                message: "UserType created",
                content:result,
            }
        }
    }
}
import { getRepository } from "typeorm";
import { UserType } from "../entities/UserType";

export class GetAllUserTypeService {
    public async execute(): Promise<UserType[]> {
        const user_typeRepository = getRepository(UserType);
        const user_types = await user_typeRepository.find();
        return user_types;
    }
}
import { getRepository } from 'typeorm';
import { UserType } from '../entities/UserType';

export class DeleteUserTypeService{
    public async execute(id): Promise<{}> {
        try{
            const user_typeRepository = getRepository(UserType);
            await user_typeRepository.delete({id: id});
            return {
                status: 200,
                message: `User type id=${id} deleted`,
                content: null,
            }
            
        }
        catch(error){
            console.log(error)
            return {
                status: 404,
                message: `User type id=${id} not found`,
                content: null
            }
        }

    }
}
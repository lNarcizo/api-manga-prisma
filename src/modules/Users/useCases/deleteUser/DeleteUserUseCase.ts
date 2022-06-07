import {DeleteUserDTO} from "../../dtos/DeleteUserDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {User} from "@prisma/client";

export class DeleteUserUseCase {

    async execute({ id }: DeleteUserDTO): Promise<User>
    {
        const userExists = await prisma.user.findFirst(
            {
                where: {
                    id
                }
            }
        );

        if (!userExists) {
            throw new AppError("Usuário não existe");
        }

        const deletedUser = await prisma.user.delete(
            {
                where: {
                    id
                }
            }
        );

        return deletedUser;
    }
}
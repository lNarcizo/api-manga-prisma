import {UpdateUserDTO} from "../../dtos/UpdateUserDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {User} from "@prisma/client";

export class UpdateUserUseCase {

    async execute({id, nome, email}:UpdateUserDTO): Promise<User>
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

        const user = await prisma.user.update(
            {
                where: {
                    id
                },
                data: {
                    nome,
                    email
                },
            }
        );

        return user;
    }
}
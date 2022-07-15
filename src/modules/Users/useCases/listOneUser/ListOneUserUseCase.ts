import {ListOneUserDTO} from "../../dtos/ListOneUserDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {User} from "@prisma/client";

export class ListOneUserUseCase {

    async execute({ id }: ListOneUserDTO): Promise<User>
    {
        const user = await prisma.user.findUnique(
            {
                where: {
                    id
                }
            }

        );

        if (!user) {
            throw new AppError("O usuario enviado nao existe!")
        }

        return user;
    }
}
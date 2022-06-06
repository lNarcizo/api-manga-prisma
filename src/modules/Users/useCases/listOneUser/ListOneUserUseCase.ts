import {ListOneUserDTO} from "../../dtos/ListOneUserDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {User} from "@prisma/client";

export class ListOneUserUseCase {

    async execute({ email }: ListOneUserDTO): Promise<User>
    {
        const user = await prisma.user.findUnique(
            {
                where: {
                    email
                }
            }

        );

        if (!user) {
            throw new AppError("O usuario enviado nao existe!")
        }

        return user;
    }
}
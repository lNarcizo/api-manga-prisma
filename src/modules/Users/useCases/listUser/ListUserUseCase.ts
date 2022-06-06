import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {User} from "@prisma/client";

export class ListUserUseCase {

    async execute(): Promise<User[]>
    {
        const users = await prisma.user.findMany();

        if (!users) {
            throw new AppError("Não existem usuários cadastrados");
        }

        return users;
    }
}
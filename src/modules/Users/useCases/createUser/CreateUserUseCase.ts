import {CreateUserDTO} from "../../dtos/CreateUserDTO";
import {prisma} from "../../../../prisma/client";
import { User } from "@prisma/client";
import {AppError} from "../../../../errors/AppError";

export class CreateUserUseCase {

    async execute( { nome, email, password }:CreateUserDTO ): Promise<User>
    {
        const userExists = await prisma.user.findUnique(
            {
                where: {
                    email
                }
            }
        );

        if (userExists) {
            throw new AppError("Este email já foi usado para cadastro!");
        }

        const user = prisma.user.create(
            {
                data: {
                    nome,
                    email,
                    password
                }
            }
        );

        return user;
    }
}
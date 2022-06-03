import {prisma} from "../../../../prisma/client";
import {CreateGeneroDTO} from "../../dtos/CreateGeneroDTO";
import { Genero } from "@prisma/client";
import {AppError} from "../../../../errors/AppError";

export class CreateGeneroUseCase {

    async execute({ nome }: CreateGeneroDTO): Promise<Genero>
    {

        const generoExists = await prisma.genero.findFirst(
            {
                where: {
                    nome
                }
            }
        );

        if (generoExists) {
            throw  new AppError("Este Genero já existe")
        }

        const genero = prisma.genero.create(
            {
                data: {
                    nome
                }
            }
        );

        return genero;
    }

}
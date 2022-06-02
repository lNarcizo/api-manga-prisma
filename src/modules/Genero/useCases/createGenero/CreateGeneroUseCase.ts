import {prisma} from "../../../../prisma/client";
import {CreateGeneroDTO} from "../../dtos/CreateGeneroDTO";
import { Genero } from "@prisma/client";
import {AppError} from "../../../../errors/AppError";

export class CreateGeneroUseCase {

    async execute({ nome }: CreateGeneroDTO): Promise<Genero>
    {

        const generoExists = await prisma.genero.findUnique(
            {
                where: {
                    nome
                }
            }
        );

        if (generoExists) {
            throw  new AppError("Este Genero já existe")
        }
    }

}
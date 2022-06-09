import {DeleteGeneroDTO} from "../../dtos/DeleteGeneroDTO";
import {Genero} from "@prisma/client";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";

export class DeleteGeneroUseCase {

    async execute({ id }: DeleteGeneroDTO): Promise<Genero>
    {
        const generoExists = await prisma.genero.findFirst(
            {
                where: {
                    id
                }
            }
        );

        if (!generoExists) {
            throw new AppError("Genero não existe!");
        }

        const genero = await prisma.genero.delete(
            {
                where: {
                    id
                }
            }
        );

        return genero;
    }
}
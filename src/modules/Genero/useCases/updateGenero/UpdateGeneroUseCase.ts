import {CreateGeneroDTO} from "../../dtos/UpdateGeneroDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Genero} from "@prisma/client";

export class UpdateGeneroUseCase {

    async execute({ id, nome }: CreateGeneroDTO): Promise<Genero>
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

        const genero = await prisma.genero.update(
            {
                where: {
                    id
                },
                data: {
                    nome
                }
            }
        );

        return genero;
    }
}
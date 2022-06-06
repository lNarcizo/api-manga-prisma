import {ListOneGeneroDTO} from "../../dtos/ListOneGeneroDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Genero} from "@prisma/client";

export class ListOneGeneroUseCase {

    async execute({ nome }: ListOneGeneroDTO): Promise<Genero>
    {
        const genero = await prisma.genero.findFirst(
            {
                where: {
                    nome
                }
            }
        );

        if(!genero) {
            throw new AppError("Este Genero não existe!");
        }

        return genero
    }
}
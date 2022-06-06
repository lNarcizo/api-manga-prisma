import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Genero} from "@prisma/client";

export class ListGeneroUseCase {

    async execute(): Promise<Genero[]>
    {
        const generos = await prisma.genero.findMany();

        if (!generos) {
            throw new AppError("Não existem generos cadastrados");
        }

        return generos;
    }
}
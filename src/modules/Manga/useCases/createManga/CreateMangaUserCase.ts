import {CreateMangaDTO} from "../../dtos/CreateMangaDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import { Manga } from "@prisma/client";

export class CreateMangaUserCase {

    async execute({nome, capitulo, generoId, userId }: CreateMangaDTO): Promise<Manga>
    {
        const mangaExists = await prisma.manga.findFirst(
            {
                where: {
                    nome,
                    userId
                }
            }
        );

        if (mangaExists) {
            throw new AppError("O manga já foi cadastrado!");
        }

        const manga = await prisma.manga.create(
            {
                data: {
                    nome,
                    capitulo,
                    generoId,
                    userId
                }
            }
        );

        return manga;
    }
}
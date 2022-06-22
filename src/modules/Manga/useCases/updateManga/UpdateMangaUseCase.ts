import {UpdateMangaDTO} from "../../dtos/UpdateMangaDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Manga} from "@prisma/client";

export class UpdateMangaUseCase {

    async execute({ id, nome, capitulo }: UpdateMangaDTO): Promise<Manga>
    {
        const mangaExists = await prisma.manga.findFirst(
            {
                where: {
                    id
                }
            }
        );

        if (!mangaExists) {
            throw new AppError("Mangá não existe!");
        }

        const manga = await prisma.manga.update(
            {
                where: {
                    id
                },
                data: {
                    nome,
                    capitulo
                }
            }
        );

        return manga;
    }
}
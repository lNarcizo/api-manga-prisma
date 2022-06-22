import {DeleteMangaDTO} from "../../dtos/DeleteMangaDTO";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Manga} from "@prisma/client";

export class DeleteMangaUseCase {

    async execute({ id }: DeleteMangaDTO): Promise<Manga>
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

        const manga = await prisma.manga.delete(
            {
                where: {
                    id
                }
            }
        );

        return manga;
    }
}
import {ListOneMangaDTO} from "../../dtos/ListOneMangaDTO";
import {Manga} from "@prisma/client";
import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";

export class ListOneMangaUseCase {

    async execute({ id }: ListOneMangaDTO): Promise<Manga>
    {
        const manga = await prisma.manga.findFirst(
            {
                where: {
                    id
                }
            }
        );

        if (!manga) {
            throw new AppError("O Manga não existe!");
        }

        return manga;
    }
}
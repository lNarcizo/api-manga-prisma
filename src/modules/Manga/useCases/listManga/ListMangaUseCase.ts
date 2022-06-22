import {prisma} from "../../../../prisma/client";
import {AppError} from "../../../../errors/AppError";
import {Manga} from "@prisma/client";

export class ListMangaUseCase {

    async execute(): Promise<Manga[]>
    {
        const mangas = await prisma.manga.findMany();

        if (!mangas) {
            throw new AppError("Não existem mangás cadastrados!");
        }

        return mangas;
    }
}
import {Request, Response} from "express";
import {ListMangaUseCase} from "./ListMangaUseCase";

export class ListMangaController {

    async handle(req: Request, res: Response)
    {
        const listMangaUseCase = new ListMangaUseCase();

        const result = await listMangaUseCase.execute();

        return res.status(200).json(result);
    }
}
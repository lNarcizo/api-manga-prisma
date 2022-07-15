import {Request, Response} from "express";
import {ListOneMangaUseCase} from "./ListOneMangaUseCase";

export class ListOneMangaController {

    async handle(req: Request, res: Response)
    {
        const { id } = req.body;

        const listOneMangaUseCase = new ListOneMangaUseCase();

        const result = await listOneMangaUseCase.execute({id});

        return res.status(200).json(result);
    }
}
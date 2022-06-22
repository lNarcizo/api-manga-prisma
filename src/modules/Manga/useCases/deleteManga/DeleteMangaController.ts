import {Request, Response} from "express";
import {DeleteMangaUseCase} from "./DeleteMangaUseCase";

export class DeleteMangaController {

    async handle(req: Request, res: Response)
    {
        const { id } = req.body;

        const deleteMangaUseCase = new DeleteMangaUseCase();

        const result = deleteMangaUseCase.execute({id});

        const resultData = {
            "deleted": true,
            "data": result
        }

        return res.status(200).json(resultData);
    }
}
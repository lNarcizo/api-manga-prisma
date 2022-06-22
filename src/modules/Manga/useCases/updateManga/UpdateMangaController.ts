import {Request, Response} from "express";
import {UpdateMangaUseCase} from "./UpdateMangaUseCase";

export class UpdateMangaController {

    async handle(req: Request, res: Response)
    {
        const { id, nome, capitulo} = req.body;

        const updateMangaUseCase = new UpdateMangaUseCase();

        const result = await updateMangaUseCase.execute({id,nome,capitulo});

        const resultData = {
            "updated": true,
            "data": result
        }

        return res.status(200).json(resultData);
    }
}
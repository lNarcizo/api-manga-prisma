import {Request, Response} from "express";
import {CreateMangaUserCase} from "./CreateMangaUserCase";

export class CreateMangaController {

    async handle(req: Request, res: Response)
    {
        const { nome, capitulo, generoId, userId } = req.body;

        const createMangaUseCase = new CreateMangaUserCase();

        const result = await createMangaUseCase.execute({nome, capitulo, generoId, userId});

        const resultData = {
            "created": true,
            "data": result
        };

        return res.status(201).json(resultData);
    }
}
import {Request, Response} from "express";
import {CreateGeneroUseCase} from "./CreateGeneroUseCase";

export class CreateGeneroController {

    async handle(req: Request, res: Response)
    {
        const { nome } = req.body;

        const createGeneroUseCase = new CreateGeneroUseCase();

        const result = await createGeneroUseCase.execute({ nome });

        return res.status(201).json(result);
    }

}
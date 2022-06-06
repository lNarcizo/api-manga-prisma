import {Request, Response} from "express";
import {ListOneGeneroUseCase} from "./ListOneGeneroUseCase";

export class ListOneGeneroController {

    async handle(req: Request, res: Response)
    {
        const { nome } = req.body;

        const listOneGeneroUseCase = new ListOneGeneroUseCase();

        const result = listOneGeneroUseCase.execute({nome});

        return res.status(200).json(result);
    }
}
import {Request, Response} from "express";
import {ListGeneroUseCase} from "./ListGeneroUseCase";

export class ListGeneroController {

    async handle(req: Request, res: Response)
    {
        const listGeneroUseCase = new ListGeneroUseCase();

        const result = await listGeneroUseCase.execute();

        return res.status(200).json(result);
    }
}
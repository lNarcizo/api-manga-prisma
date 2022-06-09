import {Request, Response} from "express";
import {DeleteGeneroUseCase} from "./DeleteGeneroUseCase";

export class DeleteGeneroController {

    async handle(req: Request, res: Response)
    {
        const { id } = req.body;

        const deleteGeneroUseCase = new DeleteGeneroUseCase();

        const result = await deleteGeneroUseCase.execute({id});

        const resultData = {
            "deleted": true,
            "data": result
        };

        return res.status(200).json(resultData);
    }
}
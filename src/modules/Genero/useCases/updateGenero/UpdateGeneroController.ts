import {Request, Response} from "express";
import {UpdateGeneroUseCase} from "./UpdateGeneroUseCase";

export class UpdateGeneroController {

    async handle(req: Request, res: Response)
    {
        const { id, nome } = req.body;

        const updateGeneroUseCase = new UpdateGeneroUseCase();

        const result = await updateGeneroUseCase.execute({id, nome});

        const resultData = {
            "updated": true,
            "data": result
        }

        return res.status(200).json(resultData);
    }
}
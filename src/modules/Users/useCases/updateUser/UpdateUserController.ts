import {Request, Response} from "express";
import {UpdateUserUseCase} from "./UpdateUserUseCase";

export class UpdateUserController {

    async handle(req: Request, res: Response)
    {
        const { id, nome, email } = req.body;

        const updateUserUseCase = new UpdateUserUseCase();

        const result = await updateUserUseCase.execute({id, nome, email});

        const resultData = {
            "updated" : true,
            "data": result
        }

        return  res.status(200).json(resultData);
    }
}
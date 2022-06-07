import {Request, Response} from "express";
import {DeleteUserUseCase} from "./DeleteUserUseCase";

export class DeleteUserController {

    async handle(req: Request, res: Response)
    {
        const { id } = req.body;

        const deleteUserController = new DeleteUserUseCase();

        const result = await deleteUserController.execute({id});

        const resultData = {
          "deleted" : true,
          "data": result
        };

        return res.status(200).json(resultData);
    }
}
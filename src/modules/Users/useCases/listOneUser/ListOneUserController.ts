import {Request, Response} from "express";
import {ListOneUserUseCase} from "./ListOneUserUseCase";

export class ListOneUserController {

    async handle(req: Request, res: Response)
    {
        const { id } = req.body;

        const listOneUserUseCase = new ListOneUserUseCase();

        const result = await listOneUserUseCase.execute({id});

        return res.status(200).json(result);
    }
}
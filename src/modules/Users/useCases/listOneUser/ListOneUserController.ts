import {Request, Response} from "express";
import {ListOneUserUseCase} from "./ListOneUserUseCase";

export class ListOneUserController {

    async handle(req: Request, res: Response)
    {
        const { email } = req.body;

        const listOneUserUseCase = new ListOneUserUseCase();

        const result = await listOneUserUseCase.execute({email});

        return res.status(200).json(result);
    }
}
import {Request, Response} from "express";
import {ListUserUseCase} from "./ListUserUseCase";

export class ListUserController {

    async handle(req: Request, res: Response)
    {
        const listUserUseCase = new ListUserUseCase();

        const result = await listUserUseCase.execute();

        return res.status(200).json(result);
    }
}
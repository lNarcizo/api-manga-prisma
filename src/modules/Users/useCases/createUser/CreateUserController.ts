import {Request, Response} from "express";
import {CreateUserUseCase} from "./CreateUserUseCase";

export class CreateUserController {

    async handle(req: Request, res: Response)
    {
        const { nome, email,password } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({nome, email, password});

        const resultData = {
            "created": true,
            "data": result
        }

        return res.status(201).json(resultData);
    }
}
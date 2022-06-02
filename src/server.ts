import "express-async-errors";
import express, {NextFunction, Request, Response} from 'express';
import {routes} from "./routes";
import {AppError} from "./errors/AppError";

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res:Response, next: NextFunction)=> {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json(
            {
                error: true,
                message: err.message
            }
        );
    }

    return res.status(500).json(
        {
            error: true,
            message: `Internal server error: ${err.message}`
        }
    );
});

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("Servidor rodando na porta 3333 "));
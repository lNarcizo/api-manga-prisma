import { CelebrateError } from "celebrate";
import {NextFunction, Request, Response} from "express";
import {AppError} from "./AppError";

export const exceptionsHandler = (
    error: Error,
    request: Request,
    response: Response,
    _: NextFunction,
) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }

    if (error instanceof CelebrateError) {
        const { details } = error;

        const messages: string[] = [];

        details.forEach(detail => {
            const { message } = detail;
            message
                .split('. ')
                .forEach(msg =>
                    messages.push(msg.replace('"', '').replace('"', '')),
                );
        });

        return response.status(400).json({
            error: error.message,
            messages,
        });
    }

    return response.status(500).json({
        status: 'error',
        message: error.message,
    });
};
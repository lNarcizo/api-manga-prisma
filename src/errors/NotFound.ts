import { Request, Response, NextFunction } from 'express';

const notFound = (request: Request, response: Response, _: NextFunction) => {
    const message = 'Recurso não encontrado';
    response.status(404).json({ message });
};

export { notFound };
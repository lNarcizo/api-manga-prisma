import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const CreateUserRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            nome: Joi.string().required(),
            capitulo: Joi.number().required(),
            generoId: Joi.number().required(),
            userId: Joi.number().required(),
        }),
    },
    { abortEarly: false, messages },
);
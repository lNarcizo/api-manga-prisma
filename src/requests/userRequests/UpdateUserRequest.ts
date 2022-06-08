import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const UpdateUserRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            id: Joi.number().required(),
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
        }),
    },
    { abortEarly: false, messages },
);
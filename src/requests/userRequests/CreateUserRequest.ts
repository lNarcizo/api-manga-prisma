import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const CreateUserRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().required(),
        }),
    },
    { abortEarly: false, messages },
);
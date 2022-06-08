import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const ListOneUserRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            id: Joi.string().email().required(),
        }),
    },
    { abortEarly: false, messages },
);
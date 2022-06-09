import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const UpdateGeneroRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            id: Joi.number().required(),
            nome: Joi.string().required(),
        }),
    },
    { abortEarly: false, messages },
);
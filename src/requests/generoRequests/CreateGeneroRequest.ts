import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const CreateGeneroRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            nome: Joi.string().required(),
        }),
    },
    { abortEarly: false, messages },
);
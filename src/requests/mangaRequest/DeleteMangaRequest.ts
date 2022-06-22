import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const DeleteMangaRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            nome: Joi.number().required(),
        }),
    },
    { abortEarly: false, messages },
);
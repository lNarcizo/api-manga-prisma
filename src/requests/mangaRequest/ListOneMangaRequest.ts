import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const ListOneMangaRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            id: Joi.number().required(),
        }),
    },
    { abortEarly: false, messages },
);
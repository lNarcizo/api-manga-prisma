import { celebrate, Joi, Segments } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const UpdateMangaRequest = celebrate(
    {
        [Segments.BODY]: Joi.object({
            id: Joi.number().required(),
            nome: Joi.string().required(),
            senha: Joi.number().required(),
        }),
    },
    { abortEarly: false, messages },
);
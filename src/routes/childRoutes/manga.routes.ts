import {CreateMangaController} from "../../modules/Manga/useCases/createManga/CreateMangaController";
import {Router} from "express";
import {CreateUserRequest} from "../../requests/mangaRequest/CreateMangaRequest";

const createMangaController = new CreateMangaController();

const mangaRoutes = Router();

mangaRoutes.post("/cadastro", CreateUserRequest, createMangaController.handle);

export { mangaRoutes };
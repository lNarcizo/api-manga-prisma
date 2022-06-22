import {CreateMangaController} from "../../modules/Manga/useCases/createManga/CreateMangaController";
import {Router} from "express";
import {CreateUserRequest} from "../../requests/mangaRequest/CreateMangaRequest";
import {UpdateMangaController} from "../../modules/Manga/useCases/updateManga/UpdateMangaController";
import {UpdateMangaRequest} from "../../requests/mangaRequest/UpdateMangaRequest";

const createMangaController = new CreateMangaController();
const updateMangaController = new UpdateMangaController();

const mangaRoutes = Router();

mangaRoutes.post("/cadastro", CreateUserRequest, createMangaController.handle);
mangaRoutes.put("/edicao", UpdateMangaRequest, updateMangaController.handle);

export { mangaRoutes };
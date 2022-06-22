import {CreateMangaController} from "../../modules/Manga/useCases/createManga/CreateMangaController";
import {Router} from "express";
import {CreateUserRequest} from "../../requests/mangaRequest/CreateMangaRequest";
import {UpdateMangaController} from "../../modules/Manga/useCases/updateManga/UpdateMangaController";
import {UpdateMangaRequest} from "../../requests/mangaRequest/UpdateMangaRequest";
import {DeleteMangaController} from "../../modules/Manga/useCases/deleteManga/DeleteMangaController";
import {DeleteMangaRequest} from "../../requests/mangaRequest/DeleteMangaRequest";
import {ListMangaController} from "../../modules/Manga/useCases/listManga/ListMangaController";

const createMangaController = new CreateMangaController();
const updateMangaController = new UpdateMangaController();
const deleteMangaController = new DeleteMangaController();
const listMangaController = new ListMangaController();

const mangaRoutes = Router();

mangaRoutes.post("/cadastro", CreateUserRequest, createMangaController.handle);
mangaRoutes.put("/edicao", UpdateMangaRequest, updateMangaController.handle);
mangaRoutes.delete("/excluir", DeleteMangaRequest, deleteMangaController.handle);
mangaRoutes.get("/listar-todos", listMangaController.handle);

export { mangaRoutes };
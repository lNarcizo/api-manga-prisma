import {Router} from "express";
import {CreateGeneroController} from "../../modules/Genero/useCases/createGenero/CreateGeneroController";

const createGeneroController = new CreateGeneroController()

const generoRoutes = Router();

generoRoutes.post("/cadastro", createGeneroController.handle);

export { generoRoutes };
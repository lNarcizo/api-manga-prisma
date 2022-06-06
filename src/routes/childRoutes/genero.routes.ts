import {Router} from "express";
import {CreateGeneroController} from "../../modules/Genero/useCases/createGenero/CreateGeneroController";
import {ListGeneroController} from "../../modules/Genero/useCases/listGenero/ListGeneroController";
import {ListOneGeneroController} from "../../modules/Genero/useCases/listOneUser/ListOneGeneroController";

const createGeneroController = new CreateGeneroController();
const listGeneroController = new ListGeneroController();
const listOneGeneroController = new ListOneGeneroController();

const generoRoutes = Router();

generoRoutes.post("/cadastro", createGeneroController.handle);
generoRoutes.post("/listar-todos", listGeneroController.handle);
generoRoutes.post("/lista-um", listOneGeneroController.handle);

export { generoRoutes };
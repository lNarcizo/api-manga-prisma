import {Router} from "express";
import {CreateGeneroController} from "../../modules/Genero/useCases/createGenero/CreateGeneroController";
import {ListGeneroController} from "../../modules/Genero/useCases/listGenero/ListGeneroController";
import {ListOneGeneroController} from "../../modules/Genero/useCases/listOneUser/ListOneGeneroController";
import {CreateGeneroRequest} from "../../requests/generoRequests/CreateGeneroRequest";
import {ListOneGeneroRequest} from "../../requests/generoRequests/ListOneGeneroRequest";
import {UpdateGeneroRequest} from "../../requests/generoRequests/UpdateGeneroRequest";
import {UpdateGeneroController} from "../../modules/Genero/useCases/updateGenero/UpdateGeneroController";

const createGeneroController = new CreateGeneroController();
const listGeneroController = new ListGeneroController();
const listOneGeneroController = new ListOneGeneroController();
const updateGeneroController = new UpdateGeneroController();

const generoRoutes = Router();

generoRoutes.post("/cadastro", CreateGeneroRequest, createGeneroController.handle);
generoRoutes.get("/listar-todos", listGeneroController.handle);
generoRoutes.get("/lista-um", ListOneGeneroRequest, listOneGeneroController.handle);
generoRoutes.put("/edicao", UpdateGeneroRequest, updateGeneroController.handle);

export { generoRoutes };
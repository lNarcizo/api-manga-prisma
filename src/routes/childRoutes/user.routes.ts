import {Router} from "express";
import {CreateUserController} from "../../modules/Users/useCases/createUser/CreateUserController";
import {ListUserController} from "../../modules/Users/useCases/listUser/ListUserController";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

const userRoutes = Router();

userRoutes.post("/cadastro", createUserController.handle);
userRoutes.get("/listar-todos", listUserController.handle);

export { userRoutes };
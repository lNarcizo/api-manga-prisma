import {Router} from "express";
import {CreateUserController} from "../../modules/Users/useCases/createUser/CreateUserController";
import {ListUserController} from "../../modules/Users/useCases/listUser/ListUserController";
import {ListOneUserController} from "../../modules/Users/useCases/listOneUser/ListOneUserController";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const listOneUserController = new ListOneUserController();

const userRoutes = Router();

userRoutes.post("/cadastro", createUserController.handle);
userRoutes.get("/listar-todos", listUserController.handle);
userRoutes.get("/listar-um", listOneUserController.handle);

export { userRoutes };
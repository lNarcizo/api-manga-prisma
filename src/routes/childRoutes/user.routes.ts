import {Router} from "express";
import {CreateUserController} from "../../modules/Users/useCases/createUser/CreateUserController";
import {ListUserController} from "../../modules/Users/useCases/listUser/ListUserController";
import {ListOneUserController} from "../../modules/Users/useCases/listOneUser/ListOneUserController";
import {UpdateUserController} from "../../modules/Users/useCases/updateUser/UpdateUserController";
import {DeleteUserController} from "../../modules/Users/useCases/deleteUser/DeleteUserController";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const listOneUserController = new ListOneUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.post("/cadastro", createUserController.handle);
userRoutes.get("/listar-todos", listUserController.handle);
userRoutes.get("/lista-um", listOneUserController.handle);
userRoutes.put("/edicao", updateUserController.handle);
userRoutes.delete("/excluir", deleteUserController.handle);

export { userRoutes };
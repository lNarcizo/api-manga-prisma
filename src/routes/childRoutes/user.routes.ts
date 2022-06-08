import {Router} from "express";
import {CreateUserController} from "../../modules/Users/useCases/createUser/CreateUserController";
import {ListUserController} from "../../modules/Users/useCases/listUser/ListUserController";
import {ListOneUserController} from "../../modules/Users/useCases/listOneUser/ListOneUserController";
import {UpdateUserController} from "../../modules/Users/useCases/updateUser/UpdateUserController";
import {DeleteUserController} from "../../modules/Users/useCases/deleteUser/DeleteUserController";
import {CreateUserRequest} from "../../requests/userRequests/CreateUserRequest";
import {ListOneUserRequest} from "../../requests/userRequests/ListOneUserRequest";
import {UpdateUserRequest} from "../../requests/userRequests/UpdateUserRequest";
import {DeleteUserRequest} from "../../requests/userRequests/DeleteUserRequest";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const listOneUserController = new ListOneUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.post("/cadastro", CreateUserRequest, createUserController.handle);
userRoutes.get("/listar-todos", listUserController.handle);
userRoutes.get("/lista-um", ListOneUserRequest, listOneUserController.handle);
userRoutes.put("/edicao", UpdateUserRequest, updateUserController.handle);
userRoutes.delete("/excluir", DeleteUserRequest, deleteUserController.handle);

export { userRoutes };
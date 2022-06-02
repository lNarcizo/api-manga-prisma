import {Router} from "express";
import {CreateUserController} from "../../modules/Users/useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();

const userRoutes = Router();

userRoutes.post("/cadastro", createUserController.handle);

export { userRoutes };
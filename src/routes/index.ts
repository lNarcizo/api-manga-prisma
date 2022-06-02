import {Router} from "express";
import {userRoutes} from "./childRoutes/user.routes";

const routes = Router();

routes.use("/usuario", userRoutes);

export { routes };
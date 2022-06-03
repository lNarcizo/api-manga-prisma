import {Router} from "express";
import {userRoutes} from "./childRoutes/user.routes";
import {generoRoutes} from "./childRoutes/genero.routes";

const routes = Router();

routes.use("/usuario", userRoutes);

routes.use("/genero", generoRoutes);

export { routes };
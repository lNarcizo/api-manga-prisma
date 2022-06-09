import {Router} from "express";
import {userRoutes} from "./childRoutes/user.routes";
import {generoRoutes} from "./childRoutes/genero.routes";
import {mangaRoutes} from "./childRoutes/manga.routes";

const routes = Router();

routes.use("/usuario", userRoutes);

routes.use("/genero", generoRoutes);

routes.use("/mangas", mangaRoutes)

export { routes };
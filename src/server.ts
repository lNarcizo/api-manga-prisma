import "express-async-errors";
import express from 'express';
import {routes} from "./routes";
import { exceptionsHandler } from "./errors/ExceptionsHandler";
import { notFound } from "./errors/NotFound";

const app = express();

app.use(express.json());

app.use(routes);

app.use(exceptionsHandler);
app.use(notFound);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("Servidor rodando na porta 3333 "));
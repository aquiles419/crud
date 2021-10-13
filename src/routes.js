import { Router } from "express";

import authMiddleware from './app/middlewares/auth';

import UserConttroller from "./app/controllers/UserConttroller";
import SessionConttroller from "./app/controllers/sessionController";
import CompanyController from "./app/controllers/CompanyController";

const routes = new Router();

//Usuario
routes.post('/users', UserConttroller.store);

//Auteuncação senha
routes.post('/sessions', SessionConttroller.store);

// token de autenticação  abaixo disso aqui tudo precisa estar autenticado
//atualizar o email senha do usuario
routes.use(authMiddleware);
routes.put('/users', UserConttroller.update);

//adicona empresa
routes.post('/company', CompanyController.store);


export default routes;
import { Router } from "express";
import { ClientesController } from "../controllers/ClientesController";
const router = Router();




router.get('/clientes',ClientesController.all);
router.get('/clientes/where',ClientesController.where)
router.get('/clientes/id/:id',ClientesController.find)
router.post('/clientes',ClientesController.insert)
router.put('/clientes/:id',ClientesController.update);
router.delete('/clientes/:id',ClientesController.delete)

export default router;

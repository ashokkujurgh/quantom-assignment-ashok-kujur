import express from "express";
import { CommonRoutesConfig, configureRoutes } from "../../services/routes/common.router.config";
import { TaskMidlware } from "../midlewares/task.midlware";
import { TaskController } from "../controllers/task.controller";

export class TaskRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'TaskRoutes');
        this.configureRoutes();
    }
    configureRoutes() {
        const taskMidlware = new TaskMidlware();
        const taskController = new TaskController();

        this.app.post('/tasks', [taskMidlware.validateData, taskController.createTask])
        this.app.get('/tasks/:status', [taskMidlware.validateData, taskController.getTask])
        this.app.get('/tasks', [taskMidlware.validateData, taskController.getTask])
        this.app.get('/tasks/:status/count', [taskMidlware.validateData, taskController.getTaskCount])
        this.app.get('/tasks/:sort/sort', [taskMidlware.validateData, taskController.getTask])
    }
}
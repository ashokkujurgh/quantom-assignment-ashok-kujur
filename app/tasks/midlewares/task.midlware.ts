import express from 'express';

function isDateTodayOrFuture(givenDateStr: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const givenDate = new Date(givenDateStr);
    givenDate.setHours(0, 0, 0, 0);

    return givenDate >= today;
}


export class TaskMidlware {
    private static instance: TaskMidlware;

    static getInstance() {
        if (!TaskMidlware.instance) {
            TaskMidlware.instance = new TaskMidlware();
        }
        return TaskMidlware.getInstance;
    }

    validateData(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!req.body.title) {
            res.status(400).send({ message: 'title is required field' });
        }

        if (!req.body.status) {
            res.status(400).send({ message: 'Status is required field' });
        }
        //here check the status is matching with the enum or not
        else if (!Object.values(['pending', 'done']).includes(req.body.status)) {
            res.status(400).send({ message: 'status is not valid' });
        }


        else if (!req.body.dueDate) {
            res.status(400).send({ message: 'Due date is required field' });
        }
        //here check the due date is in the future or not
        else if (!isDateTodayOrFuture(req.body.dueDate)) {
            res.status(400).send({ message: 'Due data shoud not be past' });
        }

        else next();
    }
}
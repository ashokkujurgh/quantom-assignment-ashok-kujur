import { Request, Response } from 'express';
import Tasks from '../models/task.model';
import { ObjectId } from 'mongodb';
export class TaskController {

    async createTask(req: Request, res: Response) {
        try {
            const createTask = new Tasks({
                _id: new ObjectId(),
                ...req.body
            });
            await createTask.save();
            res.status(201).send({ message: "task created" })
        }
        catch (e) {
            res.status(500).send({ message: "Unexpected error" })
        }
    }


    async getTask(req: Request, res: Response) {
        try {

            var filter = {};

            if (req.params.status) {
                filter = { status: req.params.status }
            }
            //filtering request handle here
            if (Object.keys(filter).length > 0) {
                Tasks.aggregate([
                    {
                        $match: filter,
                    },
                ]).then((data) => {
                    res.status(200).send({ data: data });
                }).catch((e) => {

                    res.status(404).send({ message: "data not found" })
                });
            }

            //sorting request handle here
            else if (req.params.sort) {
                Tasks.aggregate([
                    {
                        $sort: {
                            createdAt: req.params.sort == 'asc' ? 1 : -1
                        }
                    }
                ]).then((data) => {
                    res.status(200).send({ data: data });
                }).catch((e) => {
                    res.status(404).send({ message: "data not found" })
                });
            }
            
            //return all data  if user does not provide any filter or sort
            else {
                Tasks.find().then((data) => {
                    res.status(200).send({ data: data });
                }).catch((e) => {
                    res.status(404).send({ message: "data not found" })
                });
            }
        }
        catch (e) {

            res.status(500).send({ message: "Unexpected error" })
        }
    }


    async getTaskCount(req: Request, res: Response) {
        Tasks.countDocuments({ status: req.params.status }).then((count) => {
            res.status(200).send({ count: count });
        }).catch((e) => {
            res.status(404).send({ message: "data not found" })
        });
    }
}
import { getRepository } from "typeorm";
import { Tasks } from "../entity/Tasks";
import { Request, Response } from "express";

export const getTasks = async(request: Request, response: Response) => {
    const tasks = await getRepository(Tasks).find();
    return response.json(tasks);
}

export const saveTask = async(request: Request, response: Response) => {
    const task = await getRepository(Tasks).save(request.body);
    return response.json(task)
}

// export const getTask = async(request: Request, response: Response) => {
//     const task = await getRepository(Tasks).findOneBy(parseInt(request.params.id));
//     return response.json(task);
// }

export const updateTask = async(request: Request, response: Response) => {
    const task = await getRepository(Tasks).update(request.params.id, request.body);
    return response.json(task);
}

export const deleteTask = async(request: Request, response: Response) => {
    const task = await getRepository(Tasks).delete(request.params.id);
    return response.json(task);
}

export const finishedTask = async(request: Request, response: Response) => {
    request.body.finished = true;
    const task = await getRepository(Tasks).update(request.params.id, request.body.finished);
    return response.json(task);
}
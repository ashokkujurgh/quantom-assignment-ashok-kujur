import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

export interface TaskInterfae extends mongoose.Document {
    _id: ObjectId;
    title:string;
    dueDate: string; 
    status:string;
    createdAt:Date
}

const taskSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: true },
    title: { type: String, required: true },
    status: { type: String, required: true, enum: ['pending', 'done'] }, 
    dueDate:{ type: Date, required: true }, // 1925-05-12
    createdAt: { type: Date, required: true, default: Date.now },
  });
  
  const Tasks = mongoose.model<TaskInterfae>('Tasks', taskSchema, 'tasks');
  
  export default Tasks;
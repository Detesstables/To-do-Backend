import { Schema, model, Document } from 'mongoose';

// 1. Define la interfaz de tu documento, como dato no hace falta colocar el ID, mongoose lo maneja automáticamente
export interface ITodo extends Document {
  task: string;
  completed: boolean;
}

// 2. Define el esquema que Mongoose usará para el modelo
const todoSchema = new Schema<ITodo>({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// 3. Crea y exporta el modelo de Mongoose
export default model<ITodo>('Todo', todoSchema);
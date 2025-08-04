import { Request, Response } from 'express';
import Todo, { ITodo } from '../models/todo.models';


// Controlador para obtener todas las tareas
export const getTodos = async (req: Request, res: Response): Promise<Response> => {
  const todos: ITodo[] = await Todo.find();
  return res.status(200).json(todos);
};


// Controladores para crear, actualizar y eliminar tareas
export const createTodo = async (req: Request, res: Response): Promise<Response> => {
  const { task } = req.body;
  if (!task || typeof task !== 'string') {
    return res.status(400).json({ message: 'La tarea es requerida y debe ser un texto.' });
  }

  const newTodo: ITodo = new Todo({ task });
  await newTodo.save();
  return res.status(201).json(newTodo);
};

export const updateTodo = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { task, completed } = req.body;

  try {
    const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(
      id,
      { task, completed },
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Tarea no encontrada.' });
    }

    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar la tarea.' });
  }
};

export const deleteTodo = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: 'Tarea no encontrada.' });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar la tarea.' });
  }
};
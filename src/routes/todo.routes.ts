import { Router } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todo.controller';

const router = Router();

// Endpoint para obtener todas las tareas
router.get('/', getTodos);

// Endpoint para crear una nueva tarea
router.post('/', createTodo);

// Endpoint para actualizar una tarea por su ID
router.put('/:id', updateTodo);

// Endpoint para eliminar una tarea por su ID
router.delete('/:id', deleteTodo);

export default router;
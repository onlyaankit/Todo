import express from 'express';
import { createTodo, getAllTodos } from '../controllers/todo.controller.js';

const router = express.Router();

router.route("/").post(createTodo);
router.route("/").get(getAllTodos);

export default router;

import Todo from "../models/todo.model.js"; // Use a different name for the model

export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Check if title and description are provided
        if (!title || !description) {
            return res.status(403).json({
                success: false,
                message: "Title and description are required."
            });
        }

        // Create a new todo instance
        const newTodo = new Todo({
            title,
            description
        });

        // Save the new todo
        await newTodo.save();

        // Respond with success message
        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: newTodo
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({
            success: true,
            todos: todos.length === 0 ? []: todos
        })
    } catch (error) {
        console.log(error);
    }
}

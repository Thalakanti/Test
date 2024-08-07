const Todo = require("../models/todoModels");

exports.create = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const todo = new Todo({
      title: title,
      description: description,
      completed: completed,
    });

    await todo.save();
    res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing happend" + err.message,
    });
  }
};

exports.getAllTodos = async () => {
  try {
    const todo= await Todo.find()
    res.status(200).json({
        success:true,
        data:todo
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing happend" + err.message,
    });
  }
};

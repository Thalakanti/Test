import axios from "axios";
import { useState, useEffect } from "react";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    useEffect(() => {
        AddingTodos();
      });
  }
    const AddingTodos = async (req, res) => {
      const payload = {
        title: req.title,
        description: req.description,
        completed: req.completed,
      };

      const response = await axios.post(
        "http:localhost:8000/api/todo/create",
        payload
      );
      if (response.success === true) {
        setTitle("");
        setDescription("");
        setCompleted("");
        res.status(201).json({
          success: true,
          message: "Added Todo In List Successfully ",
        });
      }
    };
   
  


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label htmlFor="">completed</label>
          <input
            type="text"
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;

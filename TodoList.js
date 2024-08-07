import axios from 'axios'
// import react from "react"
import { useState,useEffect } from 'react'
function TodoList(){
const [todos,setTodos]=useState([])

const FetchAllTodos=async()=>{
    const response=await axios.get('http:localhost:8000/api/todo/')

    if (response.data.success === true) {
        setTodos(response.data.data);
      } else {
        alert(response.data.message);
      }
    ;
  
   
  
}
useEffect(() => {
    FetchAllTodos();
  },[]);

return (
    <div>
        
       {todos.map((todo) => {
         return(
            <li key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </li>
         )
        })}
    
    </div>
    )

}
export default TodoList
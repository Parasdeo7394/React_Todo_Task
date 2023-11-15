import React, { useState } from "react";
import TodoCard from "./TodoCard";


const TodoApp = () => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todos, setTodos] = useState([]);
  
  const handleAddTodo = () => {
    if (todoName && todoDescription) {
      setTodos([...todos, { name: todoName, description: todoDescription }]);
      setTodoName("");
      setTodoDescription("");
    }
  };

  const handleDeleteTodo = (todoToDelete) => {
    const updatedTodos = todos.filter((todo) => todo !== todoToDelete);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (todoToEdit, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo === todoToEdit ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div  style={{gap:"10px"}}>
      <h1 style={{marginLeft:"270px", color:"#00ffff"}}>My Todo</h1>
      <div style={{ display:"flex", justifyContent:"space-around", marginLeft:"100px"}}>
        <input
          
          type="text"
          placeholder="Todo Name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <input
          
          type="text"
          placeholder="Todo Description"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <button style={{color:"white" , backgroundColor:"#00ffff" , width:"200px" , height:"30px" , borderRadius:"5px"}} onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div style={{display: "flex",justifyContent:"space-around" }}>
          <div ><h1 >My Todos</h1></div>
          <div style={{display:"flex",alignItems:"center"}}>
            <div><label for="statusFilter"><h1>Status Filter:</h1></label></div>
            <div>
                <select id="statusFilter" style={{color:"white",backgroundColor:"#e6005c"}}>
                    <option value="all">All</option>
                    <option  value="completed">Completed</option>
                    <option  value="notCompleted">Not Completed</option>
                </select>
            </div>
          </div>
      </div>
      
      <div style={{ display: "flex", marginLeft:"270px", flexDirection: "row", flexWrap: "wrap" }}>
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;

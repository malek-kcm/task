import React, { useContext, useState } from "react";
import { TaskContext } from "./ContextTask";
import Task from "./Task";
import { useNavigate } from "react-router-dom";
import './TaskLists.css';  
export default function TaskLists() {
  const [showAbout, setShowAbout] = useState(false);
  const { tasks, setTasks } = useContext(TaskContext);
  const navigate = useNavigate(); 

  // Fonction pour supprimer une tâche
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Fonction pour rediriger vers le formulaire d'ajout de tâche
  const goToFormTask = () => {
    navigate("/form"); 
  };

  return (
    <div className="container">
   
      <div className="header">
        <h1>Task Tracker</h1>
      
        <button className="add-task-btn" onClick={goToFormTask}>
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? <p>You have no tasks yet.</p> : null}

    
      <div className="task-list">
        {tasks.map((task) => (
          <Task 
            key={task.id} 
            id={task.id} 
            title={task.task} 
            date_time={task.date_time} 
            onDelete={deleteTask}
          />
        ))}

        <p className="about" onClick={() => setShowAbout(!showAbout)}>
          About
        </p>
        {showAbout && <p className="about-text">By akacem malek - 2025</p>}
      </div>
    </div>
  );
}

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "./ContextTask"; // Importer le contexte
import { v4 as id } from "uuid";
import "./TaskLists.css";
import Task from "./Task"; // Assurer que Task est importé
import './FormTask.css'; // Importer le fichier CSS pour FormTask

export default function FormTask() {
  const [task, setTask] = useState("");
  const [date_time, setDateTime] = useState("");
  const [isReminder, setIsReminder] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const { tasks, setTasks } = useContext(TaskContext); 
  const navigate = useNavigate(); // Créer une instance de navigate


  const goBackToTasks = () => {
    navigate("/");
  };

  // Fonction pour sauvegarder la tâche
  const handleSaveTask = (e) => {
    e.preventDefault();

    if (task && date_time) {
      const newTask = {
        id: id(), 
        task,
        date_time,
        isReminder,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]); 
      navigate("/"); // Rediriger vers la page principale après l'ajout
    }
  };

  // Fonction pour supprimer une tâche
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Filtrer la tâche à supprimer
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Task Tracker</h1>
        <button onClick={goBackToTasks} className="close-btn">Close</button>
      </div>

      <form onSubmit={handleSaveTask} className="form-task-form">
        <label>Task :</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <label>Day & Time :</label>
        <input
          type="datetime-local"
          value={date_time}
          onChange={(e) => setDateTime(e.target.value)}
        />

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="monCheckbox"
            checked={isReminder}
            onChange={(e) => setIsReminder(e.target.checked)}
          />
          <label htmlFor="monCheckbox">Set reminder</label>
        </div>

        <button type="submit" className="save-btn">Save task</button>
      </form>

      <div className="task-list">
        <h2>Existing Tasks:</h2>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.map((t) => (
            <Task
              key={t.id}
              id={t.id}
              title={t.task}
              date_time={t.date_time}
              onDelete={handleDeleteTask}
            />
          ))
        )}
      </div>

      <p className="about" onClick={() => setShowAbout(!showAbout)}>
        About
      </p>
      {showAbout && <p>By malek akacem - 2025</p>}
    </div>
  );
}

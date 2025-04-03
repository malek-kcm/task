import { createContext, useState } from "react";
import { v4 as id } from 'uuid';
// Création du contexte
export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: id(), task: " ", date_time: "", isReminder: false },
    { id: id(), task: "", date_time: "", isReminder: false }
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

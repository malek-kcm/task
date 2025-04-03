import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskLists from "./TaskLists";
import FormTask from "./FormTask";
import { TaskProvider } from "./ContextTask";

export default function App() {
  return (
    <TaskProvider>
     
        <Routes>
          <Route path="/" element={<TaskLists />} />
          <Route path="/form" element={<FormTask />} />
        </Routes>
    
    </TaskProvider>
  );
}

import { useState } from "react";
import Data from "../Data.json";

export default function useTaskListState() {
  const [tasks, setTasks] = useState(Data);
  const [newTask, setNewTask] = useState("");
  const [nextId, setNextId] = useState(Data.length + 1);

  const handleDelete = (taskId) => {
    const nuevasTareas = tasks.filter((tarea) => tarea.id !== taskId);
    setTasks(nuevasTareas);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: nextId,
        task: newTask,
        status: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
      setNextId(nextId + 1);
    }
  };

  const Completed = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status };
        }
        return task;
      });
    });
  };

  return {
    tasks,
    newTask,
    handleDelete,
    handleAddTask,
    setNewTask,
    setTasks,
    Completed
  };
}

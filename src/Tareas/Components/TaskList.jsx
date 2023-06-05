import jsPDF from "jspdf";
import "jspdf-autotable";
import TaskItem from "./TaskItem";
import useTaskListState from "../Hooks/useTaskListState";
import { downloadExcel } from "../Utils/excelUtils";
export default function TaskList() {
  const { tasks, newTask, handleDelete, handleAddTask, setNewTask, Completed } = useTaskListState();
  //Detect event if Enter Executes handleAddTask (New task)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };


  const handleDownloadPDF = () => {
    //Creates new document PDF
    const doc = new jsPDF();
    //Takes table with ID: task-table
    doc.autoTable({ html: "#task-table" });
    //Download document
    doc.save("tasks.pdf");
  };


  const handleDownloadExcel = async () => {
    downloadExcel(tasks);
  };

  return (

    <div className="bg-light min-vh-100">
      <div className="input-group input-group-lg sticky-top d-flex flex-column px-0">
        <input
          type="text"
          className="form-control w-100 text-center "
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          value={newTask}
          placeholder="Add new task"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <div className="d-flex gap-1 mt-1">
          <button className="btn btn-info btn-sm w-50" onClick={handleAddTask}>
            Add
          </button>
          <button
            className="btn btn-secondary btn-sm w-50"
            onClick={handleDownloadPDF}
          >
            Download PDF
          </button>
          <button
            className="btn btn-success btn-sm w-50"
            onClick={handleDownloadExcel}
          >
            Download Excel
          </button>
        </div>
      </div>


      <table id="task-table" style={{ display: "none" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.task}</td>
              <td>{task.status ? "Completed" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>


      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            Task={task}
            handleDelete={handleDelete}
            Completed={Completed}
          />
        ))
      ) : (
        <h1 className="text-center mt-5">No Tasks Available</h1>
      )}
    </div>
    
  );
}

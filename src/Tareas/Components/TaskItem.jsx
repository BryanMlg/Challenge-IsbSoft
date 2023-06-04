export default function TaskItem({ Task, handleDelete, Completed }) {
  const handleEliminar = () => {
    handleDelete(Task.id);
  };

  return (
    <div className="container mt-3 ">
      <div
        className={`card ${Task.status ? "border-primary" : "border-warning"}`}
      >
        <div className="card-body border">
          {Task.status ? (
            <h5 className="card-title text-decoration-line-through text-center">
              {Task.task}
            </h5>
          ) : (
            <h5 className="card-title text-center">{Task.task}</h5>
          )}

          <div className="form-check form-switch d-flex flex-row justify-content-center align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={Task.status}
              onChange={() => Completed(Task.id)}
            />
          </div>

          <div className="d-flex flex-row mt-3 justify-content-center align-items-center ">
            <button className="btn btn-danger w-50" onClick={handleEliminar}>
              <i className="bi bi-file-earmark-x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

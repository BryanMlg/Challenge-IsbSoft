import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import MovieList from "../MovieDB/Components/MovieList";
import TaskList from "../Tareas/Components/TaskList";
import Logo from "../Assets/5.png";
const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <div className="container">
          <Link className="navbar-brand" to="https://github.com/BryanMlg">
            Bryan Guerra
            <img
              src={Logo}
              alt="Logo"
              style={{ borderRadius: 1000, width: 30, marginLeft: 15 }}
            />
          </Link>

          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">
                Tasks
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

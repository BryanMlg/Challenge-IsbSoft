import { useState } from "react";
import MovieInfo from "./MovieInfo";
export default function MovieItem({ movie }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="card mb-3 d-flex pointer"
      style={{ maxWidth: "500px", cursor: "pointer" }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="row g-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="img-fluid"
          alt="Img"
        />

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">
              <small className="text-body-secondary">
                {movie.release_date}
              </small>
            </p>
          </div>
        </div>
      </div>
      {isOpen && <MovieInfo movie={movie}/>}
    </div>
  );
}

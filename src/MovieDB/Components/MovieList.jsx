import { useEffect } from "react";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import MovieItem from "./MovieItem";
import MovieDropdown from "./MovieDropdown";
import MoviePagination from "./MoviePagination";
import useMovieListStates from "../Hooks/useMovieListStates";
import fetchMovies from "../Services/MovieServices";

export default function MovieList() {
  const {
    movies,
    setMovies,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    searchQuery,
    setSearchQuery,
    selectedGenre,
    setSelectedGenre,
    isLoading,
    setIsLoading,
  } = useMovieListStates();

  useEffect(() => {
    setIsLoading(true); // Mostrar el estado de carga
    fetchMovies(
      currentPage,
      searchQuery,
      selectedGenre,
      (fetchedMovies, fetchedTotalPages) => {
        setMovies(fetchedMovies);
        setTotalPages(fetchedTotalPages);
        setIsLoading(false); // Ocultar el estado de carga
      }
    );
  }, [
    currentPage,
    searchQuery,
    selectedGenre,
    setIsLoading,
    setMovies,
    setTotalPages,
  ]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleGenreChange = (eventKey) => {
    setSelectedGenre(eventKey);
    setCurrentPage(1);
  };

  return (
    <div>
      <Form.Group controlId="searchForm" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search movies..."
          onChange={handleSearch}
        />
      </Form.Group>
      <MovieDropdown onSelect={handleGenreChange} />
      {isLoading ? (
        // Estado de carga
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        // Películas
        <Row>
          {movies.map((movie) => {
            // Verificar si la película tiene la información necesaria
            if (
              movie.id &&
              movie.title &&
              movie.genre_ids &&
              movie.overview &&
              movie.popularity &&
              movie.poster_path
            ) {
              return (
                <Col
                  key={movie.id}
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  className="d-flex justify-content-center"
                >
                  <MovieItem movie={movie} />
                </Col>
              );
            }
            return null; // Ignorar películas sin la información necesaria
          })}
        </Row>
      )}

      <MoviePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

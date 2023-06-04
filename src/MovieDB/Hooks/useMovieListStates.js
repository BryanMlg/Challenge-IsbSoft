import { useState } from "react";

const useMovieListStates = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  return {
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
    setIsLoading
  };
};

export default useMovieListStates;

/* eslint-disable react-hooks/rules-of-hooks */
import useMakeFetch from "../Hooks/useMakeFetch";

const FetchMovies = async (currentPage, searchQuery, selectedGenre, setMovies, setTotalPages) => {
  try {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=408e95b6a43e63c6c3b74497ec8b632f&page=${currentPage}`;
    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=408e95b6a43e63c6c3b74497ec8b632f&page=${currentPage}&query=${searchQuery}`;
    } else if (selectedGenre) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=408e95b6a43e63c6c3b74497ec8b632f&page=${currentPage}&with_genres=${selectedGenre}`;
    }

    const response = await useMakeFetch(url, "GET");
    const responseData = await response.json();

    setMovies(responseData.results);
    setTotalPages(responseData.total_pages);
  } catch (error) {
    console.error(error);
  }
};

export default FetchMovies;

import { Pagination } from "react-bootstrap";

const MoviePagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const handleFirstPage = () => {
    onPageChange(1);
  };

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.First
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      />
      <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
      {Array.from({ length: 10 }, (_, index) => currentPage + index).map(
        (pageNumber) => (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        )
      )}
      <Pagination.Next
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default MoviePagination;

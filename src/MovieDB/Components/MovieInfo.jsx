export default function MovieInfo({ movie }) {
  const renderPopularityPercentage = (popularity) => {
    const percentage = Math.min((popularity / 1000) * 100, 100);
    const roundedPercentage = Math.round(percentage);
    return `${roundedPercentage}%`;
  };

  return (
    <div className="card text-center position-absolute h-100 rounded-0 d-flex justify-content-center align-items-center">
       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top w-50 mt-5" alt="Movie"/>
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title">
          Popularity: {renderPopularityPercentage(movie.popularity)}
        </h5>
        <p className="card-text">{movie.overview}</p>
      </div>
      <div className="card-header w-100"><i className="bi bi-x-lg"/></div>
    </div>
  );
}

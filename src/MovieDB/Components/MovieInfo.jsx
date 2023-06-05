export default function MovieInfo({ movie }) {
  // Calcula el número de estrellas llenas y medias
  const average = movie.vote_average;
  const fullStars = Math.floor(average / 2);
  const hasHalfStar = average % 2 !== 0;

  // Genera las estrellas llenas
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i className="bi bi-star-fill" key={`${movie.id}-full-${i}`} />);
  }

  // Agrega una estrella media si corresponde
  if (hasHalfStar) {
    stars.push(<i className="bi bi-star-half" key={`${movie.id}-half`} />);
  }

  // Completa con estrellas vacías si es necesario
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<i className="bi bi-star" key={`${movie.id}-empty-${i}`} />);
  }

  return (
    <div className="card text-center position-absolute h-100 rounded-0 d-flex justify-content-center align-items-center">
      <div className="stars">{stars}</div>
      <p className="card-text">{average}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top w-50"
        alt="Movie"
      />
      <div className="card-body mt-1 d-flex flex-column justify-content-center align-items-center overflow-auto">
        <p className="card-text">{movie.overview}</p>
      </div>
      <div className="card-header w-100">
        <i className="bi bi-x-lg" />
      </div>
    </div>
  );
}

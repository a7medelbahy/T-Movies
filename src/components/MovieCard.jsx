import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const MovieCard = ({ img, title, rate, relase_date, type, id }) => {
  useLayoutEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  });
  
  return (
    <div className="movie-card rounded-4 overflow-hidden position-relative">
      <div className="movie-img">
        <img
          src={img}
          className="img-fluid w-100 d-block"
          alt="poster"
          title={title}
        />
      </div>
      <div className="movie-card-details position-absolute p-3 w-100 h-100 top-0 text-center d-flex flex-column justify-content-between align-items-center">
        <p className="text-white fw-bold">{title}</p>
        <Link
          aria-label="movie-card"
          to={`/details/${id}/${type}`}
          className="butn main-butn"
        >
          <i className="fa-solid fa-play"></i>
        </Link>
        <div>
          <p className="text-white m-0">{relase_date}</p>
          <small className="text-white-50">
            <i className="fa-solid fa-star me-2"></i>
            {rate}/10
          </small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

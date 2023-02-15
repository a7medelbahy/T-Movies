import apiConfig from "../../api";

const MainDetails = (props) => {
  const content = props.content;
  return (
    <div className="main-details">
      <div className="row align-items-center align-items-lg-start justify-content-center justify-content-md-between text-center text-md-start">
        <div className="col-md-4 col-8 rounded-4 overflow-hidden">
          <div className="movie-poster rounded-5 overflow-hidden">
            <img
              src={
                content.poster_path
                  ? apiConfig.w500Image(content.poster_path)
                  : apiConfig.noPoster
              }
              className="img-fluid w-100 d-block"
              alt="poster"
              title={content.original_title || content.original_name}
            />
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="movie-data d-flex flex-column gap-2">
            <div>
              <h2 className="text-white fw-bold display-4">
                {content.original_title || content.original_name}
              </h2>
              <h5 className="text-white-50 fw-bold">{content.tagline}</h5>
            </div>
            <ul className="d-flex align-items-center justify-content-center justify-content-md-start flex-wrap gap-2 p-0">
              {content.genres?.map((detailItem) => {
                return (
                  <li
                    className="butn secondary-butn text-white bg-transparent"
                    key={detailItem.id}
                  >
                    {detailItem.name}
                  </li>
                );
              })}
            </ul>
            <small className="text-white-50">{content.overview}</small>
            <div className="movie-details">
              <p className="text-white m-0">
                Release date:{" "}
                <small className="text-white-50">
                  {content.first_air_date || content.release_date}
                </small>
              </p>
              <p className="text-white m-0">
                Rate:{" "}
                <small className="text-white-50">
                  {parseFloat(content.vote_average?.toFixed(1))}/10
                </small>
              </p>
              <p className="text-white m-0">
                Language:{" "}
                <small className="text-white-50">
                  {content.spoken_languages?.map((item) => {
                    return (
                      <small key={item.english_name} className="me-2">
                        {item.english_name}
                      </small>
                    );
                  })}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;

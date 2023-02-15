import apiConfig from "../../api";

const Cast = (props) => {
  const cast = props.cast;
  return (
    <div className="cast text-center text-md-start">
      <h4 className="text-white mb-3">Cast</h4>
      <div className="d-flex text-center flex-wrap gap-3 align-items-center justify-content-center justify-content-md-start">
        {cast && cast?.length ? (
          cast?.map((castItem) => {
            return (
              <div key={castItem.id} className="cast-box d-flex flex-column justify-content-center align-items-center">
                <div className="cast-img rounded-4 overflow-hidden">
                  <img
                    src={
                      castItem.profile_path
                        ? apiConfig.w500Image(castItem.profile_path)
                        : apiConfig.notFoundImg
                    }
                    className="img-fluid"
                    alt="cast"
                    title={castItem.original_name}
                  />
                </div>
                <p className="text-white mt-3">{castItem.original_name}</p>
              </div>
            );
          })
        ) : (
          <img
            src={apiConfig.noFound}
            className="not-found img-fluid w-100 d-block rounded-5"
          ></img>
        )}
      </div>
    </div>
  );
};

export default Cast;

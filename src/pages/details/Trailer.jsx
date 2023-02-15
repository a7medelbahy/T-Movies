import apiConfig from "../../api";

const Trailer = (props) => {
  const trailers = props.trailers;
  return (
    <div className="trailer text-center text-md-start">
      <h4 className="text-white mb-4">Watch Some Videos</h4>
      {trailers && trailers?.length > 0 ? (
        trailers?.map((trailerItem) => {
          return (
            <div key={trailerItem.id}>
              <h4 className="text-white-50 mb-3">{trailerItem.name}</h4>
              <iframe
                className="mb-3"
                width="100%"
                height="480"
                src={`https://www.youtube.com/embed/${trailerItem.key}`}
                title="Youtube Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
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
  );
};

export default Trailer;

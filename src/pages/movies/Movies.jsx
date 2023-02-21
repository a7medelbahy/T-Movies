import PageHeader from "../../components/PageHeader";
import apiConfig from "../../api";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import Paginate from "../../components/Paginate";
import { Helmet } from "react-helmet-async";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}movie/top_rated?api_key=${apiConfig.apiKey}&language=en-US&page=${pageno}`
    );
    setMoviesList(data.results);
    setPaginationno(data.total_pages);
  };
  const getSearch = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}search/movie?api_key=${apiConfig.apiKey}&page=${pageno}&language=en-US&&query=${searchValue}&${pageno}&include_adult=false`
    );
    setMoviesList(data.results);
    setPaginationno(data.total_pages);
  };
  useEffect(() => {
    getMovies();
  }, []);
  const handleClick = (number) => {
    setPageno(number);
  };
  useEffect(() => {
    getMovies();
  }, [pageno]);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchValue !== "" ? getSearch() : getMovies();
  };

  return (
    <div className="movies">
      <Helmet>
        <title>Movies</title>
        <meta
          name="description"
          content="most popular and top rated movies you want"
        />
        <link rel="canonical" href="/movies" />
      </Helmet>
      <PageHeader pageTitle="Movies" />
      <div className="container d-flex align-items-center flex-column py-5">
        <div className="search mb-4">
          <form
            onSubmit={handleSubmit}
            className="d-flex align-items-center rounded-5 overflow-hidden bg-black"
          >
            <input
              className="bg-transparent w-100 h-100 py-2 px-3 text-white-50"
              placeholder="Enter Keyword"
              type="search"
              value={searchValue}
              onChange={handleSearch}
            />
            <button type="submit" className="butn main-butn">
              Search
            </button>
          </form>
        </div>
        <div className="row mb-5 gy-4 align-items-center justify-content-center">
          {moviesList.map((movieItem) => {
            return (
              <div key={movieItem.id} className="col-sm-6 col-md-4 col-lg-3">
                <MovieCard
                  img={
                    movieItem.poster_path
                      ? apiConfig.w500Image(movieItem.poster_path)
                      : apiConfig.noPoster
                  }
                  title={movieItem.original_title}
                  rate={movieItem.vote_average}
                  relase_date={movieItem.release_date}
                  type="movie"
                  id={movieItem.id}
                />
              </div>
            );
          })}
        </div>
        {paginationno && paginationno > 1 ? (
          <Paginate
            maxnum={paginationno}
            activenum={pageno}
            handleClick={handleClick}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Movies;

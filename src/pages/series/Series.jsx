import PageHeader from "../../components/PageHeader";
import apiConfig from "../../api";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import Paginate from "../../components/Paginate";
import { Helmet } from "react-helmet-async";

const Series = () => {
  const [tvList, setTvList] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const getSeries = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}tv/top_rated?api_key=${apiConfig.apiKey}&language=en-US&page=${pageno}`
    );
    setTvList(data.results);
    setPaginationno(data.total_pages);
  };
  const getSearch = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}search/tv?api_key=${apiConfig.apiKey}&page=${pageno}&language=en-US&&query=${searchValue}&${pageno}&include_adult=false`
    );
    setTvList(data.results);
    setPaginationno(data.total_pages);
  };
  useEffect(() => {
    getSeries();
  }, []);
  const handleClick = (number) => {
    setPageno(number);
  };
  useEffect(() => {
    getSeries();
  }, [pageno]);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchValue !== "" ? getSearch() : getSeries();
  };

  return (
    <div className="series">
      <Helmet>
        <title>TV Series</title>
        <meta
          name="description"
          content="most popular and top rated Tv-Series you want"
        />
        <link rel="canonical" href="/series" />
      </Helmet>
      <PageHeader pageTitle="TV Series" />
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
            <button className="butn main-butn">Search</button>
          </form>
        </div>
        <div className="row mb-5 gy-4 align-items-center justify-content-center">
          {tvList.map((tvItem) => {
            return (
              <div key={tvItem.id} className="col-sm-6 col-md-4 col-lg-3">
                <MovieCard
                  img={
                    tvItem.poster_path
                      ? apiConfig.w500Image(tvItem.poster_path)
                      : apiConfig.noPoster
                  }
                  title={tvItem.original_name}
                  rate={tvItem.vote_average}
                  relase_date={tvItem.first_air_date}
                  type="tv"
                  id={tvItem.id}
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

export default Series;

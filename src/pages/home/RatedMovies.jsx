import apiConfig from "../../api";
import { useState, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import {Navigation} from 'swiper';
import 'swiper/css/navigation';
import "swiper/css";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieCard from "../../components/MovieCard";

const RatedMovies = () => {
  const [ratedMovies, setRatedMovies] = useState([]);
  const getRated = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}movie/top_rated?api_key=${apiConfig.apiKey}&language=en-US&page=1`
    );
    setRatedMovies(data.results);
  };
  useEffect(() => {
    getRated();
  }, []);
  
  return (
    <div className="reated-movies py-5">
      <div className="container">
        <div className="section-info mb-4 d-flex flex-wrap gap-2 justify-content-between align-items-center">
          <h3 className="text-white">Top-Rated Movies</h3>
          <Link
            aria-label="rated movie"
            to="/movies"
            className="butn secondary-butn"
          >
            View All
          </Link>
        </div>
        <div className="cards-list">
          <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"} navigation modules={[Navigation]}>
            {ratedMovies.map((ratedItem) => (
              <SwiperSlide key={ratedItem.id}>
                <MovieCard
                  img={
                    ratedItem.poster_path
                      ? apiConfig.w500Image(ratedItem.poster_path)
                      : apiConfig.noPoster
                  }
                  title={ratedItem.original_title}
                  rate={ratedItem.vote_average}
                  relase_date={ratedItem.release_date}
                  type="movie"
                  id={ratedItem.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RatedMovies;

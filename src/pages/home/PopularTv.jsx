import apiConfig from "../../api";
import { useState, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import {Navigation} from 'swiper';
import 'swiper/css/navigation';
import "swiper/css";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieCard from "../../components/MovieCard";

const PopularTv = () => {
  const [popularTv, setPopularTv] = useState([]);
  const getPopular = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}tv/popular?api_key=${apiConfig.apiKey}&language=en-US&page=1`
    );
    setPopularTv(data.results);
  };
  useEffect(() => {
    getPopular();
  }, []);
  
  return (
    <div className="popular-tv py-5">
      <div className="container">
        <div className="section-info mb-4 d-flex flex-wrap gap-2 justify-content-between align-items-center">
          <h3 className="text-white">Popular TV</h3>
          <Link
            aria-label="popular tv"
            to="/series"
            className="butn secondary-butn"
          >
            View All
          </Link>
        </div>
        <div className="cards-list">
          <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"} navigation modules={[Navigation]}>
            {popularTv.map((popularItem) => (
              <SwiperSlide key={popularItem.id}>
                <MovieCard
                  img={
                    popularItem.poster_path
                      ? apiConfig.w500Image(popularItem.poster_path)
                      : apiConfig.noPoster
                  }
                  title={popularItem.original_name}
                  rate={popularItem.vote_average}
                  relase_date={popularItem.first_air_date}
                  type="tv"
                  id={popularItem.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularTv;

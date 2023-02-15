import apiConfig from "../../api";
import { useState, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import {Navigation} from 'swiper';
import 'swiper/css/navigation';
import "swiper/css";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const [upComing, setUpComing] = useState([]);
  const getUpComing = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}movie/upcoming?api_key=${apiConfig.apiKey}&language=en-US&page=1`
    );
    setUpComing(data.results);
  };
  useEffect(() => {
    getUpComing();
  }, []);
  
  return (
    <div className="upcoming py-5">
      <div className="container">
        <div className="section-info mb-4 d-flex justify-content-between align-items-center">
          <h3 className="text-white">Upcoming Movies</h3>
          <Link
            aria-label="upcoming"
            to="/movies"
            className="butn secondary-butn"
          >
            View All
          </Link>
        </div>
        <div className="cards-list">
          <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"} navigation modules={[Navigation]}>
            {upComing.map((upcomingItem) => (
              <SwiperSlide key={upcomingItem.id}>
                <MovieCard
                  img={
                    upcomingItem.poster_path
                      ? apiConfig.w500Image(upcomingItem.poster_path)
                      : apiConfig.noPoster
                  }
                  title={upcomingItem.original_title}
                  rate={upcomingItem.vote_average}
                  relase_date={upcomingItem.release_date}
                  type="movie"
                  id={upcomingItem.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;

import axios from "axios";
import apiConfig from "./../../api";
import { useState, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import {Navigation} from 'swiper';
import 'swiper/css/navigation';
import "swiper/css";
import { Link } from "react-router-dom";

const Landing = () => {
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      `${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}&page=1`
    );
    setMovies(data.results.slice(0, 3));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Swiper
      className="landing-swiper"
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={"auto"}
      navigation
      modules={[Navigation]}
    >
      {movies.map((movieItem) => {
        return (
          <SwiperSlide key={movieItem.id}>
            <div
              className="landing position-relative overflow-hidden"
              style={{
                backgroundImage: `url(${apiConfig.originalImage(
                  movieItem.backdrop_path
                )})`,
              }}
            >
              <div className="container py-5 position-relative">
                <div className="row gy-4 align-items-center">
                  <div className="col-md-6">
                    <div className="landing-content text-center text-md-start">
                      <h2 className="display-4 fw-bolder text-white">
                        {movieItem.original_title}
                      </h2>
                      <p className="text-white-50 fw-bold">
                        {movieItem.overview}
                      </p>
                      <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start align-items-center">
                        <Link
                          aria-label="landing card"
                          to={`/details/${movieItem.id}/movie`}
                          className="butn main-butn"
                        >
                          Watch Now<i className="fa-solid fa-play ms-3"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-4 offset-lg-1 d-none d-md-block">
                    <div className="landing-poster rounded-4 overflow-hidden">
                      <img
                        src={apiConfig.w500Image(movieItem.poster_path)}
                        className="img-fluid w-100 d-block"
                        alt="landing poster"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Landing;

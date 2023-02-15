import { SwiperSlide, Swiper } from "swiper/react";
import {Navigation} from 'swiper';
import 'swiper/css/navigation';
import "swiper/css";
import MovieCard from "../../components/MovieCard";
import apiConfig from "../../api";

const Similar = (props) => {
  const similar = props.similar;
  const type = props.type;
  return (
    <div className="similar-videos">
      <h3 className="text-white mb-4">Similar</h3>
      <div className="cards-list">
        <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"} navigation modules={[Navigation]}>
          {similar && similar?.length > 0 ? (
            similar?.map((similarItem) => (
              <SwiperSlide key={similarItem.id}>
                <MovieCard
                  img={
                    similarItem.poster_path
                      ? apiConfig.w500Image(similarItem.poster_path)
                      : apiConfig.noPoster
                  }
                  title={similarItem.original_title || similarItem.name}
                  rate={similarItem.vote_average}
                  relase_date={
                    similarItem.release_date || similarItem.first_air_date
                  }
                  type={type}
                  id={similarItem.id}
                />
              </SwiperSlide>
            ))
          ) : (
            <img
              src={apiConfig.noFound}
              className="not-found img-fluid w-100 d-block rounded-5"
            ></img>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Similar;

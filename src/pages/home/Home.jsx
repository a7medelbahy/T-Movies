import "./home.css";
import Landing from "./Landing";
import PopularTv from "./PopularTv";
import RatedMovies from "./RatedMovies";
import RatedTv from "./RatedTv";
import Upcoming from "./Upcoming";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Upcoming />
      <RatedMovies />
      <PopularTv />
      <RatedTv />
    </div>
  );
};

export default Home;

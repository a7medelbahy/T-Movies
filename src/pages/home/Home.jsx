import "./home.css";
import Landing from "./Landing";
import PopularTv from "./PopularTv";
import RatedMovies from "./RatedMovies";
import RatedTv from "./RatedTv";
import Upcoming from "./Upcoming";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>T-Movies</title>
        <meta
          name="description"
          content="T-Movies Website for movies and TV series"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Landing />
      <Upcoming />
      <RatedMovies />
      <PopularTv />
      <RatedTv />
    </div>
  );
};

export default Home;

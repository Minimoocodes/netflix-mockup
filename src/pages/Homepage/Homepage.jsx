import TopRatedMovieSlide from "./TopRatedMovieSlide/TopRatedMovieSlide";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
// 1. banner = popular movie. 1st item
// 2. popular movie
// 3. top rated Movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  );
};

export default Homepage;

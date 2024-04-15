import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./MovieCard.style.css";
import { Link, useNavigate } from "react-router-dom";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie, index }) => {
  const navigate = useNavigate();
  // const showMovieDetail = (id) => {
  //   console.log(id, "clicked");
  //   navigate(`/movies/${movie.id}`);
  // };

  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  return (
    <Link to={`/movies/${movie.title}`} className="movie-card">
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
            ")",
        }}
        className="movie-card"
        onClick={() => showMovieDetail(movie.id)}
      >
        <div className="overlay" key={index}>
          <h2>{movie.title}</h2>
          {showGenre(movie.genre_ids).map((id) => (
            <Badge bg="danger">{id}</Badge>
          ))}
          <div>
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            {movie.vote_average}
          </div>
          <div>{movie.popularity}</div>
          <div>
            {movie.adult ? (
              "over18"
            ) : (
              <img
                width="30"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg/1200px-Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.svg.png"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import "./MovieDetailPage.style.css";

const MovieDetailPage = () => {
  const { id } = useParams();

  console.log("id issss", id);

  const { data: movie, isLoading, isError } = useMovieDetailQuery(id);
  console.log("data is", movie);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching movie Details.</div>;
  }

  if (!movie) {
    return <div>No movie found with the provided ID.</div>;
  }

  return (
    <div>
      <h1 className="movie_title">{movie.title} will be shown here</h1>
    </div>
  );
};

export default MovieDetailPage;

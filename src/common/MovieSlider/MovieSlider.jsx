import "./MovieSlider.style.css";
import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";
import "react-multi-carousel/lib/styles.css";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slide p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} index={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;

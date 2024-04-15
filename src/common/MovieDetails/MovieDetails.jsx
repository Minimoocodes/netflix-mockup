import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  console.log("id is", id);
  return (
    <div>
      <h1>{}</h1>
    </div>
  );
};

export default MovieDetails;

import { IMovie } from "../../constants";
import useMovies from "../../hooks/useMovies";
import Movie from "../Movie/Movie";
import "./movieList.css";

const MovieList = () => {
  const { movies } = useMovies();
  return (
    <div className="movies">
      {movies.map((movie: IMovie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default MovieList;

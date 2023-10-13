import { Props } from "../../constants";
import "./movie.css";

interface MovieProps {
  movie: Props;
}
const ellipsis = (summary: string) => {
  const newSummary = summary.split(" ");
  if (newSummary.length > 13) {
    return `${newSummary.slice(0, 12).join(" ")}...`;
  }
  return newSummary;
};

const Movie = ({ movie }: MovieProps) => {
  return (
    <div className="movie">
      <img src={movie.image} alt="" />
      <p>{ellipsis(movie.overview)}</p>
      <p className="title">{movie.title}</p>
    </div>
  );
};

export default Movie;

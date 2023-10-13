import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h1>QR Code</h1>
        </Link>
      </div>
      <div className="left-header">
        <Link to="movies" className="movie-btn">
          <button>Movie List</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

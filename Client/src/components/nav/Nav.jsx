import { Link } from "react-router-dom";
import SearchBar from "./search/SearchBar";
import style from "./nav.module.css";

const Nav = ({ onSearch, random, logOut }) => {
  return (
    <div className={style.container}>
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      </div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        <button onClick={random}>Random</button>

        <button onClick={logOut}>Log out</button>
      </div>
    </div>
  );
};

export default Nav;

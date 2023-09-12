import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import style from "./nav.module.css";
const Nav = ({ onSearch, random, logOut }) => {
  return (
    <div className={style.container}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={random}>Random</button>

      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default Nav;

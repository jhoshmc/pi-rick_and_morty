import { useState } from "react";
import style from "./search.module.css";
const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={style.contenedor}>
      <input
        type="search"
        placeholder="id"
        onChange={handleChange}
        value={id}
      />
      <button onClick={() => onSearch(id)}>🔍</button>
    </div>
  );
};

export default SearchBar;

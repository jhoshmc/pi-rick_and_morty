import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setId(e.target.value);
    setTimeout(() => {
      setId((e.target.value = ""));
    }, "2000");
  };

  return (
    <div>
      <input
        type="search"
        placeholder="id"
        onChange={handleChange}
        value={id}
      />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
};

export default SearchBar;

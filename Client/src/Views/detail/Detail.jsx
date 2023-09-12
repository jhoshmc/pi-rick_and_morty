import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./detail.module.css";
const url = "http://localhost:3001/rickandmorty/character";
const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${url}/${id}`).then(({ data }) => {
      setCharacter(data);
    });
    return setCharacter({});
  }, []);

  return (
    <div className={style.container}>
      <div>
        <h1>{character.name}</h1>
        <h3>status: {character.status}</h3>
        <h3>gender: {character.gender}</h3>
        <h3>{character.type && `type : ${character.type}`}</h3>
        <h3>origin:</h3>
        <h3>{character.origin?.name}</h3>
        <h3>Last known location:</h3>
        <h3>{character.location?.name}</h3>
      </div>
      <div>
        <img
          height="300px"
          width="auto"
          src={character.image}
          alt={character.name}
        />
      </div>
    </div>
  );
};

export default Detail;

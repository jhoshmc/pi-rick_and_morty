import { Link } from "react-router-dom";
import { addFav, removefav } from "../../redux/actions/actions-creators";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
const Card = ({ characters, onclose, addFav, removefav, myFavorites }) => {
  const { id, name, status, species, gender, origin, image } = characters;
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    /*
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    */
    /*DESAFÍO: te desafiamos a que reconstruyas ese useEffect, pero utilizando un bucle For en lugar de un .forEach(). */
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) {
        setIsFav(true);
      }
    }
  }, [myFavorites]);

  const handleFavorite = (data) => {
    if (isFav) {
      removefav(data);
      setIsFav(false);
    } else {
      addFav(data);
      setIsFav(true);
    }
  };

  return (
    <div>
      <button onClick={() => onclose(id)}>X</button>
      <div>
        {isFav ? (
          <button onClick={() => handleFavorite(characters.id)}>❤️</button>
        ) : (
          <button onClick={() => handleFavorite(characters)}>🤍</button>
        )}
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h3>{status}</h3>
        <h3>{species}</h3>
        <h3>{gender}</h3>
        <h3>{origin.name}</h3>
      </div>
      <Link to={`/detail/${id}`}>
        <figure>
          <img src={image} alt={name} />
        </figure>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personaje) => dispatch(addFav(personaje)),
    removefav: (id) => dispatch(removefav(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);

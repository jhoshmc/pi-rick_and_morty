import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions-creators";
import { useState } from "react";
import Card from "../../components/card/Card";
import style from "./favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  // const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    // setAux({ aux: true });
    dispatch(orderCards(e.target.value));
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };
  return (
    <div className={style.container}>
      <div>
        <select onChange={handleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <div>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.container}>
        {myFavorites.map((fav) => (
          <Card key={fav.id} characters={fav} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);

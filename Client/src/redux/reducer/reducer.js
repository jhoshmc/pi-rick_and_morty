import {
  ADD_FAV,
  REMOVE_FAV,
  ORDER,
  FILTER,
  
} from "../actions/actions-types";
const initialState = {
  myFavorites: [],
  allCharacters: [],
  
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
    /*
    case REMOVE_FAV:
      const love = state.myFavorites.filter(
        (per) => per.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: love,
      };
      */
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER:
      const filtrado = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: filtrado,
      };
    case ORDER:
      let orden;
      if (payload === "Ascendente") {
        orden = state.myFavorites.sort((a, b) => a.id - b.id);
      }
      if (payload === "Descendente") {
        orden = state.myFavorites.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;

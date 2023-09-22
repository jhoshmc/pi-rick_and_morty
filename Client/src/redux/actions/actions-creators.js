import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  // CREATER_USER,
} from "./actions-types";
import axios from "axios";

//* async await
export const addFav = (character) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {
    window.alert(error);
  }
};
/*
export const addFav = (persojane) => {
  return {
    type: ADD_FAV,
    payload: persojane,
  };
};
*/
//* promesass
/*
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};*/
//* async await

export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {
    window.alert(error);
  }
};
/*
export const removefav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};
*/
//*promesas
/*
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};
*/
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
/*
export const createrUser = (user) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/login";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, user);
      return dispatch({
        type: CREATER_USER,
        payload: data,
      });
    };
  } catch (error) {
    window.alert({ error: error.message });
  }
};
*/

import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

export const addFav = (persojane) => {
  return {
    type: ADD_FAV,
    payload: persojane,
  };
};

export const removefav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

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

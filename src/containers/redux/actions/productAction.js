import { ActionTypes } from "../constants/action-tpes";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
// export const removeProducts = (products) => {
//   return {
//     type: REMOVE_PRODUCTS,
//     payload: products,
//   };
// };

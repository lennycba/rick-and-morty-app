import{ ADD_FAV, REMOVE_FAV,ORDER,FILTER} from './types';
import axios from 'axios';


// ACTION | addFav
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    console.log(character);
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

 export const filterCards = (gender) => {
    return {
      type: FILTER,
      payload: gender,
    };
  };
  export const orderCards = (id) => {
    return {
      type: ORDER,
      payload: id,
    };
  };
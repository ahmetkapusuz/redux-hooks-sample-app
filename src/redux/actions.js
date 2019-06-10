import { FETCH_CHARACTERS } from "./actionTypes";
import axios from "axios";

export const fetchCharacters = name => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      const characters = response.data;

      return dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });
    } catch (err) {
      return dispatch({
        type: FETCH_CHARACTERS,
        payload: { results: [] }
      });
    }
  };
};

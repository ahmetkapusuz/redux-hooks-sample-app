import { FETCH_CHARACTERS } from "../actionTypes";

const defaultState = {
  characters: []
};

const characters = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CHARACTERS:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default characters;

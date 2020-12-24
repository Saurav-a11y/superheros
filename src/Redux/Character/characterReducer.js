import {
  FETCH_CHARACTER_FAILURE,
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCESS,
  FETCH_SINGLE_CHARACTER_START,
  FETCH_SINGLE_CHARACTER_SUCESS,
  FETCH_SINGLE_CHARACTER_FAILURE,
} from "./types";

const initialState = {
  character: {},
  isFetching: false,
  errorMsg: "",
  singleCharacter: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
    case FETCH_SINGLE_CHARACTER_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CHARACTER_SUCESS:
      return {
        ...state,
        character: action.payload,
        isFetching: false,
      };
    case FETCH_SINGLE_CHARACTER_SUCESS:
      return {
        ...state,
        singleCharacter: action.payload,
        isFetching: false,
      };
    case FETCH_CHARACTER_FAILURE:
    case FETCH_SINGLE_CHARACTER_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default characterReducer;

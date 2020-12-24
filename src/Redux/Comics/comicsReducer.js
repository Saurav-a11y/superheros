import {
  FETCH_COMICS_FAILURE,
  FETCH_COMICS_START,
  FETCH_COMICS_SUCESS,
} from "./types";

const initialState = {
  comics: [],
  isFetching: false,
  errorMsg: "",
};

const comicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMICS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COMICS_SUCESS:
      return {
        ...state,
        comics: action.payload,
        isFetching: false,
      };
    case FETCH_COMICS_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default comicsReducer;

import {
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_START,
  FETCH_EVENTS_SUCESS,
} from "./types";
const initialState = {
  events: {},
  isFetching: false,
  errorMsg: "",
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_EVENTS_SUCESS:
      return {
        ...state,
        events: action.payload,
        isFetching: false,
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default eventsReducer;

import Axios from "axios";
import {
  FETCH_COMICS_FAILURE,
  FETCH_COMICS_START,
  FETCH_COMICS_SUCESS,
} from "./types";

export const fetchComicsStartAsync = () => (dispatch) => {
  Axios.get(
    `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d0e5f277f385cb50056b36a027f36532&hash=3c954ba9394a4eb51ec2e6d892325941`
  )
    .then(
      dispatch({
        type: FETCH_COMICS_START,
      })
    )
    .then((data) =>
      dispatch({
        type: FETCH_COMICS_SUCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: FETCH_COMICS_FAILURE,
        payload: error.message,
      })
    );
};

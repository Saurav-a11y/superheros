import Axios from "axios";
import {
  FETCH_CHARACTER_FAILURE,
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCESS,
  FETCH_SINGLE_CHARACTER_START,
  FETCH_SINGLE_CHARACTER_SUCESS,
  FETCH_SINGLE_CHARACTER_FAILURE,
} from "./types";

export const fetchCharacterStartAsync = () => (dispatch) => {
  Axios.get(
    `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d0e5f277f385cb50056b36a027f36532&hash=3c954ba9394a4eb51ec2e6d892325941`
  )
    .then(
      dispatch({
        type: FETCH_CHARACTER_START,
      })
    )
    .then((data) =>
      dispatch({
        type: FETCH_CHARACTER_SUCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: FETCH_CHARACTER_FAILURE,
        payload: error.message,
      })
    );
};
export const fetchSingleCharacterStartAsync = (characterId) => (dispatch) => {
  Axios.get(
    `http://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=d0e5f277f385cb50056b36a027f36532&hash=3c954ba9394a4eb51ec2e6d892325941`
  )
    .then(
      dispatch({
        type: FETCH_SINGLE_CHARACTER_START,
      })
    )
    .then((data) =>
      dispatch({
        type: FETCH_SINGLE_CHARACTER_SUCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: FETCH_SINGLE_CHARACTER_FAILURE,
        payload: error.message,
      })
    );
};

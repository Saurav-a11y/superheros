import { createSelector } from "reselect";

const character = (state) => state.character;

export const selectCharacter = createSelector(
  [character],
  (characters) => characters.character
);
export const selectCharacterData = createSelector(
  [selectCharacter],
  (character) => character.data
);

export const selectCharacterResult = createSelector(
  [selectCharacterData],
  (data) => (data ? data.data.results : [])
);

export const isFetchingCharacter = createSelector(
  [character],
  (isFetching) => isFetching.isFetching
);

export const selectSingleCharacter = createSelector(
  [character],
  (characters) => characters.singleCharacter
);
export const selectSingleCharacterData = createSelector(
  [selectSingleCharacter],
  (singleCharacter) => (singleCharacter ? singleCharacter.data : [])
);
export const selectSingleCharacterResult = createSelector(
  [selectSingleCharacterData],
  (data) => (data ? data.data.results : [])
);
export const selectSingleCharacterWithId = (itemUrlParam) =>
  createSelector([selectSingleCharacterResult], (singleCharacterWithId) =>
    singleCharacterWithId
      ? singleCharacterWithId.find((item) => item.id == itemUrlParam)
      : []
  );

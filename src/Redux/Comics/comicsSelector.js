import { createSelector, createStructuredSelector } from "reselect";

const comics = (state) => state.comics;

export const selectComics = createSelector([comics], (comics) =>
  comics ? comics.comics.data : []
);
export const selectComicsData = createSelector([selectComics], (comics) =>
  comics ? comics.data.results : []
);

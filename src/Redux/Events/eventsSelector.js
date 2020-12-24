import { createSelector } from "reselect";

const events = (state) => state.events;

export const selectEvents = createSelector([events], (events) => events.events);
export const selectEventsData = createSelector(
  [selectEvents],
  (events) => events.data
);

export const selectEventResult = createSelector([selectEventsData], (data) =>
  data ? data.data.results : []
);

export const isFetching = createSelector(
  [events],
  (isFetching) => isFetching.isFetching
);

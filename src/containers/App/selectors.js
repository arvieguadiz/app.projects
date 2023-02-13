import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectAppDomain = state => state.appReducer || initialState;

const makeSelectApp = () =>
  createSelector(
    selectAppDomain,
    substate => substate,
  );

export {
  selectAppDomain,
};

export default makeSelectApp;
import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectDrawerDomain = state => state.drawerReducer || initialState;

const makeSelectDrawer = () =>
  createSelector(
    selectDrawerDomain,
    substate => substate,
  );

const makeSelectOpen = () =>
  createSelector(
    selectDrawerDomain,
    substate => substate.open,
  );

const makeSelectTheme = () =>
  createSelector(
    selectDrawerDomain,
    substate => substate.theme,
  );

export {
  selectDrawerDomain,
  makeSelectOpen,
  makeSelectTheme,
};

export default makeSelectDrawer;
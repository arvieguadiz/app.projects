const drawerActions = {
  toggleDrawer: (state, action) => {
    state.open = action.payload;
  },

  toggleTheme: (state, action) => {
    state.theme = action.payload;
  },
};

export default drawerActions;
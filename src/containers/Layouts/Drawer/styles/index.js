const drawerWidth = 340;

const useStyles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
    },
  },
  drawerTitle: {
    flexGrow: 1,
  },
};

export default useStyles;
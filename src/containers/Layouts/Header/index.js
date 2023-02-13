import React, { memo } from 'react';
import { AppBar, IconButton, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import useStyles from './styles';

// import { makeSelectTheme } from './selectors';
// import { appReducer } from './reducer';
// const { changeTheme } = appReducer.actions;

import { drawerReducer } from '../Drawer/reducer';
const { toggleDrawer } = drawerReducer.actions;

export const Header = ({
  dispatch,
}) => {
  const ElevationScroll = ({ children }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  };

  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={useStyles.appBarTitle}>
            Welcome!
          </Typography>

          <IconButton
            color="inherit"
            size="large"
            edge="end"
            onClick={() => dispatch(toggleDrawer(true))}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo
)(Header);
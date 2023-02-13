import React, { memo } from 'react';
import { Button, ButtonGroup, Container, Divider, Drawer as MuiDrawer, IconButton, Toolbar, Typography } from '@mui/material';
import { Close as CloseIcon, DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import useStyles from './styles';

import { makeSelectOpen, makeSelectTheme } from './selectors';
import { drawerReducer } from './reducer';
const { toggleDrawer, toggleTheme } = drawerReducer.actions;

export const Drawer = ({
  dispatch,
  drawerOpen,
  theme,
}) => {
  return (
    <MuiDrawer
      anchor="right"
      open={drawerOpen}
      onClose={() => dispatch(toggleDrawer(!drawerOpen))}
      sx={useStyles.drawer}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={useStyles.drawerTitle}>
          Settings
        </Typography>

        <IconButton
          color="inherit"
          size="large"
          edge="end"
          onClick={() => dispatch(toggleDrawer(!drawerOpen))}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <Container>
        <Toolbar />

        <Typography gutterBottom>Mode</Typography>
        <ButtonGroup
          variant="outlined"
          size="large"
          color="inherit"
          fullWidth
        >
          <Button
            {...(
              theme === 'light' && {
                variant: 'contained',
                color: 'primary',
              }
            )}
            startIcon={<LightModeIcon />}
            onClick={() => dispatch(toggleTheme('light'))}
          >
            Light
          </Button>
          <Button
            {...(
              theme === 'dark' && {
                variant: 'contained',
                color: 'primary',
              }
            )}
            startIcon={<DarkModeIcon />}
            onClick={() => dispatch(toggleTheme('dark'))}
          >
            Dark
          </Button>
        </ButtonGroup>
      </Container>
    </MuiDrawer>
  );
};

Drawer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  drawerOpen: makeSelectOpen(),
  theme: makeSelectTheme(),
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
)(Drawer);
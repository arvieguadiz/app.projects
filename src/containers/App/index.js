import React, { memo } from 'react';
import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from '../Layouts/Header';
import Drawer from '../Layouts/Drawer';

import { makeSelectTheme } from '../Layouts/Drawer/selectors';

// import {} from './selectors';
// import { appReducer } from './reducer';
// const {} = appReducer.actions;

export function App({
  dispatch,
  appTheme,
}) {
  const theme = createTheme({
    palette: {
      mode: appTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Drawer />
      <Toolbar />
      <Container>
        <Box component="main" sx={{ my: 2 }}>
          {
            [...new Array(20)].map(() => `Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,).join('\n')
          }
        </Box>
      </Container>
    </ThemeProvider>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  appTheme: makeSelectTheme(),
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
)(App);

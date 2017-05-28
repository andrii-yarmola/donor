import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';

import Welcome from './components/Welcome/Welcome';
import TermsAndConditions from './components/TermsAndConditions';
import RegistrationWrap from './components/Registration/RegistrationWrap';

// global variable for request debugging
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

const AppNavigator = StackNavigator({
  Welcome: { screen: Welcome },
  TermsAndConditions: { screen: TermsAndConditions },
  RegistrationWrap: { screen: RegistrationWrap},
});

const Navigator = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

Navigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default connect(
  state => ({ nav: state.nav })
)(Navigator);

import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import appReducer from './reducers';
import Navigator from './Navigator';
// import sagas from './sagas';
import thunk from 'redux-thunk';

// create an object for the default data
const defaultState = {
	
};

const store = createStore(appReducer, defaultState, applyMiddleware(thunk));

//sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;

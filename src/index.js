import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import callAPIMiddleware from './middlewares/callAPIMiddleware';
import { loadKeyWordChoicesIfNeeded,setRooms } from './actions';
import reducer from './reducers';
import App from './components/App';
import './style/reset.css';
import './style/App.scss';
import * as serviceWorker from './serviceWorker';

const middleware = [ thunk, callAPIMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(
  loadKeyWordChoicesIfNeeded(
    store.getState().filter.cityName))

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)

serviceWorker.unregister();


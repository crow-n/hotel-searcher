import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import callAPIMiddleware from './middlewares/callAPIMiddleware';
import reducer from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleware = [ thunk, callAPIMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)

serviceWorker.unregister();


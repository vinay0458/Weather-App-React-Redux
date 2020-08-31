import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import DevTools from '../containers/DevTools';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk, logger)
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store;
}

export default configureStore;

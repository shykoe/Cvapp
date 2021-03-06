import { createStore, applyMiddleware, compose } from 'redux'
import logger  from 'redux-logger'
import { END } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers'


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  //console.log(rootReducer)
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        logger
      ),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}

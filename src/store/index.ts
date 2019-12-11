import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

/**
 * store,这里直接导出configureStore, 可供其他地方直接调用
 */
import rootReducer from '../reducers';
import rootSaga from '../sagas';

declare var module: any;

const configureStore = (preloadedState?: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );

  // c开发环境使用
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    const nextReducer: any = rootReducer;
    module.hot.accept('../reducers', () => {
      store.replaceReducer(nextReducer.default);
    });
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
};

const store = configureStore();
store.runSaga(rootSaga);

export default store;

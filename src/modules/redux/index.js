import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers'
import { rootSaga } from './saga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger)
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

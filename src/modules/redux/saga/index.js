import { fork, all } from 'redux-saga/effects'
import { authen } from './authen'

export function * rootSaga () {
  yield all([
    fork(authen)
  ])
}

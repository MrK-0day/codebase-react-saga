import { put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as type from '../../reducers/authen/type'
import * as typeSaga from './type'

export function * AsyncLoading (action) {
  try {
    const { value } = action
    yield put({ type: type.SET_LOADING, payload: true })
    yield delay(value)
    yield put({ type: type.SET_LOADING, payload: false })
  } catch (e) {
    console.log(e)
  }
}

export function * authen () {
  yield takeEvery(typeSaga.SAGA_SET_LOADING, AsyncLoading)
}

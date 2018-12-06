import update from 'immutability-helper'
import * as type from './type'

const initialState = {
  isLoading: false,
  isLogin: false
}

export const authen = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_LOADING: {
      return update(state, {
        isLoading: {
          $set: action.payload
        }
      })
    }
    case type.SET_LOGIN: {
      return update(state, {
        isLogin: {
          $set: action.payload
        }
      })
    }
    default:
      return state
  }
}

import {UserAction, UserActionTypes, UserState} from './types'
import UserStateFactory from './store'

const initialState: UserState = UserStateFactory()

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
  case UserActionTypes.AUTH_STARTED:
    return {isAuth: false, loading: true, initialLoading: false}
  case UserActionTypes.AUTH_COMPLETED:
    return {isAuth: true, loading: false, initialLoading: false}
  case UserActionTypes.AUTH_ERROR:
    return {isAuth: false, loading: false, initialLoading: false}
  case UserActionTypes.GET_PROFILE:
    return state
  case UserActionTypes.LOGOUT:
    return {isAuth: false, loading: false, initialLoading: false}
  default:
    return state
  }
}

export default userReducer

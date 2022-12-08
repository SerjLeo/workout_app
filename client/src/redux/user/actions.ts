import ApiService from '../../api/ApiService'
import {UserAction, UserActionTypes, UserSignInForm} from './types'
import {Dispatch} from 'redux'
import AlertService from '../../utils/Alerts';
const alertService = new AlertService()

export const signIn = (form: UserSignInForm) => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionTypes.AUTH_STARTED })
  const {token, errors} = await ApiService.apiRequest('/auth/login', form, 'POST')
  if(errors || !token) {
    alertService.push({type: 'error', message: 'Неверные данные авторизации'})
    dispatch({type: UserActionTypes.AUTH_ERROR})
    return
  }
  localStorage.setItem('token', `Bearer ${token}`)
  dispatch({type: UserActionTypes.AUTH_COMPLETED, payload: {user: token}})
}

// export const signUp = (form: UserSignUpForm) => async (dispatch: Dispatch<UserAction>) => {
//   dispatch({ type: UserActionTypes.AUTH_STARTED })
//   const {data, errors} = await ApiService.apiRequest('/auth/sign-up', form, 'POST')
//   if(errors) {
//     dispatch({type: UserActionTypes.AUTH_ERROR, payload: {error: 'Error'}})
//     return
//   }
//   localStorage.setItem('token', `Bearer ${data}`)
//   dispatch({type: UserActionTypes.AUTH_COMPLETED, payload: {user: data}})
// }

export const checkoutAuthToken = () => async (dispatch: Dispatch<UserAction>) => {
  if (!localStorage.getItem('token')) {
    dispatch({ type: UserActionTypes.LOGOUT })
    return
  }

  const {data, errors} = await ApiService.apiRequest('/auth/check')
  if (errors) {
    dispatch({type: UserActionTypes.AUTH_ERROR})
    return
  }
  dispatch({type: UserActionTypes.AUTH_COMPLETED, payload: {user: data}})
}

export const signOut = () => async (dispatch: Dispatch<UserAction>) => {
  localStorage.removeItem('token')
  dispatch({ type: UserActionTypes.LOGOUT })
}

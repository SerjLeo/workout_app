export enum UserActionTypes {
    GET_PROFILE = 'GET_PROFILE',
    AUTH_STARTED = 'AUTH_STARTED',
    AUTH_COMPLETED = 'AUTH_COMPLETED',
    AUTH_ERROR = 'AUTH_ERROR',
    LOGOUT = 'LOGOUT'
}

export type UserState = {
    isAuth: boolean
    loading: boolean
    initialLoading: boolean
}

export type UserSignInForm = {
    username: string
    password: string
}

export type UserSignUpForm = UserSignInForm & {
    name: string
}

type AuthStartedAction = {
    type: UserActionTypes.AUTH_STARTED
}

type AuthCompleteAction = {
    type: UserActionTypes.AUTH_COMPLETED
}

type AuthErrorAction = {
    type: UserActionTypes.AUTH_ERROR
}

type GetProfileAction = {
    type: UserActionTypes.GET_PROFILE
}

type LogoutAction = {
    type: UserActionTypes.LOGOUT
}

export type UserAction = AuthCompleteAction | AuthStartedAction | AuthErrorAction | GetProfileAction | LogoutAction

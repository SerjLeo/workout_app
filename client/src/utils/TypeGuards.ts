import {UserSignInForm} from '../redux/user/types';

export function isAuthForm(form: Record<string, unknown>): form is UserSignInForm {
  return !!form.username && !!form.password
}

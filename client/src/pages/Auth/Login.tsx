import React from 'react';
import {Button, TextField} from '@mui/material';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import styles from '../../assets/styles/Pages/Form.module.scss';
import {useForm} from 'react-hook-form';
import {isAuthForm} from '../../utils/TypeGuards';

const Login: React.FC = () => {
  const {loading} = useTypedSelector(state => state.user)
  const {signIn} = useActions()

  const {register, formState: { errors }, handleSubmit} = useForm()

  const fieldValidation = {
    required: {
      value: true,
      message: 'Необходимо заполнить поле'
    }
  }

  const formSubmit = async (form: any) => {
    if(!isAuthForm(form)) return
    signIn(form)
  }

  return <div className={`${styles.form_wrapper} ${styles.auth_form}`}>
    <div className={styles.form_container}>
      <h2 className={styles.form__title}>Вход</h2>
      <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
        <TextField
          label='Имя пользователя'
          {...register('username', fieldValidation)}
          error={!!errors.username}
          helperText={ errors.username && String(errors.username.message) }/>
        <TextField
          label='Пароль'
          type='password'
          {...register('password', fieldValidation)}
          error={!!errors.password}
          helperText={ errors.password && String(errors.password.message) }/>
        <Button disabled={loading} type="submit">Войти</Button>
      </form>
    </div>
  </div>
}

export default Login

import React from 'react'
import {Route, Routes} from 'react-router-dom'
import GuardedRoute from './GuardedRoute'

import NotFound from '../pages/NotFound/NotFound'
import MainLayout from '../layouts/MainLayout'
import useTypedSelector from '../hooks/useTypedSelector'
import Spinner from '../components/Spinner/Spinner'
import EmptyLayout from '../layouts/EmptyLayout';

const Selection = React.lazy(() => import('../pages/TrainingSelection/TrainingSelection'))
const Login = React.lazy(() => import('../pages/Auth/Login'))
// const Calculators = React.lazy(() => import('../pages/Calculators/Calculators'))
// const CalculatorPage = React.lazy(() => import('../pages/Calculators/components/CalculatorPage'))
// const Landing = React.lazy(() => import('../pages/Landing/Landing'))

const AppRouter = () => {
  const {isAuth, initialLoading} = useTypedSelector(state => state.user)

  if (initialLoading) return (
    <Routes>
      <Route path="*" element={<EmptyLayout/>}>
        <Route index element={<Spinner/>}/>
      </Route>
    </Routes>
  )

  const globalRoutes = () => {
    return (
      <Route
        path="/"
        element={<EmptyLayout/>}
      >
        <Route index element={<Selection/>}/>
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Route>
    )
  }

  const openRoutes = () => {
    return (
      <Route
        path="/"
        element={<GuardedRoute isAuth={isAuth} permission="notAuth"><EmptyLayout/></GuardedRoute>}
      >
        <Route path="login" element={<Login/>}/>
      </Route>
    )
  }

  const privateRoutes = () => {
    return (
      <Route
        path="/"
        element={<GuardedRoute isAuth={isAuth}><MainLayout/></GuardedRoute>}
      ></Route>
    )
  }

  return (
    <Routes>
      {globalRoutes()}
      {openRoutes()}
      {privateRoutes()}
    </Routes>
  )
}

export default AppRouter

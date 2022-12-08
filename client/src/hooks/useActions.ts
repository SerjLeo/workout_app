import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../redux/user/actions'
import {useMemo} from 'react'

const allActions = {
  ...userActions,
}

const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}

export default useActions

import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import Home from '../Home/Home'
import Login from '../Login/Login'
import EditUserInfo from '../User/EditInfo'
export const RouterWeb = () => {
  const logged = useSelector(state => state.logged)
  return (
    <Switch>
      {logged
        ? <Route exact path='/' component={Home} />
        : <Route exact path='/' component={Login} />}
      <Route exact path='/Edit' component={EditUserInfo} />
    </Switch>

  )
}

import React from 'react';
import './sass/style.scss';
import './App.scss';
import './components/login/index.scss';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import Auth from './containers/Auth/Auth'
import Homes from "./containers/Homes/Homes";
import Logout from "./components/Logout/Logout";
import {connect} from "react-redux";
import {autoLogin} from "./Store/actions/authAction";
import Profile from "./components/Profile/index";

class App extends React.Component{

  componentDidMount() {
    this.props.autoLogin();
  }

  render() {

    let routes = (
        <Switch>
          <Route path={'/logout'} component={Logout}/>
          <Route path={'/auth/profile'} component={Profile}/>
          <Route path={'/auth'} component={Auth}/>
          <Redirect to={'/auth'} exact/>
        </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path={'/auth/profile'} component={Profile}/>
          <Route path={'/homes'} component={Homes}/>
          <Route path={'/logout'} component={Logout}/>
          <Route path={'/auth'} component={Auth}/>
          <Redirect to={'/auth'} exact/>
        </Switch>
      )
    }

    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.authValid
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
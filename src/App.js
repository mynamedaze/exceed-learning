import React from 'react';
import './sass/style.scss';
import './App.scss';
import './components/login/index.scss';
import {Route, Switch} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import Auth from './containers/Auth/Auth'
import Homes from "./containers/Homes/Homes";

function App() {
  return (

    <Layout>
      <Switch>
        <Route path={'/homes'} component={Homes}/>
        <Route path={'/auth'} component={Auth}/>
      </Switch>
    </Layout>
  );
}

export default App;
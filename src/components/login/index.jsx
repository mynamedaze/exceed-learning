import React from 'react';

import Login from './login';
import Register from "./register";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: false
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState(state => ({
      isLoginActive: !state.isLoginActive
    }));
  }

  render() {
    const { isLoginActive } = this.state;
    return (
      <article className="login-form">
        {isLoginActive && <Login openReg={this.toggleActive} isLoginActive={this.state.isLoginActive} />}
        {!isLoginActive && <Register openReg={this.toggleActive} isLoginActive={this.state.isLoginActive} />}
      </article>
    )
  }
}

export default LoginForm;
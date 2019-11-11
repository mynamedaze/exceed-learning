import React from 'react';
import './Auth.scss';
import LoginForm from '../../components/login/index'

class Auth extends React.Component {
  render() {
    return (
      <section className="auth">
      <div className="wrapper">
        <div className="main-form-container">
          <LoginForm />
        </div>
      </div>
    </section>
    );
  }
}

export default Auth;
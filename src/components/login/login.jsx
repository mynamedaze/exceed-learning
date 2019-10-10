import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login" >
        <h2 className="title">Signin Form</h2>
        <div className="inputs-wrapper">
          <input type="text" className="input  input--login"/>
          <input type="text" className="input  input--password"/>
          <div className="remember-field">
            <input type="checkbox" id='main-form-remember-checkbox' className="remember-checkbox"/>
            <label htmlFor="main-form-remember-checkbox" className="remember-label">fgg</label>
          </div>
          <div className="forgot-field">
            <button className="forgot-link">Forgot password?</button>
          </div>
        </div>
        <button type="submit" className="submit-btn">sign in</button>
        <span className="or">or</span>
        <button className="or-btn" onClick={this.props.openReg}>Register</button>
      </div>
    )
  }
}

export default Login;
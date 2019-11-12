import React from 'react';
import validLogin from './utils/validLogin.js';
import InputDefault from "./inputs/InputDefault";
import axios from 'axios';

const inp = {

};

function getValue(field, value, hasError, isRequired) {
  inp[field] = {value, hasError, isRequired};
  console.log(inp);
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputsValue: {},
      authValid: true
    };

    this.makeLogin = this.makeLogin.bind(this);
    this.formData = {login :{
      field: 'login',
      hasError: false,
      value:'sdfs'
    }}
  }

  makeLogin() {
    const accountInfo = {};
    for (let key in inp) {
      if (inp.hasOwnProperty(key)) {
        accountInfo[key] = inp[key].value;
      }
    }

    axios.post('http://localhost:8080/users/login', accountInfo)
      .then(response => {
        console.log(response);
        if (!response.data.success) {
          this.setState({authValid: false});
          localStorage.setItem('authToken', '');
        } else {
          this.setState({authValid: true});
          localStorage.setItem('authToken', response.data.token);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="login" >
        <h2 className="title">{this.props.isLoginActive && 'Signin form'}</h2>
        <div className="inputs-wrapper">
          {!this.state.authValid && <span className="invalid-notice">Данный логин/пароль не существует</span>}
          {validLogin.map((item, i)=>{
            return(
              <InputDefault
                key={item.field}
                options={item}
                index={i}
                forGetValues={getValue}
                placeholder={item.placeholder}
              />
            )})}
          <div className="remember-field">
            <input type="checkbox" id='main-form-remember-checkbox' className="remember-checkbox"/>
            <label htmlFor="main-form-remember-checkbox" className="remember-label">Remember me?</label>
          </div>
          <div className="forgot-field">
            <button className="forgot-btn">Forgot password?</button>
          </div>
        </div>
        <button type="submit" className="submit-btn" onClick={this.makeLogin}>sign in</button>
        <span className="or">or</span>
        <button className="or-btn" onClick={this.props.openReg}>Register</button>
      </div>
    )
  }
}

export default Login;
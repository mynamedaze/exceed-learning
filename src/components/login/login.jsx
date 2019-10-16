import React from 'react';
import validLogin from './utils/validLogin.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputsValue: {}
    };

    this.changeVal = this.changeVal.bind(this);
    this.formData = {login :{
      field: 'login',
      hasError: false,
      value:'sdfs'
    }}
  }

  changeVal(item, event) {
    let obj = {};

    obj[item.field] = event.target.value;

    if(event.target.value !== 'test'){
      item.hasError = true;
    }

    this.setState({inputsValue: {obj}});
  }
  render() {
    return (
      <div className="login" >
        <h2 className="title">{this.props.isLoginActive && 'Signin form'}</h2>
        <div className="inputs-wrapper">
          {validLogin.map((item, i)=>{
            return(
              <input key={item.field} type={validLogin[i].type} className={`${validLogin[i].classN}  ${item.hasError ? 'error' : ''}`} value={this.state.inputsValue[item.field]}
                     onChange={(e) => { this.changeVal(item, e);}} placeholder={validLogin[i].placeholder} required={validLogin[i].required}/>
            )})}
          <div className="remember-field">
            <input type="checkbox" id='main-form-remember-checkbox' className="remember-checkbox"/>
            <label htmlFor="main-form-remember-checkbox" className="remember-label">Remember me?</label>
          </div>
          <div className="forgot-field">
            <button className="forgot-btn">Forgot password?</button>
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
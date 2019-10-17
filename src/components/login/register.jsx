import React from 'react';
import validRegister from './utils/validRegister.js';
import Pass from './inputs/Pass.jsx';
import InputDefault from './inputs/InputDefault.jsx';

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputsValue: {}
    };
  }

  render() {
    return (
      <div className="register">
        <h2 className="title">{!this.props.isLoginActive && 'Register form'}</h2>
        <div className="inputs-wrapper">
          {validRegister.map((item, i)=>{
              return (
                item.isConfirmPass ?
                  <Pass key={item.field} options={item} index={i} /> :
                  <InputDefault key={item.field} options={item} index={i}/>
            )})}
        </div>
        <button type="submit" className="submit-btn">Register</button>
        <span className="or">or</span>
        <button className="or-btn">Sign in</button>
      </div>
    );
  }
}

export default Register;
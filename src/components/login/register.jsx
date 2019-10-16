import React from 'react';
import validRegister from './utils/validRegister.js';

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputsValue: {}
    };

    this.changeVal = this.changeVal.bind(this);
    this.submitReg = this.submitReg.bind(this);

    this.formData = {};
  }

  changeVal(item, event) {
    const currentValue = {};
    currentValue[item.value] = event.target.value;

    let checkValidRegExp = currentValue[item.value].match(item.reg);

    item.hasError = !checkValidRegExp;

    this.formData[item.field] = {
      hasError: item.hasError,
      value: currentValue[item.value]
    };

    console.log(this.formData);

    this.setState({inputsValue: {currentValue}});
  }

  submitReg(event) {
    let validSubmitStatus = false;
    let validHasSome = true, validHasNotSome;

    for (let i = 0; i < validRegister.length; i++) {
      if (!this.formData.hasOwnProperty(validRegister[i].field)) {
        validHasSome = false;
      }
    }

    let passwordMatched;

    if (this.formData.passwordRegister.value === this.formData.passwordConfirmRegister.value) {
      passwordMatched = true;
    } else {
      passwordMatched = false;
      this.formData.passwordRegister.hasError = true;
      this.formData.passwordConfirmRegister.hasError = true;
    }

    validSubmitStatus = validHasSome && passwordMatched;
    console.log(validSubmitStatus);
    event.preventDefault();
  }

  render() {
    return (
      <div className="register">
        <h2 className="title">{!this.props.isLoginActive && 'Register form'}</h2>
        <div className="inputs-wrapper">
          {validRegister.map((item, i)=>{
              return (
                item.isConfirmPass ? <Pass options={item} /> : <input key={item.field} type={validRegister[i].type} className={`${validRegister[i].classN}  ${item.hasError ? 'error' : ''}`} value={this.state.inputsValue[item.field]}
                   onChange={(e) => { this.changeVal(item, e);}} placeholder={validRegister[i].placeholder} required={validRegister[i].required}/>
            )})}
        </div>
        <button type="submit" className="submit-btn"  onClick={(e) => {this.submitReg(e)}}>Register</button>
        <span className="or">or</span>
        <button className="or-btn" onClick={this.props.openReg}>Sign in</button>
      </div>
    );
  }
}

export default Register;
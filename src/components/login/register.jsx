import React from 'react';
import validRegister from './utils/validRegister.js';
import Pass from './inputs/Pass.jsx';
import InputDefault from './inputs/InputDefault.jsx';

const inp = {

};

function getValue(field, value, hasError, isRequired) {
  inp[field] = {value, hasError, isRequired};
  console.log(inp);
}

function checkRequires() {
  let errTrigger = 0;

  console.log(inp);

  for (let i = 0; i < validRegister.length; i++) {
    const { field, required } = validRegister[i];
    const fieldFilled = !!inp[field];

    if (required) {
      errTrigger = fieldFilled ? errTrigger : errTrigger + 1;
    }

    if (fieldFilled && inp[field].hasError) {
      errTrigger++;
    }

  }

  return (!errTrigger);
}

class Register extends React.Component{
  constructor(props) {
    super(props);

    this.state = { alreadyExists: false };

    this.makeRegister = this.makeRegister.bind(this);
  }

  makeRegister() {

    if (JSON.parse(localStorage.getItem(inp.login.value))) {
      this.setState({alreadyExists: true});
    } else {
      this.setState({alreadyExists: false});
    }

    let isAllRequires = checkRequires();
    console.log('has all requires: ' + isAllRequires);
    console.log(inp);
    console.log(inp.login);
    if (isAllRequires && !JSON.parse(localStorage.getItem(inp.login.value))) {
      const accountInfo = {};
      for (let key in inp) {
        (key !== 'login') && (accountInfo[key] = inp[key].value)
      }
      console.log('accountInfo: ', accountInfo);
      localStorage.setItem(inp.login.value, JSON.stringify(accountInfo));
      console.log('from localStorage: ', JSON.parse(localStorage.getItem(inp.login.value)));
      this.props.openReg();
    }
  }

  render() {

    return (
      <div className="register">
        <h2 className="title">{!this.props.isLoginActive && 'Register form'}</h2>
        <div className={`${'inputs-wrapper'} ${this.state.alreadyExists ? 'already-exists' : ''}`}>
          {validRegister.map((item, i)=>{
              return (
                item.isConfirmPass ?
                  <Pass key={item.field}
                        options={item}
                        index={i}
                        forGetValues={getValue} /> :
                  <InputDefault key={item.field}
                                options={item}
                                index={i}
                                forGetValues={getValue} />
            )})}
        </div>
        <button type="submit" className="submit-btn" onClick={this.makeRegister}>Register</button>
        <span className="or">or</span>
        <button className="or-btn" onClick={this.props.openReg}>Sign in</button>
      </div>
    );
  }
}

export default Register;
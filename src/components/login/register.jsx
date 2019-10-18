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
  let requiredOriginal = [],
    requiredCurrent = [],
    noError = false,
    errTrigger = 0;

  console.log(inp);

  for (let i = 0; i < validRegister.length; i++) {
    const { field, required } = validRegister[i];
    const filedFilled = !!inp[field];

    if (required) {
      errTrigger = filedFilled ? errTrigger : errTrigger + 1;
    }

    if (filedFilled && inp[field].hasError) {
      errTrigger++;
    }

  }

  // for (let key in inp) {
  //   if (inp[key].isRequired) {
  //     requiredCurrent = requiredCurrent.concat(key);
  //     console.log('current: ' + requiredCurrent);
  //   }
  //   if (inp[key].hasError) {
  //     errTrigger = 1;
  //   }
  // }
  console.log(errTrigger);

  errTrigger ? noError = false : noError = true;

  console.log('errorvalid: ' + noError);

  return (requiredOriginal.length === requiredCurrent.length);
}

class Register extends React.Component{
  constructor(props) {
    super(props);

    this.state = { alreadyExists: false };

    this.makeRegister = this.makeRegister.bind(this);
  }

  makeRegister() {
    this.setState({alreadyExists: true});

    let isAllRequires = checkRequires();
    console.log('has all fields: ' + isAllRequires);
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
        <button className="or-btn">Sign in</button>
      </div>
    );
  }
}

export default Register;
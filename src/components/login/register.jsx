import React from 'react';

class Register extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="register">
        <h2 className="title">Signin Form</h2>
        <div className="inputs-wrapper">
          <input type="text" className="input  input--login" placeholder="Придумайте логин" required/>
          <input type="text" className="input  input--password" placeholder="Придумайте пароль" required/>
          <input type="text" className="input  input--password" placeholder="Введите его еще раз" required/>
          <input type="email" className="input  input--email" placeholder="Эл. почта"/>
          <input type="text" className="input  input--name" placeholder="Имя"/>
          <input type="number" className="input  input--age" placeholder="Ваш возраст"/>
          <div className="remember-field">
            <input type="checkbox" id='main-form-remember-checkbox' className="remember-checkbox"/>
            <label htmlFor="main-form-remember-checkbox" className="remember-label">fgg</label>
          </div>
        </div>
        <button type="submit" className="submit-btn">Register</button>
        <span className="or">or</span>
        <button className="or-btn" onClick={this.props.openReg}>Sign in</button>
      </div>
    );
  }
}

export default Register;
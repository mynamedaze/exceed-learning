import React from 'react';

const valid = [
    {
      field: 'login',
      reg: '/^(?=.*[a-z]).{6,}/',
      type: 'text',
      required: true,
      placeholder: 'Придумайте логин',
      classN: 'input  input--login'
    },
    {
      field: 'password',
      reg: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\\w\\s]).{6,}/',
      type: 'text',
      required: true,
      placeholder: 'Придумайте пароль',
      classN: 'input  input--password'
    }
  ];
class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};

    this.changeVal = this.changeVal.bind(this);

  }

  changeVal(item, event) {
    let obj = {};

    obj[item.field] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="register">
        <h2 className="title">{!this.props.isLoginActive && 'Register form'}</h2>
        <div className="inputs-wrapper">
          {valid.map((item, i)=>{
            return(
            <input type={valid[i].type} className={valid[i].classN} value={this.state[item.field]}
                   onChange={(e) => { this.changeVal(item, e);}} placeholder={valid[i].placeholder} required={valid[i].required}/>
            )})}

          <input type="text" className="input  input--password" placeholder="Введите пароль еще раз" required/>
          <input type="email" className="input  input--email" placeholder="Эл. почта"/>
          <input type="text" className="input  input--name" placeholder="Имя"/>
          <input type="number" className="input  input--age" placeholder="Ваш возраст"/>
        </div>
        <button type="submit" className="submit-btn">Register</button>
        <span className="or">or</span>
        <button className="or-btn" onClick={this.props.openReg}>Sign in</button>
      </div>
    );
  }
}

export default Register;
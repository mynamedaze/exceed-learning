const validRegister = [
  {
    field: 'login',
    reg: /^(?=.*[a-z]).{6,}/,
    type: 'text',
    required: true,
    placeholder: 'логин',
    classN: 'input  input--login'
  },
  {
    field: 'password',
    reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\\w\\s]).{6,}/,
    type: 'text',
    required: true,
    placeholder: 'пароль',
    classN: 'input  input--password'
  }
];

export default validRegister;
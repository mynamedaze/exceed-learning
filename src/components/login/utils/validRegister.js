const validRegister = [
  {
    field: 'loginRegister',
    reg: /^(?=.*[a-z]).{6,}/,
    type: 'text',
    required: true,
    placeholder: 'Придумайте логин',
    classN: 'input  input--login'
  },
  {
    field: 'passwordRegister',
    reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\\w\\s]).{6,}/,
    type: 'text',
    required: true,
    placeholder: 'Придумайте пароль',
    confirmPlaceholder: 'Введите пароль еще раз',
    classN: 'input  input--password',
    isConfirmPass: true
  },
  {
    field: 'emailRegister',
    reg: '',
    type: 'text',
    required: true,
    placeholder: 'Электронная почта',
    classN: 'input  input--email'
  },
  {
    field: 'nameRegister',
    reg: '',
    type: 'text',
    required: false,
    placeholder: 'Имя',
    classN: 'input  input--name'
  },
  {
    field: 'ageRegister',
    reg: '',
    type: 'number',
    required: false,
    placeholder: 'Ваш возраст',
    classN: 'input  input--age'
  }
];

export default validRegister;
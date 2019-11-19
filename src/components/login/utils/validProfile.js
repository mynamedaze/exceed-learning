const validProfile = [
  {
    field: 'name',
    reg: '',
    type: 'text',
    required: false,
    placeholder: 'Имя',
    classN: 'input  input--name'
  },
  {
    field: 'email',
    reg: /.+@.+\..+/i,
    type: 'text',
    required: true,
    placeholder: 'Электронная почта',
    classN: 'input  input--email'
  },
  {
    field: 'age',
    reg: /^(\d){1,3}$/,
    type: 'number',
    required: false,
    placeholder: 'Ваш возраст',
    classN: 'input  input--age'
  }
];

export default validProfile;
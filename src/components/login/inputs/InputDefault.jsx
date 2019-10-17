import React from 'react';
import validRegister from "../utils/validRegister";

class InputDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputsValue: ''
    };
  }

  changeVal(item, event) {
    const currentValue = {};
    currentValue[item.value] = event.target.value;

    let checkValidRegExp = currentValue[item.value].match(item.reg);

    item.hasError = !checkValidRegExp;

    this.setState(function(state) {
      return {
        hasError: item.hasError || (state.inputsValue !== state.inputsValueConfirm)
      };
    });

  }

  render() {
    let { index, options } = this.props;
    return (
      <input type={validRegister[index].type}
             className={`${validRegister[index].classN}  ${options.hasError ? 'error' : ''}`}
             value={this.state.inputsValue[index.field]}
             onChange={(e) => { this.changeVal(options, e);}}
             placeholder={validRegister[index].placeholder}
             required={validRegister[index].required}/>
    )
  }
}

export default InputDefault;
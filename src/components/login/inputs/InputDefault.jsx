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
    currentValue[item.field] = event.target.value;

    let checkValidRegExp = currentValue[item.field].match(item.reg);

    item.hasError = !checkValidRegExp;

    this.props.forGetValues(item.field, currentValue[item.field], item.hasError, item.required);

    this.setState({ hasError: item.hasError });

  }

  render() {
    let { index, options } = this.props;
    return (
      <input type={validRegister[index].type}
             className={`${validRegister[index].classN}  ${options.hasError ? 'error' : ''}`}
             value={this.state.inputsValue[index.field]}
             onChange={(e) => { this.changeVal(options, e);}}
             placeholder={this.props.placeholder || validRegister[index].placeholder}
             required={validRegister[index].required}/>
    )
  }
}

export default InputDefault;
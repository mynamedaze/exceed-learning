import React from 'react';
import validRegister from "../../utils/validRegister";

class InputDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputsValue: '',
    };
  }

  changeVal(item, event) {
    const currentValue = {};
    currentValue[item.field] = event.target.value;

    let checkValidRegExp = currentValue[item.field].match(item.reg);

    item.hasError = !checkValidRegExp;

    this.props.forGetValues(item.field, currentValue[item.field], item.hasError, item.required);

    this.setState({
      inputsValue: currentValue[item.field],
      hasError: item.hasError
    })

  }

  componentDidMount() {
    if (this.props.initialValue) {
      this.setState((state, props) => ({
        inputsValue: props.initialValue
      }));
      this.props.forGetValues(this.props.options.field, this.props.initialValue, false, this.props.required);
    }
  }

  render() {
    let { index, options } = this.props;
    return (
      <input type={validRegister[index].type}
             className={`${validRegister[index].classN}  ${options.hasError ? 'error' : ''}`}
             value={this.state.inputsValue}
             onChange={(e) => { this.changeVal(options, e);}}
             placeholder={this.props.placeholder || validRegister[index].placeholder}
             required={validRegister[index].required}/>
    )
  }
}

export default InputDefault;
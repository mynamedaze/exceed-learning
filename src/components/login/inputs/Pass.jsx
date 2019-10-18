import React from 'react';
import validRegister from "../utils/validRegister";

class Pass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputsValue: '',
      inputsValueConfirm: '',
      hasError: false
    };

    this.changeVal = this.changeVal.bind(this);
  }

  changeVal(item, isConfirm, event) {

    const currentValue = {};
    currentValue[item.field] = event.target.value;

    let checkValidRegExp = currentValue[item.field].match(item.reg);
    item.hasError = !checkValidRegExp;

    if (isConfirm === 'pass') {

      this.setState({inputsValue: event.target.value});

    } else {

      this.setState({inputsValueConfirm: event.target.value});

    }
    this.setState(function(state) {
      this.props.forGetValues(item.field, currentValue[item.field], item.hasError, item.required);
      return {
        hasError: item.hasError || (state.inputsValue !== state.inputsValueConfirm)
      };
    });

  }

  render() {
    return (
      <div>
        <input type={validRegister[this.props.index].type}
               className={`${validRegister[this.props.index].classN}  ${this.state.hasError ? 'error' : ''}`}
               value={this.state.inputsValue[this.props.field]}
               onChange={(e) => { this.changeVal(this.props.options, 'pass', e);}}
               placeholder={validRegister[this.props.index].placeholder}
               required={validRegister[this.props.index].required}/>
        <input type={validRegister[this.props.index].type}
               className={`${validRegister[this.props.index].classN}  ${this.state.hasError ? 'error' : ''}`}
               value={this.state.inputsValueConfirm[this.props.field]}
               onChange={(e) => { this.changeVal(this.props.options, 'passConfirm', e);}}
               placeholder={validRegister[this.props.index].confirmPlaceholder}
               required={validRegister[this.props.index].required}/>
      </div>
    )
  }
}

export default Pass;
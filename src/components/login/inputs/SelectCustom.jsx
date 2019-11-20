import React from 'react';

class SelectCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    this.setState({value: e.target.value});
    this.props.goChangeInput && this.props.goChangeInput(e);
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={(e) => {this.onValueChange(e)}}>
          {this.props.options.map((item, i) =>{
            return (
              <option key={i} value={item.label}>{item.label}</option>
            )
          })}
        </select>
      </div>
    );
  }
}

export default SelectCustom;
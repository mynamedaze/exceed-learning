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
    this.props.goChangeInput && this.props.goChangeInput(this.props.options[e.target.selectedIndex - 1]._id, e.target.value);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({value: this.props.value});
    }
  }

  render() {

    return (
      <div>
        <select value={this.state.value} onChange={(e) => {this.onValueChange(e)}}>
          <option value={this.props.placeholder} hidden={true}>{this.props.placeholder}</option>
          {this.props.options.map((item, i) =>{
            return (
              <option key={i} value={item.value}>{item.value}</option>
            )
          })}
        </select>
      </div>
    );
  }
}

export default SelectCustom;
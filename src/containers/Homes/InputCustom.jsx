import React from 'react';

class InputCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  changeValue = event => {
    this.setState({
      value: event.target.value
    })
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props && this.props.value) {
      this.setState({
        value: this.props.value
      })
    }
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={(e) => {this.changeValue(e)}}/>
    )
  }
}

export default InputCustom;
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
    console.log('this.props: ', this.props);
    console.log('prevprops: ', prevProps);
    if (prevProps !== this.props && this.props.options.value) {
      console.log('diff');
      this.setState({
        value: this.props.options.value
      })
    }
  }

  render() {
    return (
      <div className="edit-field">
        <input type="text" value={this.state.value} onChange={(e) => {this.changeValue(e)}}/>
        <button className="edit-btn" onClick={() => this.props.goSave(this.state.value, this.props.options._id)}>Save</button>
      </div>
    )
  }
}

export default InputCustom;
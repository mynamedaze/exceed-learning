import React from 'react';
import './index.scss';
import InputDefault from "../login/inputs/InputDefault";
import {connect} from "react-redux";
import {fixProfileInfo, getProfileInfo} from "../../Store/actions/authAction";
import validProfile from "../login/utils/validProfile";
import axios from "axios";

const inp = {};

function getValue(field, value, hasError, isRequired) {
  inp[field] = {value, hasError, isRequired};
  console.log(inp);
}

function checkRequires() {
  let errTrigger = 0;

  for (let i = 0; i < validProfile.length; i++) {
    const {field, required} = validProfile[i];
    const fieldFilled = !!inp[field];
    if (required) {
      errTrigger = fieldFilled ? errTrigger : errTrigger + 1;
    }

    if (fieldFilled && inp[field].hasError) {
      errTrigger++;
    }

  }
  console.log(errTrigger);
  return (!errTrigger);
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
    this.renderInputs = this.renderInputs.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  renderInputs() {
    return this.props.profileInfo && validProfile.map((item, i) => {
      return (
        <InputDefault
          key={item.field}
          options={item}
          index={i}
          forGetValues={getValue}
          placeholder={item.placeholder}
          initialValue={this.props.profileInfo[item.field]}
        />
      )
    });
  }

  componentDidMount() {
    this.props.getProfileInfo();
    console.log('profile-info', this.props.profileInfo);
  }

  saveChanges() {
    let isAllRequires = checkRequires();
    console.log('has all requires: ' + isAllRequires);
    console.log('inp: ', inp);
    if (isAllRequires) {
      const accountInfo = {};
      for (let key in inp) {
        if (inp.hasOwnProperty(key)) {
          accountInfo[key] = inp[key].value;
        }
      }
      console.log('accountInfo: ', accountInfo);
      axios.put('http://localhost:8080/users', accountInfo, {
        headers: {somekey: localStorage.getItem('authToken')}
      })
        .then(response => {
          console.log(response);
          this.props.toggleEdit();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="profile-container">
        <div className="outer">
          <div className="profile">
            <h2 className="title">Edit profile</h2>
            <div className="inputs-wrapper">
              {this.renderInputs()}
            </div>
            <div className="buttons-field">
              <button className="save-btn" onClick={this.saveChanges}>Save</button>
              <button className="cancel-btn" onClick={this.props.toggleEdit}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    profileInfo: state.auth.profileInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProfileInfo: () => dispatch(getProfileInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
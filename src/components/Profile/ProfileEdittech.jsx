import React from 'react';
import './index.scss';
import InputDefault from "../login/inputs/InputDefault";
import {connect} from "react-redux";
import {fixProfileInfo, getProfileInfo} from "../../Store/actions/authAction";
import validProfile from "../login/utils/validProfile";

const inp = {

};

function getValue(field, value, hasError, isRequired) {
  inp[field] = {value, hasError, isRequired};
  console.log(inp);
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {

      }
    };
    this.renderInputs = this.renderInputs.bind(this);
  }

  renderInputs() {
    return this.props.profileInfo && validProfile.map((item, i)=>{
      return(
        <InputDefault
          key={item.field}
          options={item}
          index={i}
          forGetValues={getValue}
          placeholder={item.placeholder}
          initialValid={this.props.profileInfo[item.field]}
        />
      )});
  }

  componentDidMount() {
    this.props.getProfileInfo();
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
            <button className="save-btn">Save</button>
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
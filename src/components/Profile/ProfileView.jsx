import React from 'react';
import './index.scss';
import {connect} from "react-redux";
import {getProfileInfo} from "../../Store/actions/authAction";
import validProfile from "../utils/validProfile";

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {

      }
    };
    this.renderInfo = this.renderInfo.bind(this);
  }

  renderInfo() {
    return this.props.profileInfo && validProfile.map((item, i)=>{
      return(
        <li key={i} className="item"><span className="item-notice">{item.placeholder}:</span> {this.props.profileInfo[item.field]}</li>
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
            <h2 className="title">Profile</h2>
            <div className="inputs-wrapper">
              <ul className="list">
                {this.renderInfo()}
              </ul>
            </div>
            <button className="edit-btn" onClick={this.props.toggleEdit}>Edit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
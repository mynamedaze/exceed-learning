import React from 'react';
import './index.scss';
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditActive: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState(state => ({
      isEditActive: !state.isEditActive
    }));
  }

  render() {
    let {isEditActive} = this.state;
    return (
      <div>
        {isEditActive && <ProfileEdit toggleEdit={this.toggleEdit} isEditActive={this.state.isEditActive} />}
        {!isEditActive && <ProfileView toggleEdit={this.toggleEdit} isEditActive={this.state.isEditActive} />}
      </div>
    )
  }
}

export default Profile;
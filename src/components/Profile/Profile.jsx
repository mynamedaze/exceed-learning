import React from 'react';
import './Profile.scss';
import validLogin from "../login/utils/validLogin";
import InputDefault from "../login/inputs/InputDefault";
import axios from "axios";

class Profile extends React.Component{

  async componentDidMount() {
    axios.get('http://localhost:8080/users', {headers : {somekey: localStorage.getItem('authToken')}})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="profile-container">
        <div className="outer">
          <div className="profile" >
            <h2 className="title">Edit profile</h2>
            <div className="inputs-wrapper">
              {validLogin.map((item, i)=>{
                return(
                  <InputDefault
                    key={item.field}
                    options={item}
                    index={i}
                    // forGetValues={getValue}
                    placeholder={item.placeholder}
                  />
                )})}
            </div>
            <button className="save-btn">Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
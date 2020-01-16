import React from 'react';
import './Homes.scss';
import InputCustom from "./InputCustom";
import SelectCustom from "./SelectCustom";
import axios from "axios";
import requestPut from "../../components/utils/requestPut";

class Homes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedHome: '',
      selectedRoom: '',
      roomList: [],
      homeList: []
    };

  }

  changeInputValueRoom = (roomId, roomValue) => {
    this.setState({
      selectedRoom: {
        _id: roomId,
        value: roomValue
      }
    });
  };

  getRooms = async (homeId, homeValue) => {
    try {
      console.log(homeId);
      const response = await axios.get('http://localhost:8080/homes/get-rooms/', {
        headers: {
          somekey: localStorage.getItem('authToken')
        },
          params: {
           homeId: homeId
          }
      });
      this.setState({
        roomList: response.data.rooms,
        inputValue: homeValue,
        selectedRoom: {
          value: ' '
        },
        selectedHome: {
          _id: homeId,
          value: homeValue
        }
      });
      console.log('rooms', response);
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    this.requestHomes();
  }

  requestHomes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/homes/get-homes/', {
        headers: {somekey: localStorage.getItem('authToken')}
      });
      this.setState({homeList: response.data.homes});
      console.log('homes', response);
    } catch (e) {
      console.log(e);
    }
  };

  renderSelect = () => {
      return (
        <SelectCustom
          goChangeInput={this.getRooms}
          options={this.state.homeList}
          placeholder={"Выберите дом..."}
          value={this.state.selectedHome.value}
        />
      )
  };

  renderSelectRooms = () => {
    return (
      <SelectCustom
        goChangeInput={this.changeInputValueRoom}
        options={this.state.roomList}
        placeholder={"Выберите комнату..."}
        value={this.state.selectedRoom.value}
      />
    )
  };

  requestSaveHome = (value, homeId) => {
    try {
      const url = '/homes/update-home/';
      const data = {
        value,
        homeId,
      };
      const response = requestPut(url, data);

      const homeList = this.state.homeList;
      const selectedHome = this.state.selectedHome;
      let homeIndex = homeList.findIndex(item => item._id === selectedHome._id);

      homeList[homeIndex].value = value;

      this.setState({homeList, selectedHome: {
          _id: selectedHome._id,
          value: homeList[homeIndex].value
        }});
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  requestSaveRoom = async (value, roomId) => {
    try {
      const url = '/homes/update-room/';
      const data = {
        value,
        roomId,
      };

      const response = requestPut(url, data);

      const roomList = this.state.roomList;
      const selectedRoom = this.state.selectedRoom;
      let roomIndex = roomList.findIndex(item => item._id === selectedRoom._id);
      roomList[roomIndex].value = value;
      this.setState({roomList, selectedRoom: {
          _id: selectedRoom._id,
          value: roomList[roomIndex].value
        }});
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log('selectedHome: ', this.state.selectedRoom);
    console.log('inputValueRoom: ', this.state.inputValueRoom);
    return (
      <div className="homes-container">
        <div className="outer">
          <div className="homes">
            <h2 className="title">Homes</h2>
            <div className="wrapper">
              <div className="forms-field">
                {this.state.homeList.length !== 0 && this.renderSelect()}
                <InputCustom
                  options={this.state.selectedHome}
                  goSave={this.requestSaveHome}
                />
                {this.renderSelectRooms()}
                <InputCustom
                  options={this.state.selectedRoom}
                  goSave={this.requestSaveRoom}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homes;
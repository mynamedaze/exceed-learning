import React from 'react';
import './Homes.scss';
import InputCustom from "./InputCustom";
import SelectCustom from "./SelectCustom";

class Homes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedHome: '',
      selectedHomeId: '',
      selectedRoom: ''
    };

    this.homes = [
      {id: 'sdfds', value: 'The White House', label: 'The White House'},
      {id: 'fdsfs', value: 'Big Ben', label: 'Big Ben'},
      {id: 'gdfgs', value: 'Tower of Pisa', label: 'Tower of Pisa'},
      {id: 'sssds', value: 'Old Trafford', label: 'Old Trafford'},
      {id: 'sdfds', value: 'Auchan', label: 'Auchan'},
    ];

    this.rooms = [
      {homeId: 'sdfds', id: '01', value: 'Room 1', label: 'Room 1'},
      {homeId: 'sdfds', id: '02', value: 'Room 2', label: 'Room 2'},
      {homeId: 'sdfds', id: '03', value: 'Room 3', label: 'Room 3'},
      {homeId: 'sdfds', id: '04', value: 'Room 4', label: 'Room 4'},
      {homeId: 'sdfds', id: '05', value: 'Room 5', label: 'Room 5'},
      {homeId: 'sdfds', id: '06', value: 'Room 6', label: 'Room 6'},
      {homeId: 'fdsfs', id: '01', value: 'Big 1', label: 'Room 1'},
      {homeId: 'fdsfs', id: '02', value: 'Big 2', label: 'Room 2'},
      {homeId: 'fdsfs', id: '03', value: 'Big 3', label: 'Room 3'},
      {homeId: 'fdsfs', id: '04', value: 'Big 4', label: 'Room 4'},
      {homeId: 'gdfgs', id: '01', value: 'Pisa 1', label: 'Room 1'},
      {homeId: 'gdfgs', id: '02', value: 'Pisa 2', label: 'Room 2'},
      {homeId: 'gdfgs', id: '03', value: 'Pisa 3', label: 'Room 3'},
      {homeId: 'gdfgs', id: '04', value: 'Pisa 4', label: 'Room 4'},
      {homeId: 'sssds', id: '01', value: 'Sector 1', label: 'Room 1'},
      {homeId: 'sssds', id: '02', value: 'Sector 2', label: 'Room 2'},
      {homeId: 'sssds', id: '03', value: 'Sector 3', label: 'Room 3'},
      {homeId: 'sssds', id: '04', value: 'Sector 4', label: 'Room 4'},
      {homeId: 'sdfds', id: '01', value: 'Larek 1', label: 'Room 1'},
      {homeId: 'sdfds', id: '02', value: 'Larek 2', label: 'Room 2'},
      {homeId: 'sdfds', id: '03', value: 'Larek 3', label: 'Room 3'},
      {homeId: 'sdfds', id: '04', value: 'Larek 4', label: 'Room 4'},
    ];

  }

  goChangeInput = event => {
    this.setState({inputValue: event.target.value});
  };

  changeInputHandle = event => {
    this.setState({inputValue: event.target.value});
  };

    render() {
    console.log('inputValue: ', this.state.inputValue);
      return (
      <div className="homes-container">
        <div className="outer">
          <div className="homes">
            <h2 className="title">Homes</h2>
            <div className="wrapper">
              <div className="forms-field">
                <SelectCustom
                  goChangeInput={this.goChangeInput}
                  selectValue={this.state.valueSelect}
                  options={this.homes}
                  placeholder={"Выберите дом..."}
                />
                <div className="edit-field">
                  <InputCustom
                    changeValue={this.changeInputHandle}
                    value={this.state.inputValue}
                  />
                  <button className="edit-btn">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homes;
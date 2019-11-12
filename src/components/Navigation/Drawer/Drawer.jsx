import React from 'react';
import './Drawer.scss';
import Overlay from "../../UI/Overlay/Overlay";
import {NavLink} from 'react-router-dom';

// const links = [
//   {to: '/auth', label: 'Вход / Регистрация', exact: false, private: false},
//   {to: '/auth/profile', label: 'Профиль', exact: false, private: true},
//   {to: '/homes', label: 'Дома', exact: false, private: true},
// ];

class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler = () => {
    this.props.onClose();
  };

  logOut = () => {

  };

  // renderLinks = () => {
  //
  // };

  render() {
    const clsName = ['drawer'];

    if (!this.props.isOpen) {
      clsName.push('close');
    }
    return (
      <React.Fragment>
        <nav className={clsName.join(' ')}>
          <ul>
            { !this.props.isAuthorized &&
              <li>
                <NavLink
                  to={'/auth'}
                  exact={true}
                  activeClassName={'active'}
                  onClick={this.clickHandler}
                >Вход/Регистрация</NavLink>
              </li>
            }
            {this.props.isAuthorized &&
            <li>
              <NavLink
                to={'/homes'}
                exact={true}
                activeClassName={'active'}
                onClick={this.clickHandler}
              >Дома</NavLink>
            </li>
            }
            {this.props.isAuthorized &&
            <li>
              <NavLink
                to={'/auth/profile'}
                exact={true}
                activeClassName={'active'}
                onClick={this.clickHandler}
              >Профиль</NavLink>
            </li>
            }
            <li>
              <NavLink
                to={'/logout'}
                exact={true}
                activeClassName={'active'}
                onClick={this.logOut}
              >Выход</NavLink>
            </li>
          </ul>
        </nav>
        { this.props.isOpen ? <Overlay onClick={this.props.onClose}/> : null}
      </React.Fragment>

    );
  }
}

export default Drawer;
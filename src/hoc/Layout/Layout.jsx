import React from 'react';
import './Layout.scss';
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      isAuthorized: false
    };

  }

  toggleMenuHandler = () => {
    this.setState((state) => ({menu: !this.state.menu}));
    if (!!localStorage.getItem('authToken')) {
      this.setState({isAuthorized: true});
    }
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false
    });
  };

  render() {
    console.log('fsdfdsfsd', this.state.isAuthorized);
    return (
      <div>

        <Drawer
          isOpen={this.state.menu}
          isAuthorized={this.state.isAuthorized}
          onClose={this.menuCloseHandler}
        />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

      <main className="layout">
        {this.props.children}
      </main>
      </div>
    )
  }
}

export default Layout;
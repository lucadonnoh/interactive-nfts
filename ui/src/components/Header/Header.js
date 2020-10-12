import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import './Header.css';

class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
  }

  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item as={Link} exact to='/' content='Home' name='Home' active={this.state.activeItem === 'Home'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} exact to='/Collection' content='Collection' name='Collection' active={this.state.activeItem === 'Collection'} onClick={this.handleItemClick}/>
        <Menu.Item as={Link} exact to='/Submit' content='Create' name='Submit' active={this.state.activeItem === 'Submit'} onClick={this.handleItemClick}/>
        <div className="right menu">
        <Menu.Item content='Connect Wallet' />
      </div>
    </Menu>




    );
  }
}

export default withRouter(Header);

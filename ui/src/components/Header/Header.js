import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
  }

  render() {
    return (
      <div className="header">
        <ul>
          <li><Link to="/">Market Place</Link></li>
          <li><Link to="/collection">My INFTs</Link></li>
          <li><Link to="/submit">Create INFT</Link></li>
          <li><div>Connect Wallet</div></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);

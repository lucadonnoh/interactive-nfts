import React from 'react';

import logo from 'assets/logo.svg';
import './MarketPlace.css';

class MarketPlace extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      InteractiveNFT: null,
      defaultAccount: null,
    }
  }

  render() {
    return (
      <div className="MarketPlace">
        <h1>Market Place</h1>
      </div>
    );
  }
}

export default MarketPlace;

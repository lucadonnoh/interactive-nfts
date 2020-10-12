import React from 'react';

import logo from 'assets/logo.svg';
import './MarketPlace.css';
import Layout from '../../components/Layout';

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
      <Layout>
        <div className="MarketPlace">
          <h1>Welcome to INFT!</h1>
        </div>
      </Layout>
    );
  }
}

export default MarketPlace;

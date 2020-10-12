import React from 'react';

import Sketch from "components/Sketch/Sketch.js";

import logo from 'assets/logo.svg';
import './MarketPlace.css';

import initWeb3 from "services/web3";
import initContract from "services/InteractiveNFT";


var mintCounter = 0;

class MarketPlace extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      InteractiveNFT: null,
      defaultAccount: null,
    }
  }

  componentDidMount = async () => {
    let web3 = await initWeb3();
    let InteractiveNFT = initContract(web3);

    let accounts = await web3.eth.getAccounts();

    this.setState({
      web3,
      InteractiveNFT,
      defaultAccount: accounts[0],
    });

    console.log(this.state.web3);
  }

  mintEmpty = async () => {
    this.state
        .InteractiveNFT
        .methods
        .mint("")
        .send({
          from: this.state.defaultAccount
        })
        .on('transactionHash', function(hash) {
          console.log(hash);
        });

    mintCounter += 1;
    console.log(mintCounter);
  }

  render() {
    return (
      <div className="MarketPlace">
        <h1>Interactive NFT</h1>
        <button onClick={this.mintEmpty}>Mint</button>
        <Sketch sketch={"test"}/>
      </div>
    );
  }
}

export default MarketPlace;

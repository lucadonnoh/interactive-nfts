import React from 'react';

import Sketch from "./Sketch";

import logo from './logo.svg';
import './App.css';

import initWeb3 from "./web3";
import initContract from "./InteractiveNFT";


var mintCounter = 0;

class App extends React.Component {

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
      <div className="App">
        <h1>Interactive NFT</h1>
        <button onClick={this.mintEmpty}>Mint</button>
        <Sketch sketch={"test"}/>
      </div>
    );
  }
}

export default App;

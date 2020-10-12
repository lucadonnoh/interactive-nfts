import React from 'react';

import Sketch from "components/Sketch/Sketch.js";
import './Submit.css';

import initWeb3 from "services/web3";
import initContract from "services/InteractiveNFT";

class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      InteractiveNFT: null,
      defaultAccount: null,
      sketchCode: null,
    }

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
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
  }

  handleTextAreaChange(event) {
    this.setState({
      sketchCode: event.target.value,
    })
  }

  render() {
    return (
      <div className="submit-page">
        <h1>Create an INFT</h1>
        <div className="sketch-container">

          <textarea
            id="sketch-code"
            className="sketch-code"
            onChange={this.handleTextAreaChange}
            value={this.state.sketchCode}
            placeholder="Enter your sketch code here..." />

          <Sketch className="sketch-preview" id="sketch1" sketch={this.state.sketchCode}/>
        </div>
        <button className="sketch-submit" onClick={this.mintEmpty}>Mint</button>
      </div>
    );
  }
}

export default Submit;

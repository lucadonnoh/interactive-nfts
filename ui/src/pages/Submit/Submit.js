import React from 'react';

import Sketch from "components/Sketch/Sketch.js";
import Layout from "components/Layout.js";
import './Submit.css';

import initWeb3 from "services/web3";
import initContract from "services/InteractiveNFT";

import { Button, Form, Message } from 'semantic-ui-react';

import Head from 'next/head';

class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      InteractiveNFT: null,
      defaultAccount: null,
      sketchCode: '',
      errorMessage: '',
      loading: true
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
      loading: false
    });

    console.log(this.state.web3);
  }

  mintEmpty = async (event) => {
    event.preventDefault();
    let er = "";
    try {

      await this.state.InteractiveNFT
        .methods
        .mint("")
        .send({
          from: this.state.defaultAccount
        })
        .on('transactionHash', function (hash) {
          console.log(hash);
        })
        .catch((error) => {
          er = error.message;
        });
        this.setState({ errorMessage: er});
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  handleTextAreaChange(event) {
    this.setState({
      sketchCode: event.target.value,
    })
  }

  render() {
    return (
      <Layout>
        <Head><title>INFT</title></Head>
        <div className="submit-page">
          <h1>Create an INFT</h1>
          <Form onSubmit={this.mintEmpty} error={!!this.state.errorMessage}>
            <div className="sketch-container">

              <textarea
                id="sketch-code"
                className="sketch-code"
                onChange={this.handleTextAreaChange}
                value={this.state.sketchCode}
                placeholder="Enter your sketch code here..." />

              <Sketch className="sketch-preview" id="sketch1" sketch={this.state.sketchCode} />
            </div>
            <Button disabled={this.state.loading} loading={this.state.loading} className="fluid ui primary button">Mint</Button>
            <Message error header="Oops!" content={this.state.errorMessage} />
          </Form>
        </div>
      </Layout>
    );
  }
}

export default Submit;

import React from 'react';

import './Collection.css';
import Layout from '../../components/Layout';
import Card from '../../components/Card/Card';
import { Button } from 'semantic-ui-react';

import initWeb3 from "services/web3";
import initContract from "services/InteractiveNFT";
const fetch = require('node-fetch');

class Collection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "pop",
      description: "pup",
      image: ""
    }

  }

  componentDidMount = async () => {
    var that = this;
    let web3 = await initWeb3();
    let InteractiveNFT = initContract(web3);

    console.log(web3, InteractiveNFT);
    let accounts = await web3.eth.getAccounts();

    this.setState({
      web3,
      InteractiveNFT,
      defaultAccount: accounts[0],
      loading: false
    });

    const URI = await this.state.InteractiveNFT
      .methods
      .tokenURI(10).call();

    console.log(URI);

    let settings = { method: "Get" };

    let t = '';

    await fetch(URI, settings)
      .then(res => res.json())
      .then((json) => {
        console.log("that:", that.state);
        that.setState({
          title: json.properties.name.description,
          description: json.properties.description.description,
          image: json.properties.image.description
        });
      });
  }

  render() {
    return (
      <Layout>
        <div className="collection">
          <h1>Collection</h1>
          <Card
            title={this.state.title}
            description={this.state.description}
            image={this.state.image}
          />
        </div>
      </Layout>
    );
  }
}

export default Collection;

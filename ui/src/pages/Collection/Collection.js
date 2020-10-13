import React from 'react';

import './Collection.css';
import Layout from '../../components/Layout';
import Card from '../../components/Card/Card';

import initWeb3 from "services/web3";
import initContract from "services/InteractiveNFT";

class Collection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      image: ""
    }

    this.getJSON = this.getJSON.bind(this);
  }

  getJSON(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';
      xhr.onload = () => {
        var status = xhr.status;
        if (status === 200) {
          callback(null, xhr.response);
          this.setState({title: xhr.response.properties.name.description});
          console.log(this.state.title); //works
        } else {
          callback(status, xhr.response);
        }
      };
      xhr.send();
    };

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

    const URI = await this.state.InteractiveNFT
      .methods
      .tokenURI(10).call();

    this.getJSON(URI,
      function (err, data) {
        if (err !== null) {
          alert('Something went wrong: ' + err);
        } else {
          console.log(data.properties.name.description); //works
        }
      });
    console.log(this.state.title); //doesnt work: <empty string>
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

require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = process.env["MNEMONIC"];
const infura_key = process.env["INFURA_ID"];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      host: "localhost",
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + infura_key);
      },
      network_id: 4,
      gas: 4612388,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.6.2"
    },
  },
  description: "Interactive NFTs",
  authors: [
    "hydr063n <hydr063n@yandex.com>",
    "lucadonnoh",
  ],
};

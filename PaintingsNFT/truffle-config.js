const path = require('path');
require('dotenv').config()


const HDWalletProvider = require('truffle-hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const deployedKey = process.env.INFURA_KEY;
module.exports = {
  contracts_build_directory: path.join(__dirname, 'client/src/contracts'),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    ropsten: {
      provider: ()=>  new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${deployedKey}`),
      network_id: 3,
      gas: 5500000
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};

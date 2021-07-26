const path = require('path');

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "YOUR-INFURA-KEY";

const fs = require("fs");
//ADD YOU MNEMONIC IN SECRET FILE 
//NOTE: DO NOT PUSH YOUR MNEMONIC TO GITHUB 
const mnemonic = fs.readFileSync(".secret").toString().trim();
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  
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
      provider: ()=>  new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,
      gas: 5500000
    }
  }
};

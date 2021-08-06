const CarNft = artifacts.require("CarNFT");

module.exports = function (deployer) {
  deployer.deploy(CarNft);
};

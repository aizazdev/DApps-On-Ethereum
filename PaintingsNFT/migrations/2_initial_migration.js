const paintingsNFT = artifacts.require("PaitingsNFT");

module.exports = function (deployer) {
  deployer.deploy(paintingsNFT);
};

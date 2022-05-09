const DevToken = artifacts.require("DevToken");

// THis is an async function, it will accept the Deployer account, the network, and eventual accounts.
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the DevToken
  await deployer.deploy(DevToken);
  const devToken = await DevToken.deployed()
};
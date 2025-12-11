const cloud = artifacts.require("cloud"); 

module.exports = function (deployer) { 
  deployer.deploy(cloud);
};

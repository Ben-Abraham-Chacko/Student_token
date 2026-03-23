require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    shardeum: {
      url: "https://api-mezame.shardeum.org",
      chainId: 8119,
      accounts: [process.env.PRIVATE_KEY || ""]
    }
  }
};
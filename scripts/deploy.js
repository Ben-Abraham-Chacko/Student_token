const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying ClubToken to Shardeum...");

  const ClubToken = await ethers.getContractFactory("ClubToken");
  
  const token = await ClubToken.deploy(
    "Engineering Club",
    "CampusToken",
    "CAMP",
    1000000
  );

  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("✅ ClubToken deployed!");
  console.log("📋 Contract Address:", address);
  console.log("🔗 View on explorer: https://explorer-mezame.shardeum.org/account/" + address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
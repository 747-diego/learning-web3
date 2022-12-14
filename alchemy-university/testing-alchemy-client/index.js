// Setup: npm install alchemy-sdk
const { Network, Alchemy } = require('alchemy-sdk');

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: 'mkcEuA3E4dyHk_VXaQlZrlzmwl8QwTBJ', // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log('The latest block number is', latestBlock);
}

main();
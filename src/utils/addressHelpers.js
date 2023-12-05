import addresses from '../config/contracts';
import networkChains from '../config/network';

// BSC CONTRACTS

const getMulticallAddress = (chainId) => addresses.mulltiCall[chainId];

const getEliteTokenDistributionAddress = (chainId) =>
  addresses.EliteTokenDistributorImplementation[chainId];

const getLotteryAddress = (chainId) => addresses.lottery[chainId];

const getUSDCAddress = (chainId) => {
  return addresses.usdc[chainId];
}

const supportedChain = (networkId) => {
  return networkId === networkChains.networkId;
};

const getNetworkName = (networkId) => {
  switch (networkId) {
    case 1:
      return 'eth';
    case 56:
      return 'bsc';
    case 137:
      return 'matic';
    case 97:
      return 'bsc_testnet';
    default:
      return 'bsc';
  }
};

export {
  supportedChain,
  getNetworkName,
  getMulticallAddress,
  getEliteTokenDistributionAddress,
  getLotteryAddress,
  getUSDCAddress
};

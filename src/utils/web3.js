/* eslint-disable no-shadow */
import Web3 from 'web3';
import getRpcUrl from './getRpcUrl';

/**
 * Provides a web3 instance using wallet provider
 */
let web3 = null;
let prevChainId = 0;

const getWeb3 = (wallet, chainId) => {
  if (
    wallet !== null &&
    wallet !== undefined &&
    wallet.ethereum !== null &&
    wallet.status === 'connected' &&
    wallet.ethereum !== undefined &&
    wallet.ethereum !== null &&
    wallet.account != null
  ) {
    if (wallet.chainId !== prevChainId) {
      web3 = new Web3(wallet.ethereum);
      web3.eth.setProvider(window.ethereum);
      web3.setProvider(window.ethereum);
      prevChainId = wallet.chainId;
    }
    // web3.currentProvider.setMaxListeners(300);
    return web3;
  }
  const RPC_URL = getRpcUrl(chainId);
  const httpProvider = new Web3.providers.HttpProvider(RPC_URL, {
    timeout: 10000,
  });
  web3 = new Web3(httpProvider);
  web3.eth.setProvider(window.ethereum);
  web3.setProvider(window.ethereum);
  return web3;
};
const getContract = async (address, abi, wallet, chainId) => {
  web3 = getWeb3(wallet, chainId);
  // web3.currentProvider.setMaxListeners(300);
  let contract = {};
  if (address !== null && address !== undefined && address !== '') {
    contract = new web3.eth.Contract(abi, address);
    if (wallet.status === 'connected') {
      const customChain = {
        name: '',
        networkId: wallet.chainId,
        chainId: wallet.chainId,
      };
      contract.defaultAccount = wallet.account;
      contract.defaultCommon = customChain;
    } else {
      const customChain = {
        name: '',
        networkId: chainId,
        chainId,
      };
      contract.defaultAccount = '0xe113831F9FB5924c7bb2b2B5602132e0C61BBcbF';
      contract.defaultCommon = customChain;
    }

    // TODO Check chain id on functions calling getContract
  }

  return { contract };
};

const format = (wallet, input) => {
  const web3 = getWeb3(wallet);
  return parseFloat(web3.utils.fromWei(input));
};
const formatToWei = (wallet, input) => {
  const web3 = getWeb3(wallet);
  return web3.utils.toWei(input);
};

const hasMethod = async (wallet, contractAddress, signature) => {
  const web3 = getWeb3(wallet);
  const code = await web3.eth.getCode(contractAddress);
  const functionSignature = web3.eth.abi.encodeFunctionSignature(signature);
  return code.indexOf(functionSignature.slice(2, functionSignature.length)) !== -1;
};

export { getWeb3, getContract, format, formatToWei, hasMethod };

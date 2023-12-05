import random from 'lodash/random';
import { rpcs } from '../config/rpc_urls';

const getNodeUrl = (chainId) => {
  const selectedRpc = rpcs.find((rpc) => rpc.chainId === chainId);
  if (selectedRpc) {
    const randomIndex = random(0, selectedRpc.urls.length - 1);
    return selectedRpc.urls[randomIndex];
  }
  return process.env.REACT_APP_NODE_1;
};

export default getNodeUrl;

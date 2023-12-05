import { getContract, getWalletClient, writeContract, prepareWriteContract } from '@wagmi/core';

import * as addressHelper from './addressHelpers';
import ERC20ABI from '../config/abi/erc20.json';

export const getERC20Contract = async (chainId, tokenAddress) => {
    const walletClient = await getWalletClient({chainId});
    return getContract({ tokenAddress, abi:ERC20ABI, walletClient});
}

export const setTokenAllowance = async (chainId, tokenAddress, spenderAddress, amount) => {

    const walletClient = await getWalletClient({chainId});

    const config = await prepareWriteContract({address:tokenAddress, abi:ERC20ABI, functionName:'approve', args:[spenderAddress, amount], chainId, account: walletClient.account});

    const tx = await writeContract(config);

    return tx;
};

import { useEffect, useState } from 'react';
import { useContractRead, useAccount, erc20ABI } from 'wagmi';
import { formatEther, formatUnits } from 'viem';

export const useTokenAllowance = (tokenAddress, spenderAddress) => {
  const { address, isConnected } = useAccount();
  const [allowance, setAllowance] = useState(0);

  const { data, isError, isLoading } = useContractRead({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: 'allowance',
    args: [address, spenderAddress],
    watch: true,
  });

  useEffect(() => {
    setAllowance( data ? formatEther(data) : 0); // 18 decimal
    setAllowance(data ? formatUnits(data, 6): 0); // 6 decimal
  }, [data, isConnected, address, isLoading, isError]);

  return { allowance, isLoading, isError };
};

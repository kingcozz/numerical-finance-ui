const rpcs = [
  {
    urls: [
      'https://data-seed-prebsc-1-s3.binance.org:8545',
      'https://data-seed-prebsc-1-s1.binance.org:8545',
      'https://data-seed-prebsc-2-s2.binance.org:8545',
      'https://bsc-testnet.public.blastapi.io',
    ],
    chainId: 97,
  },
  {
    chainId: 1,
    urls: [
      'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7',
      'https://1rpc.io/eth',
      'https://rpc.ankr.com/eth',
    ],
  },
  {
    urls: [
      'https://rpc.ankr.com/polygon',
      'https://rpc-mainnet.matic.quiknode.pro\t',
      'https://polygon-rpc.com\t',
    ],
    chainId: 137,
  },
  {
    urls: ['https://evm-cronos.crypto.org/', 'https://cronosrpc-1.xstaking.sg'],
    chainId: 25,
  },
  {
    chainId: 56,
    urls: [
      'https://rpc.phalcon.xyz/rpc_d387185d25474c8cb29d977d7dc615ed',
      // "https://bsc-mainnet.public.blastapi.io",
      // "https://blissful-frequent-asphalt.bsc.discover.quiknode.pro/bbb0a627b2e3e833221d1b083ef0c84c48e1c84f/",
      // "https://rpc.ankr.com/bsc"
    ],
  },
  {
    chainId: 80001,
    urls: [
      'https://rpc-mumbai.maticvigil.com',
      'https://polygon-testnet.public.blastapi.io',
      'https://matic-mumbai.chainstacklabs.com',
    ],
  },
  {
    chainId: 3693,
    urls: ['https://rpc.empirenetwork.io/'],
  },
  {
    chainId: 42161,
    urls: ['https://arb1.arbitrum.io/rpc', 'https://arbitrum.blockpi.network/v1/rpc/public'],
  },
  {
    chainId: 43114,
    urls: ['https://api.avax.network/ext/bc/C/rpc', 'https://avalanche-evm.publicnode.com'],
  },
];

export const customBscChain = {
  id: 56,
  name: 'Binance Smart Chain',
  shortName: 'BSC',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    public: { http: 'https://rpc.phalcon.xyz/rpc_d387185d25474c8cb29d977d7dc615ed' },
    default: { http: 'https://rpc.phalcon.xyz/rpc_d387185d25474c8cb29d977d7dc615ed' },
  },
  blockExplorers: {
    etherscan: {
      name: 'BscScan',
      url: 'https://scan.phalcon.xyz/fork_b6ea40f3b254458097bf48283a708ca4/',
    },
  },
};

export { rpcs };

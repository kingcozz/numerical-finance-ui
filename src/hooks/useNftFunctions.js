import { useEffect, useState } from "react";
import * as addressHelper from "../utils/addressHelpers";
import useRefresh from "./useRefresh";
import { getWeb3, format, getContract } from "utils/web3";
import {
  getRootedContract,
  getCampaignContract,
  getJumpstartNftContract,
} from "utils/contractHelpers";
import erc20ABI from "../config/abi/erc20.json";
import Multicall from "@dopex-io/web3-multicall";
import getRpcUrl from "../utils/getRpcUrl";
const supportedChainId = addressHelper.supportedChain();
import Web3 from "web3";
import { usePrevious } from "./useHelpers";

// const useCampaignManagerAllowance = (wallet) => {
//   const { fastRefresh } = useRefresh();
//   const [allowance, setAllowance] = useState(null);

//   useEffect(() => {
//     async function fetchAllowance() {
//       const address = wallet.account;
//       const campaignManagerAddress = addressHelper.getCampaignManagerAddress(
//         wallet.chainId
//       );
//       getRootedContract(wallet)
//         .then((contract) => {
//           contract.methods
//             .allowance(address, campaignManagerAddress)
//             .call({ from: address })
//             .then((res) => {
//               setAllowance(res > 0);
//             })
//             .catch((err) => {
//               console.log("Failed to get call allowance.");
//             });
//         })
//         .catch((e) => {
//           console.log("Failed to get contract root");
//         });
//     }

//     if (supportedChainId && wallet.status === "connected") {
//       fetchAllowance();
//     }
//   }, [fastRefresh]);
//   return allowance;
// };

// const useNftAllowance = (wallet, nftAddress, mintTokenAddress, chainId) => {
//   const { superSlowRefresh } = useRefresh();
//   const [allowance, setAllowance] = useState(null);

//   useEffect(() => {
//     async function fetchAllowance() {
//       let abi = erc20ABI;
//       const address = wallet.account;

//       try {
//         let { contract } = await getContract(
//           mintTokenAddress,
//           abi,
//           wallet,
//           chainId
//         );
//         if (contract.methods) {
//           let allow = await contract.methods
//             .allowance(address, nftAddress)
//             .call({ from: address });
//           allow = allow > 0;
//           //return boolean value
//           setAllowance(allow);
//           console.log('allowance set correct')
//         }
//       } catch (e) {
//         console.log("Failed to get contract");
//       }
//     }

//     if (
//       supportedChainId &&
//       wallet.status === "connected" &&
//       nftAddress !== null &&
//       mintTokenAddress !== null &&
//       nftAddress !== undefined &&
//       mintTokenAddress !== undefined
//     ) {
//       fetchAllowance();
//     }
//   }, [superSlowRefresh, wallet]);

//   return allowance;
// };

// const useCampaignInfo = (
//   wallet,
//   campaignAddress,
//   currencyDecimals,
//   chainId
// ) => {
//   const { slow } = useRefresh();
//   const [campaignInfo, setCampaignInfo] = useState(null);
//   const [fetching, setFetching] = useState(false);
//   const prevChainId = usePrevious(chainId);
//   const prevCampaignAddress = usePrevious(campaignAddress);
//   const prevWalletAddress = usePrevious(wallet?.account);
//   const prevWalletStatus = usePrevious(wallet?.status);
//   const prevCurrencyDecimals = usePrevious(currencyDecimals);

//   useEffect(() => {
//     async function fetchCampaignInfo() {
//       setFetching(true);
//       if (fetching) {
//         return;
//       }
      
//       console.log("fetchCampaignInfo");

//       const RPC_URL = getRpcUrl(chainId);
//       const httpProvider = new Web3.providers.HttpProvider(RPC_URL, {
//         timeout: 10000,
//       });
//       const multicall = new Multicall({
//         multicallAddress: addressHelper.getMulticallAddress(chainId),
//         provider: httpProvider,
//       });

//       let contract = await getCampaignContract(
//         wallet,
//         campaignAddress,
//         chainId
//       );

//       let deadAddress = "0x0000000000000000000000000000000000000000";
   
//       // improves blockchain response time by 10x
//       const multicallResp = await multicall.aggregate([
//         contract.methods.whitelistEnabled(),
//         contract.methods.isRefundActive(), // todo replace with isRefundActive
//         contract.methods.campaignCompleted(),
//         contract.methods.totalRaised(),
//         contract.methods.userContributed(wallet.account ?? deadAddress),
//         contract.methods.totalContributors(),
//         contract.methods.endDate(),
//         contract.methods.owner(),
//         contract.methods.getNfts(),
//         contract.methods.whitelist(wallet.account ?? deadAddress),
//       ]);

//       // grab nft info for campaign
//       let nfts = [];
//       let nftCalls = [];
//       for (let i = 0; i < multicallResp[8].length; i++) {
//         contract = await getJumpstartNftContract(wallet, multicallResp[8][i]);
//         nftCalls.push(contract.methods.totalSupply());
//         nftCalls.push(contract.methods.owner());
//         nftCalls.push(contract.methods.whitelistEnabled());
//         nftCalls.push(
//           contract.methods.whitelist(wallet.account ?? deadAddress)
//         );
//         nftCalls.push(contract.methods.mintLimit());
//         nfts.push({ address: multicallResp[8][i] });        
//       }

//       const nftMulticallResp = await multicall.aggregate(nftCalls);
//       for (let i = 0; i < multicallResp[8].length; i++) {
//         nfts[i].totalSupply = nftMulticallResp[0 + (i * 5)];
//         nfts[i].owner = nftMulticallResp[1 + (i * 5)];
//         nfts[i].whitelistEnabled = nftMulticallResp[2 + (i * 5)];
//         nfts[i].whitelisted = nftMulticallResp[3 + (i * 5)];
//         nfts[i].mintLimit = nftMulticallResp[4 + (i * 5)];
//       }

//       // SUPER HACK FOR SK AND SIGN CAMPAIGNS
//       /// ONLY HACKED FOR SIGN AND SK CAMPAIGN BECAUSE WE FUCKED UP THE CONTRACTS
//       let campaignContract2;
//       if(campaignAddress === "0x9b1A8b5207Cbfd2cdA3bA542CD2105D7f900Cd09") {

//         campaignContract2 = await getCampaignContract(
//           wallet,
//           '0x01dBFdF23e0De80F5Cb5F719Bebb6917E67D3446', // sk campaignv2
//           chainId
//         );

//         nftCalls = [];
//         const multicallResp2 = await multicall.aggregate([campaignContract2.methods.getNfts()]);      
//         for (let i = 0; i < multicallResp2[0].length; i++) {
//           campaignContract2 = await getJumpstartNftContract(wallet, multicallResp2[0][i]);
//           nftCalls.push(campaignContract2.methods.totalSupply());   
//         }

//         const nftMulticallResp2 = await multicall.aggregate(nftCalls);
//         for (let i = 0; i < multicallResp2[0].length; i++) {
//           nfts[i].totalSupply = parseInt(nfts[i].totalSupply) + parseInt(nftMulticallResp2[i]);
//         }
//       }      

//       /// END HACK

//       setCampaignInfo({
//         whitelistEnabled: multicallResp[0],
//         refundActive: multicallResp[1],
//         campaignCompleted: multicallResp[2],
//         totalRaised: parseFloat(multicallResp[3]) / 10 ** currencyDecimals,
//         userContributions:
//           parseFloat(multicallResp[4]) / 10 ** currencyDecimals,
//         totalBackers: parseInt(multicallResp[5]),
//         endDate: multicallResp[6],
//         owner: multicallResp[7],
//         nfts: nfts,
//         isWhitelisted: multicallResp[9],
//       });
//       setFetching(false);
//     }

//     if (
//       (supportedChainId &&
//       campaignAddress !== null &&
//       campaignAddress !== undefined &&
//       campaignAddress !== "" &&      
//       (prevChainId !== chainId || chainId !== undefined) &&
//       (prevCampaignAddress !== campaignAddress || campaignAddress !== undefined)
//        ) ||      
//       (campaignInfo === null && chainId !== undefined && campaignAddress !== undefined)      
//       || (wallet.status === "connected" && wallet.account !== null && chainId !== undefined && campaignAddress !== undefined)
//       // &&
//       // wallet.status === "connected" &&
//       // wallet.account !== null &&
//       // wallet.account !== undefined
//     ) {
//       fetchCampaignInfo();
//     }
//   }, [slow, wallet]);

//   return campaignInfo;
// };

// export { useCampaignManagerAllowance, useNftAllowance, useCampaignInfo };

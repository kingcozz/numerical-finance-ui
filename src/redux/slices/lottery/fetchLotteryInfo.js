import { erc20ABI, getPublicClient } from '@wagmi/core';
import * as addressHelper from 'utils/addressHelpers';
import { formatEther, formatUnits } from 'viem';

const CHAIN_ID = 56;

const lotteryContract = {
  address: addressHelper.getLotteryAddress(CHAIN_ID),
  // abi: LotteryABI,
};

export async function getReferralsInfo(round) {
  try {
    // const client = getPublicClient();

    // const result = await client.readContract({
    //   address: addressHelper.getLotteryAddress(CHAIN_ID),
    //   abi: LotteryABI,
    //   functionName: 'totalPendingReferralBonuses',
    // });
    // return { totalPendingReferralBonuses: Number(formatUnits(result, 18)) };
  } catch (e) {
    console.log(e);
    return {};
  }
}

export async function getCurrentRound() {
  try {
    // const client = getPublicClient();

    // const result = await client.readContract({
    //   address: addressHelper.getLotteryAddress(CHAIN_ID),
    //   abi: LotteryABI,
    //   functionName: 'currentRound',
    // });
    // return Number(result);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

export async function getRoundStats(round) {
  try {
    // const client = getPublicClient();

    // const roundsInfo = await client.readContract({
    //   address: addressHelper.getLotteryAddress(CHAIN_ID),
    //   abi: LotteryABI,
    //   functionName: 'roundsInfo',
    //   args: [round],
    // });
    // return {
    //   roundId: roundsInfo[0],
    //   startingTimestamp: roundsInfo[1],
    //   closedTimestamp: roundsInfo[2],
    //   endedTimestamp: roundsInfo[3],
    //   totalTickets: roundsInfo[4],
    //   totalPlayers: roundsInfo[5],
    //   // totalPrizePool: formatEther(roundsInfo[6]), // bsc 18 decimal usdc
    //   totalPrizePool: formatUnits(roundsInfo[6], 18), // eth 6 decimal usdc
    //   biggestBuyer: roundsInfo[7],
    //   active: roundsInfo[8],
    //   daily: roundsInfo[9],
    //   weekly: roundsInfo[10],
    //   monthly: roundsInfo[11],
    //   biyearly: roundsInfo[12],
    //   yearly: roundsInfo[13],
    // };
  } catch (e) {
    console.log(e);
    return {};
  }
}

export async function getAccountInfo(account) {
  try {
    // const client = getPublicClient();

    // if (!account) return {};
    // const playerStats = await client.readContract({
    //   address: addressHelper.getLotteryAddress(CHAIN_ID),
    //   abi: LotteryABI,
    //   functionName: 'playersStats',
    //   args: [account],
    // });

    // const balance = await client.readContract({
    //   address: addressHelper.getUSDCAddress(CHAIN_ID),
    //   abi: erc20ABI,
    //   functionName: 'balanceOf',
    //   args: [account],
    // });

    // return {
    //   totalReferralBonus: Number(formatUnits(playerStats[4], 18)),
    //   totalTickets: Number(playerStats[0]),
    //   totalPrizes: Number(formatUnits(playerStats[1], 18)),
    //   totalParticipants: Number(playerStats[3]),
    //   totalPrizesToClaim: Number(formatUnits(playerStats[2], 18)),
    //   usdcBalance: Number(formatUnits(balance, 18)),
    // };
  } catch (e) {
    console.log(e);
    return {};
  }
}

export async function getAccountReferralInfo(account, round) {
  try {
    // const client = getPublicClient();

    // if (!account) return { referrals: [] };
    // const calls = [];
    // for (let i = 0; i <= round; i++) {
    //   calls.push({ ...lotteryContract, functionName: 'ticketsPlayerDetails', args: [i, account] });
    //   calls.push({
    //     ...lotteryContract,
    //     functionName: 'pendingReferralBonuses',
    //     args: [account, i],
    //   });
    // }
    // const result = await client.multicall({ contracts: calls });
    // const referrals = [];
    // for (let i = 0; i < result.length; i += 2) {
    //   referrals.push({
    //     roundId: Math.floor(i / 2),
    //     totalReferralBonus: Number(formatUnits(result[i].result[2], 18)),
    //     totalReferralPaid: Number(formatUnits(result[i].result[3], 18)),
    //     totalReferralClaimable: Number(formatUnits(result[i + 1].result, 18)),
    //   });
    // }
    // return { referrals: referrals.sort((a, b) => b.roundId - a.roundId) };
  } catch (e) {
    console.log(e);
    return {};
  }
}

function getWinnerDatas(data, type, round) {
  // const timestamp = Number(data.lastDrawingTimestamp);
  // const lastDrawingId = Number(data.lastDrawingId);

  // if (data?.lastDrawingTimestamp === 0) return [];

  // const winners = data.winners.map((winner, i) => ({
  //   timestamp,
  //   roundId: round,
  //   winner,
  //   amount: Number(formatUnits(data.winnersAmount[i], 18)),
  //   type,
  //   drawingId: i + 1,
  // }));
  // return winners;
}

export async function getWinners(round) {
  try {
    // const client = getPublicClient();
    // const calls = [];
    // for (let i = 0; i <= round; i++)
    //   calls.push({ ...lotteryContract, functionName: 'roundsInfo', args: [i] });
    // const result = await client.multicall({ contracts: calls });
    // let winners = [];
    // for (let i = 0; i < result.length; i++) {
    //   const dailyWinners = getWinnerDatas(result[i].result[9], 'Daily', i);
    //   const weeklyWinners = getWinnerDatas(result[i].result[10], 'Weekly', i);
    //   const monthlyWinners = getWinnerDatas(result[i].result[11], 'Monthly', i);
    //   const biyearlyWinners = getWinnerDatas(result[i].result[12], 'Biyearly', i);
    //   const yearlyWinners = getWinnerDatas(result[i].result[13], 'Yearly', i);
    //   winners = [
    //     ...winners,
    //     ...dailyWinners,
    //     ...weeklyWinners,
    //     ...monthlyWinners,
    //     ...biyearlyWinners,
    //     ...yearlyWinners,
    //   ];
    // }
    // return winners.sort((a, b) => b.timestamp - a.timestamp);
  } catch (e) {
    console.log(e);
    return [];
  }
}

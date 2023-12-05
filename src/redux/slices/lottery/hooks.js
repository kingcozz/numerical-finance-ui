import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRefresh from 'hooks/useRefresh';
import {
  fetchCurrentRoundAsync,
  fetchLotteryAccountInfoAsync,
  fetchLotteryAccountReferralInfoAsync,
  fetchReferralsInfoAsync,
  fetchRoundStatsAsync,
  fetchWinnersAsync,
} from '.';
import { useAccount } from 'wagmi';

export const useLotteryRefresh = () => {
  const dispatch = useDispatch();
  const { address: account } = useAccount();
  const currentRound = useLotteryCurRound();

  function fetchInfos() {
    // dispatch(fetchCurrentRoundAsync());
    dispatch(fetchReferralsInfoAsync());
    dispatch(fetchRoundStatsAsync(currentRound));
    // dispatch(fetchWinnersAsync(currentRound));
    dispatch(fetchLotteryAccountInfoAsync(account));
    dispatch(fetchLotteryAccountReferralInfoAsync(account, currentRound));
  }

  return { fetchInfos };
};

export const useFetchLotteryData = () => {
  const dispatch = useDispatch();
  const { slowRefresh } = useRefresh();
  const { address: account } = useAccount();
  const currentRound = useLotteryCurRound();
  // const account = "0x4503146845a0E5469C08c9aD466aEd660A5Ce954";

  useEffect(() => {
    dispatch(fetchCurrentRoundAsync());
    dispatch(fetchReferralsInfoAsync());
  }, [dispatch, slowRefresh]);

  useEffect(() => {
    if (currentRound === undefined) return;
    dispatch(fetchRoundStatsAsync(currentRound));
    dispatch(fetchWinnersAsync(currentRound));
  }, [dispatch, slowRefresh, currentRound]);

  useEffect(() => {
    dispatch(fetchLotteryAccountInfoAsync(account));
  }, [dispatch, account, slowRefresh]);

  useEffect(() => {
    if (currentRound === undefined) return;
    dispatch(fetchLotteryAccountReferralInfoAsync(account, currentRound));
  }, [dispatch, account, slowRefresh, currentRound]);
};

export const useLotteryInfo = () => useSelector((state) => state.lottery);
export const useLotteryCurRound = () => useSelector((state) => state.lottery.currentRound);
export const useLotteryReferrals = () => useSelector((state) => state.lottery.referrals);
export const useLotteryAccountInfo = () => useSelector((state) => state.lottery.accountInfo);
export const useLotteryWinners = () => useSelector((state) => state.lottery.winners);

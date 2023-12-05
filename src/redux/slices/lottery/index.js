import { createSlice } from '@reduxjs/toolkit';
import {
  getAccountInfo,
  getAccountReferralInfo,
  getCurrentRound,
  getReferralsInfo,
  getRoundStats,
  getWinners,
} from './fetchLotteryInfo';

const initialState = {
  referrals: { totalPendingReferralBonuses: undefined },
  roundStats: {},
  winners: {},
  accountInfo: {},
};

export const fetchReferralsInfoAsync = () => async (dispatch) => {
  const data = await getReferralsInfo();
  dispatch(setReferrals(data));
};

export const fetchCurrentRoundAsync = () => async (dispatch) => {
  const data = await getCurrentRound();
  dispatch(setCurrentRound(data));
};

export const fetchRoundStatsAsync = (currentRound) => async (dispatch) => {
  const data = await getRoundStats(currentRound);
  dispatch(setRoundStats(data));
};

export const fetchWinnersAsync = (currentRound) => async (dispatch) => {
  const data = await getWinners(currentRound);
  dispatch(setWinners(data));
};

export const fetchLotteryAccountInfoAsync = (account) => async (dispatch) => {
  const data = await getAccountInfo(account);
  dispatch(setAccountInfo(data));
};

export const fetchLotteryAccountReferralInfoAsync = (account, round) => async (dispatch) => {
  const data = await getAccountReferralInfo(account, round);
  dispatch(setAccountInfo(data));
};
export const stakingSlice = createSlice({
  name: 'staking',
  initialState,
  reducers: {
    setReferrals: (state, action) => {
      state.referrals = action.payload;
    },
    setCurrentRound: (state, action) => {
      state.currentRound = action.payload;
    },
    setRoundStats: (state, action) => {
      state.roundStats = action.payload;
    },
    setAccountInfo: (state, action) => {
      state.accountInfo = { ...state.accountInfo, ...action.payload };
    },
    setWinners: (state, action) => {
      state.winners = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setReferrals, setCurrentRound, setRoundStats, setAccountInfo, setWinners } =
  stakingSlice.actions;
export default stakingSlice.reducer;

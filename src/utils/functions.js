/* eslint-disable consistent-return */
export const getEllipsis = (address, left = 6, right = 4) => {
  if (!address) return '';
  return `${address.slice(0, left)}...${address.substring(address.length - right)}`;
};

export const calculateOdds = (numTickets) => {
  const totalTickets = 100000;
  const totalDrawings = 432;

  // Probability of NOT winning a single drawing with numTickets
  const probabilityNotWinSingleDrawing = (totalTickets - numTickets) / totalTickets;

  // Probability of NOT winning any of the 432 drawings with numTickets
  const probabilityNotWinAllDrawings = probabilityNotWinSingleDrawing ** totalDrawings;

  // Therefore, probability of winning at least once in 432 drawings is:
  const probabilityWin = 1 - probabilityNotWinAllDrawings;

  // Convert probability to percentage
  const percentageWin = (probabilityWin * 100).toFixed(3);

  // Calculate odds (1 in X chance)
  const odds = Math.round(1 / probabilityWin);

  return {
    percentage: percentageWin,
    odds: `1 in ${odds}`,
  };
};

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * greedy 학습
 */

function maxProfit(prices: number[]): number {
  let ans = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const today = prices[i];
    const tomorrow = prices[i + 1];
    if (today < tomorrow) ans += tomorrow - today;
  }
  return ans;
}

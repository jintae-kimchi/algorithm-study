/**
 * https://leetcode.com/problems/gas-station/description/
 *
 * greedy 학습
 *
 * - 누적합이 0이상이면 순회가능
 * - 누적합 최저점의 다음칸이 시작지점임을 깨달아야 함
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  let acc = 0;
  let min = Infinity;
  let minIdx = -1;
  for (let i = 0; i < n; i++) {
    acc += gas[i] - cost[i];
    if (acc < min) {
      min = acc;
      minIdx = i;
    }
  }
  if (acc < 0) return -1;
  return (minIdx + 1) % n;
}

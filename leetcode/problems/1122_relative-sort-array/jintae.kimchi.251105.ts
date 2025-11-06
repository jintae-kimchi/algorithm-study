/**
 * https://leetcode.com/problems/relative-sort-array/description/
 */

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = arr2.reduce((prev, curr, idx) => {
    prev.set(curr, idx);
    return prev;
  }, new Map());
  return arr1.sort((a, b) => {
    const idxA = map.get(a);
    const idxB = map.get(b);

    // 정렬 기준을 따름
    if (idxA > -1 && idxB > -1) {
      return idxA - idxB;
    }

    // 한쪽만 정렬 기준이면 무조건 우선
    if (idxA > -1) {
      return -1;
    }
    if (idxB > -1) {
      return 1;
    }

    // 일반 비교
    return a - b;
  });
}

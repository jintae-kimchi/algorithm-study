/**
 * https://leetcode.com/problems/maximize-distance-to-closest-person/description/
 *
 * 모의 인터뷰. 통과.
 *
 * 슬라이딩 윈도우 문제임. 다만 양끝단의 조건이 다르다는 것을 인지하기.
 * TMI) 배열 범위 벗어나는 참조는 성능에 안좋다고 함.
 * TMI2) 가장 오른쪽 부분은 while 문 없이도 계산 가능함.(루프 내 조건문 하나라도 줄이기)
 */

function maxDistToClosest(seats: number[]): number {
  let left = -1; // 구석가능할 때 -1
  let right = 0;
  let max = 0;

  while (left <= right && right <= seats.length) {
    // right 이동
    while (seats[right] === 0) {
      right++;
      // 가까운 1에 걸림
      // 또는 오른쪽 끝까지 감(seat.length)
    }
    // distance 구하기
    if (left === -1) {
      // 가장 왼쪽에 앉을 수 있을때의 거리
      max = Math.max(max, right); // 그냥 right 해도 무방할듯
    } else if (right === seats.length) {
      // 가장 오른쪽에 앉을 수 있는 경우의 거리
      max = Math.max(max, right - 1 - left);
    } else {
      // 일반적인 중간값 구하기
      max = Math.max(max, Math.floor((right - left) / 2));
    }
    // left 좁히기
    left = right++;
  }

  return max;
}

/**
 * https://leetcode.com/problems/day-of-the-year/description/
 */

function dayOfYear(date: string): number {
  const [year, month, day] = date.split("-").map((s) => Number(s));

  let isLeapYear = year % 4 === 0;
  if (year % 100 === 0) {
    if (year % 400 !== 0) {
      isLeapYear = false;
    }
  }

  let ans = 0;
  const thirtyOne = [1, 3, 5, 7, 8, 10, 12];
  for (let m = 1; m < month; m++) {
    if (m === 2) {
      ans += isLeapYear ? 29 : 28;
    } else {
      ans += thirtyOne.includes(m) ? 31 : 30;
    }
  }
  ans += day;

  return ans;
}

// 주어진 그레고리력(일반양력달력인듯?) 달력 포멧의 문자열을 받으면
// 그 해의 몇번째날인지 리턴

// 풀이 전략
// 언어가 지원하는 Date API 를 사용하면 쉽게 풀 수 있을 듯
// 그런데 문제가 원하는 건 아닐 것 같고.
// 윤달을 고려해서 직접 계산하는 로직을 제출하는 것을 원한다고 봄

// 01234567
//     ^  ^ 해당 위치는 무조건 '-' 라고 가정
// 0000-00-00

// 위키를 보니 4년마다 무조건 윤년이 아님
// 100 으로 나누어지면 윤년 아님. 근데 400으로 나눠지면 윤년임

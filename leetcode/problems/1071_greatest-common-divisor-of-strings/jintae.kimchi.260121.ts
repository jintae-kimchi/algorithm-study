/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
 *
 * 모의 인터뷰
 *
 * gcd 개념을 활용하지 못해 통과만 한 코드.
 * gcd 개념을 학습 후 작성한 코드들도 첨부함.
 */

function gcdOfStrings_brute_force(str1: string, str2: string): string {
  const getDivideStrings = (str: string): string[] => {
    let current = "";
    const divides: string[] = [];
    const mid = Math.floor(str.length);
    for (let i = 0; i <= mid; i++) {
      current += str[i];
      if (str.replaceAll(current, "") === "") divides.push(current);
    }
    divides.push(str);
    return divides;
  };
  const findLargestString = (str: string, divides: string[]): string => {
    for (let i = divides.length - 1; i >= 0; i--) {
      if (str.replaceAll(divides[i], "") === "") return divides[i];
    }
    return "";
  };

  return findLargestString(str1, getDivideStrings(str2));
}

function gcdOfStrings_gcd_string(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a: string, b: string): string => {
    if (b === "") return a;
    return gcd(b, a.replaceAll(b, ""));
  };
  return gcd(str1, str2);
}

function gcdOfStrings_gcd_number(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a: number, b: number): number => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  return str1.substring(0, gcd(str1.length, str2.length));
}

/**
 * https://leetcode.com/problems/two-sum/
 *
 * 선 검사 후 삽입 방식으로 처리하기
 */

/**
 * 미리 사전을 만들고 처리하는 방식.
 * 중복값을 관리하기 위해 배열로 저장
 * 3개 이상의 같은 값은 고려할 필요 없어서 2개만 저장하는 배열로 설계했음
 * 그럼에도 비효율적으로 측정됨
 */
function twoSum_똥나오는코드(nums: number[], target: number): number[] {
  const map = nums.reduce((m, c, i) => {
    if (m.has(c)) {
      const v = m.get(c)!;
      v.push(i);
    } else {
      m.set(c, [i]);
    }
    return m;
  }, new Map<number, number[]>());

  for (const [key, idxList] of map) {
    const [idx] = idxList;
    const diff = target - key;
    if (map.has(diff)) {
      const [diffIdx1, diffIdx2] = map.get(diff)!;
      const diffIndex = idx === diffIdx1 ? diffIdx2 : diffIdx1;
      if (diffIndex > -1) {
        return [idx, diffIndex];
      }
    }
  }
  throw new Error("each input would have exactly one solution!");
}

/**
 * 배열 구조는 탈피했지만 넣고 생각하는 방식을 벗어나지 못해 로직이 쓸데없이 복잡함.
 */
function twoSum_똥이살짝만나온코드(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      // 없으면 넣기
      map.set(num, i);
    } else {
      // 있으면? 같은 값이 있다는 뜻
      // 같은 값은 2개까지만 가능하므로 정답인지 확인 후 리턴
      if (target - num === num) {
        return [map.get(num)!, i];
      }
    }
    // 일반적인 케이스는 넣어진 상태로 대응하는 키(1개만 존재가능)를 찾음
    const diff = target - num;
    if (map.has(diff) && map.get(diff) !== i) {
      return [i, map.get(diff)!];
    }
  }
  throw new Error("each input would have exactly one solution!");
}

/**
 * 넣지 않아도 답을 알 수 있는 걸 활용하면 이렇게 깔끔하게 나옴
 */
function twoSum_최종코드(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (map.has(diff)) {
      return [map.get(diff)!, i];
    }

    map.set(num, i);
  }
  throw new Error("each input would have exactly one solution!");
}

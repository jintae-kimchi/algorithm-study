/**
 * https://leetcode.com/problems/largest-time-for-given-digits/description/
 */

function largestTimeFromDigits_250910(arr: number[]): string {
  let latest = "";
  let latestH = -1;
  let latestM = -1;

  // 시계를 시뮬레이션
  for (let h1 = 0; h1 < 4; h1++) {
    const H = arr[h1];
    const hmm = arr.filter((_, i) => i !== h1);
    // console.log(`${H}:`, hmm);

    if (H > 2) continue;

    for (let h2 = 0; h2 < 3; h2++) {
      const HH = hmm[h2];
      const mm = hmm.filter((_, i) => i !== h2);
      // console.log(`${H}${HH}:`, mm);

      if (H === 2 && HH > 3) continue;

      for (let m1 = 0; m1 < 2; m1++) {
        const M = mm[m1];
        const m = mm.filter((_, i) => i !== m1);
        // console.log(`${H}${HH}:${M}`, m);

        if (M > 5) continue;

        for (let m2 = 0; m2 < 1; m2++) {
          const MM = m[m2];

          if (latestH < H * 10 + HH) {
            // console.log('hour is bigger. always update', `${H}${HH}:${M}${MM}`);
            latestH = H * 10 + HH;
            latestM = M * 10 + MM;
          } else if (latestH === H * 10 + HH) {
            // console.log('try to update minutes', `${H}${HH}:${M}${MM}`);
            if (latestM < M * 10 + MM) {
              // console.log('minutes updated.', `${H}${HH}:${M}${MM}`);
              latestH = H * 10 + HH;
              latestM = M * 10 + MM;
            }
          }
        }
      }
    }
  }
  if (latestH > -1 && latestM > -1) {
    return String(latestH).padStart(2, "0") + ":" + String(latestM).padStart(2, "0");
  }
  return "";
}

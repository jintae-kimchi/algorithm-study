// function customSortString(order: string, s: string): string {
//     const dict = order.split("").reduce((prev, curr, idx) => {
//         prev.set(curr, idx);
//         return prev;
//     }, new Map<string, number>());

//     const OTHER = 27;
//     return s
//         .split("")
//         .sort((a, b) => (dict.get(a) ?? OTHER) - (dict.get(b) ?? OTHER))
//         .join("");
// };
function customSortString(order: string, s: string): string {
  const dict = s.split("").reduce((prev, curr, idx) => {
    prev.set(curr, (prev.get(curr) ?? 0) + 1);
    return prev;
  }, new Map<string, number>());

  const ans: string[] = [];
  for (let i = 0; i < order.length; i++) {
    const ch = dict.get(order[i]) ?? 0;
    for (let j = 0; j < ch; j++) {
      ans.push(order[i]);
    }
    dict.delete(order[i]);
  }
  for (const [k, v] of dict) {
    for (let i = 0; i < v; i++) {
      ans.push(k);
    }
  }
  return ans.join("");
}

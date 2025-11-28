/**
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/description/
 * 
 * BFS 학습.
 * DFS는 최단 경로를 효율적으로 구할 수 없으니 BFS로 풀어야 하는 미로 문제임.
 */

function shortestPathBinaryMatrix(grid: number[][]): number {
    if (grid[0][0] !== 0) return -1;
    let len = 0;
    const n = grid.length;
    const queue: number[][] = [[0, 0]];
    while (queue.length) {
        const current = queue.length;
        len++;
        for (let i = 0; i < current; i++) {
            const [x,y] = queue.shift()!;
            if (x === n-1 && y === n-1) {
                return len;
            }
            [
                [x-1,y-1],[x-1,y],[x-1,y+1],
                [x,  y-1],        [x,  y+1],
                [x+1,y-1],[x+1,y],[x+1,y+1],
            ].forEach(([x,y]) => {
                if (grid[x] && grid[x][y] === 0) {
                    grid[x][y] = 1;
                    queue.push([x,y])
                }
            })
        }
    }
    return -1;
};
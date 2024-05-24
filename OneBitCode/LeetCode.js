var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshOranges = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshOranges += 1;
            }
        }
    }

    let minutesPassed = 0;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length && freshOranges > 0) {
        minutesPassed += 1;
        let newQueue = [];
        while (queue.length) {
            const [x, y] = queue.shift();
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    freshOranges -= 1;
                    newQueue.push([nx, ny]);
                }
            }
        }
        queue.push(...newQueue);
    }

    return freshOranges === 0 ? minutesPassed : -1;
};

// Example usage
const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];
console.log(orangesRotting(grid)); // Output: 4
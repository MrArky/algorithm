/**
 * 题目：最小路径和
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 * 示例:
 * 
 *  输入:
    [
    [1,3,1],
    [1,5,1],
    [4,2,1]
    ]
    输出: 7
    解释: 因为路径 1→3→1→1→1 的总和最小。
 *
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    var n = grid[0].length, m = grid.length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j && j == 0) continue;
            else if (i == 0) grid[i][j] = grid[i][j - 1] + grid[i][j];
            else if (j == 0) grid[i][j] = grid[i - 1][j] + grid[i][j];
            else grid[i][j] = Math.min(grid[i][j - 1] + grid[i][j], grid[i - 1][j] + grid[i][j]);
        }
    }
    return grid[m - 1][n - 1];
};


/**
 * 思路：
 * 这个题相同了就比较简单
 * 理论：
 * 1.任何位置格子的上一个格子顶多两个：它上面的和它左边的（如果它在第一行或者第一列甚至只有一个）。
 * 2.其实每到一个格子就是选择上一个格子的用哪一个。
 * 3.当然选小的，才能由最小路径值和的可能性。
 * 4.因为自己在未来也会被选择，那么将自己的值和选择的格子值相加更新自己的值，下次自己被选择时，选择自己的格子就能看之前的
 *   那个路径的值最小。
 * 5.一次类推，知道最后一个格子选择完成，最后一个格子更新后的值就一定是所有路径中数字总和最小的路径。
 * 
 * 时间复杂度 O(mn) 控件复杂度 O(1)
 */
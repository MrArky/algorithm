/**
 * 题目：不同路径 II
 * 
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 
 *   ┏---------------------------┓
 *   | ☻ |   |   |   |   |   |   |
 *   |---------------------------|
 *   |   |   |   |   |   |   |   |
 *   |---------------------------|
 *   |   |   |   |   |   |   | ● |
 *   ┗---------------------------┛
 * 
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 
 * 示例 1:
 * 
 *  输入:
    [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]
    输出: 2
    解释:
    3x3 网格的正中间有一个障碍物。
    从左上角到右下角一共有 2 条不同的路径：
    1. 向右 -> 向右 -> 向下 -> 向下
    2. 向下 -> 向下 -> 向右 -> 向右
 *
 */


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid[0] ? obstacleGrid[0].length : 0;
    let n = obstacleGrid.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (obstacleGrid[i][j] == 1) obstacleGrid[i][j] = 0;
            else {
                if (i == 0 && j == 0) obstacleGrid[i][j] = 1;
                else obstacleGrid[i][j] = (obstacleGrid[i - 1]?obstacleGrid[i - 1][j]:0) + (obstacleGrid[i][j - 1]?obstacleGrid[i][j - 1]:0);
            }
            if (i == n - 1 && j == m - 1) return obstacleGrid[i][j];
        }
    }
};


/**
 * 思路：
 * 
 * 动态规划：每个能到达的格子的路径数ways(obstacleGrid[i][j])都等于其能到达该格子的上一个格子(obstacleGrid[i-1][j]和obstacleGrid[i-1][j])的路径和
 * 即：ways(obstacleGrid[i-1][j])+ways(obstacleGrid[i-1][j])
 * 
 * 注意：开始的第一个格子如果是1，那么结果一定是0，如果该格子为0，那么到达该格子的路径数一定为1。
 */
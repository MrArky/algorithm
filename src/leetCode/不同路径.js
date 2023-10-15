/**
 * 题目：不同路径
 * 
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
 * 
 *   ┏---------------------------┓
 *   | ☻ |   |   |   |   |   |   |
 *   |---------------------------|
 *   |   |   |   |   |   |   |   |
 *   |---------------------------|
 *   |   |   |   |   |   |   | ● |
 *   ┗---------------------------┛
 */


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var factorial = (n, res) => {
        if (n == 0 || n == 1) return res;
        return factorial(n - 1, n * res);
    }
    return factorial(m + n - 2, 1) / factorial(m - 1, 1) / factorial(n - 1, 1);
};3

/**
 * 思路：
 * 排列组合，向下只能走n-1步，向右只能走m-1步。
 */
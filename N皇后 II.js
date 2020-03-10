/**
 * 题目：N皇后
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *    
 *      a  b  c  d  e  f  g  h
 *   8  .  .  .  Q  .  .  .  .  8
 *   7  .  .  .  .  .  .  Q  .  7
 *   6  .  .  Q  .  .  .  .  .  6
 *   5  .  .  .  .  .  .  .  Q  5
 *   4  .  Q  .  .  .  .  .  .  4
 *   3  .  .  .  .  Q  .  .  .  3
 *   2  Q  .  .  .  .  .  .  .  2
 *   1  .  .  .  .  .  Q  .  .  1
 *      a  b  c  d  e  f  g  h
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 说明：
 * 彼此不能攻击可以解释为：任何一个皇后的所属行、所属列、所属对角线没有其他的皇后。
 * 
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 * 示例:
 * 
 *  输入: 4
    输出: 2
    解释： 4 皇后问题存在如下两个不同的解法。[
    [".Q..",  // 解法 1
    "...Q",
    "Q...",
    "..Q."],

    ["..Q.",  // 解法 2
    "Q...",
    "...Q",
    ".Q.."]
    ]
 *
 */


/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    if (n == 0) return 1;
    var res = 0;
    var arr = new Array(n).fill(new Array(n).fill('.'));
    var func = (x, y, [...arr]) => {
        if (x == 0 && y >= n || x >= n) return;
        arr[x] = new Array(n).fill('.');
        for (let i = 0; i <= x; i++) {
            if (arr[i][y] == "Q" || arr[i][y - x + i] == "Q" || arr[i][y + (x - i)] == "Q") break;
            if (i == x && y < n) {
                arr[x][y] = "Q";
                if (x == n - 1) {
                    res++;
                }
                func(x + 1, 0, arr);
            }
        }
        if (y < n - 1) func(x, y + 1, arr);
    }
    func(0, 0, arr);
    return res;
};

/**
 * 思路：
 * 见N皇后算法，只是原来得到有效解时，添加有效解到res，最后一起返回。
 * 该题中设置res为0，每次找到有效解时res+1；最后返回有效解的总数。
 * 
 * 时间复杂度：O(n!)
 */
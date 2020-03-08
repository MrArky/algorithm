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
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 示例:
 * 
 *  输入: 4
    输出: [
    [".Q..",  // 解法 1
    "...Q",
    "Q...",
    "..Q."],

    ["..Q.",  // 解法 2
    "Q...",
    "...Q",
    ".Q.."]
    ]
    解释: 4 皇后问题存在两个不同的解法。
 *
 */


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    if (n <= 0) return [[]];
    var res = [];
    var arr = new Array(n).fill(new Array(n).fill('.'));
    var func = (x, y, [...arr]) => {
        if (x == 0 && y >= n || x >= n) return;
        arr[x] = new Array(n).fill('.');
        for (let i = 0; i <= x; i++) {
            if (arr[i][y] == "Q" || arr[i][y - x + i] == "Q" || arr[i][y + (x - i)] == "Q") break;
            if (i == x && y < n) {
                arr[x][y] = "Q";
                if (x == n - 1) {
                    res.push(arr.map((item) => item.join("")));
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
 * 可以看成皇后在一个n*n的作为排列上以此入座：
 * 1.如果入座时发现在当前位置上所属排和所属列以及对角线上已经有皇后坐下了：
 * 1.1.假设当前皇后的位置行为x，列为y,那么让他考虑坐当前行x，列y+1的位置，再看看是否可以入座，以此类推
 * 1.2.有一种情况，皇后x排第一个位置开始坐，发现直到y=n-1的位置都没法入座，那么这个方案不行。
 * 2.这时候就要麻烦上一排的皇后在她所在的排，y位置往后移一位，即坐到y+1的位置，同时按照1描述进行验证，以此类推
 * 3.终于有一次的坐法能满足所有的皇后都能坐到位置，这时产生了一个有效解。
 * 
 * 时间复杂度：O(n!)
 *
 * 画外音：看来不管是哪里，多个皇后都要打架……
 * 
 */ 
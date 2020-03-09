/**
 * 题目：括号生成
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 例如，给出 n = 3，生成结果为：
 * 
 *  [
 *      "((()))",
 *      "(()())",
 *      "(())()",
 *      "()(())",
 *      "()()()"
 *  ]
 */

/**
 * 思路：
 * 
 * 1.n为1时肯定只有一种情况["()"]；
 * 2.当n>1时，便是在之前的结果中插入新的括号：
 *      ["( )"]
 *       | | |字符串尾部
 *       | |索引为1(length-1)的位置
 *       |索引为0的位置
 * 3.可以看到结果为["()()","(())","()()"]==>去重==>["()()","(())"]
 * 4.依次为之前结果中的每一个值继续插入新的括号：
 *      ["( ) ( )","( ( ) )"]
 *       | | | | |  || | ||
 * 5.可以看到结果为["()()()","(())()","()()()","()(())","()()()","()(())","(()())","((()))","(()())","(())()"]
 *   ==>去重==>["()()()","(())()","()(())","(()())","((()))"]
 * 
 * 时间复杂度：暂未算出来
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var result = ["()"];
    if (n == 0) return [];
    if (n == 1) return result;
    var _set = new Set();
    while (n > 1) {
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length;) {
                if (j == 0) _set.add("()" + result[i]);
                else _set.add(result[i].slice(0, j) + "()" + result[i].slice(j));
                j++;
                if (j == result[i].length) _set.add(result[i] + "()")
            }
        }
        result = [..._set];
        _set = new Set();
        n--;
    }
    return result;
};
/**
 * 题目：回文数
 * 
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 *  输入: 121
 *  输出: true
 * 
 * 示例 2:
 * 
 *  输入: -121
 *  输出: false
 *  解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 示例 3:
 * 
 *  输入: 10
 *  输出: false
 *  解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 进阶:
 * 
 *  你能不将整数转为字符串来解决这个问题吗？
 * 
 * （本题使用了该思路）
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    /**
     * 思路：
     * 将数字对调，判断前后两个值是否相等
     * 
     * 数字对调的方式为：依次通过除以10取余的方式获取x右边的数
     */
    if (x < 0) return false;
    if (x == 0) return true;
    if (x > 0 && x % 10 != 0) {
        var result = 0;
        var o = x;
        while (x) {
            result = result * 10 + x % 10;
            x = x / 10 >> 0;
        }
        if (o === result) return true;
        else return false;
    }
    else {
        return false;
    }
};
/**
 * 题目：二进制求和
 * 
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 *  输入: a = "11", b = "1"
 *  输出: "100"
 * 
 * 示例 2:
 * 
 *  输入: a = "1010", b = "1011"
 *  输出: "10101"
 * 
 * 提示：
 * 
 *  每个字符串仅由字符 '0' 或 '1' 组成。
 *  1 <= a.length, b.length <= 10^4
 *  字符串如果不是 "0" ，就都不含前导零。
 */


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a.length > b.length) return addBinary(b, a);
    var res = "";
    for (let i = 1, carry = 0; i <= b.length; i++) {
        let sum = (a[a.length - i] ? parseInt(a[a.length - i]) : 0) + parseInt(b[b.length - i]) + carry;
        if (sum > 1) {
            res = sum % 2 + res;
            carry = 1;
        }
        else {
            res = sum + res;
            carry = 0;
        }
        if (i == b.length && carry > 0) {
            res = '1' + res;
        }
    }
    return res;
};


/**
 * 思路：
 * 1.长度不一样，为了保证从最右边开始相加，每次两数相加的位置都为数的长度-i（i从1开始）。
 * 2.为了保证循环能兼顾每一位数，以长度较大的数字串长度进行遍历。
 * 3.相加等于2进1，循环结尾相加大于1，在字符串最前面再加'1'
 */
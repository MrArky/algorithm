/**
 * 题目：最长公共前缀
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 *  输入: ["flower","flow","flight"]
 *  输出: "fl"
 * 
 * 示例 2:
 * 
 *  输入: ["dog","racecar","car"]
 *  输出: ""
 *  解释: 输入不存在公共前缀。
 * 
 * 说明:
 * 所有输入只包含小写字母 a-z 。
 */

/**
 * 解法1
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    /**
     * 思路：
     * 1.如果字符串数组长度为0，返回 ""
     * 2.取数组中第一个字符串，依次和后面的字符串比较
     * 3.如果一旦某一个字符无法匹配，则将第一个字符串进行截取（取前面匹配的字符）
     * 4.以此类推
     */
    if (!strs.length) return "";
    var str = strs[0];
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(str) != 0) {
            str = str.slice(0, str.length - 1);
        }
    }
    return str;
};


/**
 * 解法2
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    /**
     * 思路：
     * 暴力解法
     */
    if (strs.length == "") return "";
    if (strs.length == 1) return strs[0];
    var str = strs[0];
    var result = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (str[i] != strs[j][i]) {
                i = str.length;//此处将i循环也结束
                break;
            }
            if (j == strs.length - 1) result += str[i];
        }
    }
    return result;
};
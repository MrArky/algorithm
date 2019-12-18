/**
 * 题目：
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 *  输入: 123
 *  输出: 321
 * 
 * 示例 2:
 * 
 *  输入: -123
 *  输出: -321
 * 
 * 示例 3:
 * 
 *  输入: 120
 *  输出: 21
 * 
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,231 − 1]。
 * 请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

/**
 * 解法一：
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    /**
     * 思路：
     * 找到中间的索引，左右两边依次互换
     * 注意：如果中间索引有两个（x长度为偶数时）,中间两个索引对应的值也要互换
     */
    var plusMinus = 1;
    if (x > 0) plusMinus = 1;
    else if (x == 0) return 0;
    else plusMinus = -1;
    var arr = [...Math.abs(x).toString()];
    if (arr.length > 10) return 0;
    var start = 0, end = 0;
    if (arr.length % 2 == 1) start = end = Math.floor(arr.length/ 2) ;
    else start = arr.length / 2 - 1, end = arr.length / 2;
    while (end - start + 1 <= arr.length) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start--;
        end++;
    }
    var result = parseInt(arr.join("")) * plusMinus;
    return result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31) ? 0 : result;
};


/**
 * 解法二：
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    /**
     * 思路：
     * 利用每次取余数依次取取出x的最后一位： x % 10
     * 再将取出来的数放在result的最后一位：result * 10
     * 得到一个新的result：result = result * 10 + x % 10
     * 直到最后取出的的值全部取完，即依次x除以10，直到最后x为0;
     */
    var result = 0;
    while (x) {
        result = result * 10 + x % 10;
        x = x / 10 >> 0;
    }
    return result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31) ? 0 : result;
};
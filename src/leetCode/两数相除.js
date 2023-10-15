/**
 * 题目：两数相除
 * 
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 示例 1:
 * 
 *  输入: dividend = 10, divisor = 3
 *  输出: 3
 * 
 * 示例 2:
 * 
 *  输入: dividend = 7, divisor = -3
 *  输出: -2
 * 
 * 说明:
 * 
 *  1.被除数和除数均为 32 位有符号整数。
 *  2.除数不为 0。
 *  3.假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，
 *    则返回 231 − 1。
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let max = Math.pow(2, 31) - 1;
    let min = -Math.pow(2, 31);
    let status = 1, i = 0;
    if (dividend > 0) { dividend = - dividend; status = - status; }
    if (divisor > 0) { divisor = - divisor; status = - status; }
    while (dividend <= divisor) {
        let temp_result = -1;
        let temp_divisor = divisor;
        while (dividend <= temp_divisor) {
            if (temp_divisor <= (min >> 1)) break;
            temp_result = temp_result << 1;
            temp_divisor = temp_divisor << 1;
        }
        dividend -= temp_divisor;
        i -= temp_result;
    }
    if (status > 0) return i > max ? max : i
    else return -i < min ? max : -i;
};

/**
 * 思路：
 * 
 * 1.考虑到溢出的问题，因此在计算支出，将dividend、divisor都转换成负数
 * 2.转换负数过程中通过status状态来记录最后的值应该是负数还是正数（默认status为正数1，
 *   没发生一次转换，status变成他的相反数）
 * 3.位移的应用
 *   1<<1=2、2<<1=4
 *   为什么？
 *   将1转换成二进制为：1，向左移一位为:10，再转换成十进制为：4
 *   将2转换成二进制为：10，向左移一位为:100，再转换成十进制为：8
 * 4.移位实际上实现了乘法运算。
 * 
 * 时间复杂度 
 */
/**
 * 题目：字符串相乘
 * 
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 示例 1:
 * 
 *  输入: num1 = "2", num2 = "3"
 *  输出: "6"
 * 
 * 示例 2:
 * 
 *  输入: num1 = "123", num2 = "456"
 *  输出: "56088"
 * 
 * 说明：
 * 
 *  num1 和 num2 的长度小于110。
    num1 和 num2 只包含数字 0-9。
    num1 和 num2 均不以零开头，除非是数字 0 本身。
    不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    var carry = 0;
    var result = "";
    let O = "";
    if (num1 == "0" || num2 == "0") return "0";
    for (let i = num1.length - 1; i >= 0; i--) {
        let tempResult = "";
        for (let j = num2.length - 1; j >= 0; j--) {
            let s = num1[i] * num2[j] + carry;
            carry = ~~(s / 10);
            tempResult = s % 10 + tempResult;
            if (j == 0 && carry > 0) {
                tempResult = carry + tempResult;
                carry = 0;
            }
        }
        result = add(result, tempResult + O);
        O += "0";
    }
    return result;
    function add(x, y) {
        if (x.length < y.length) return add(y, x);
        let res = "", cr = 0;
        for (let i = x.length - 1, j = y.length - 1; i >= 0; i-- , j--) {
            let h = parseInt(x[i]) + (y[j] == undefined ? 0 : parseInt(y[j])) + cr;
            cr = ~~(h / 10);
            res = h % 10 + res;
            if (i == 0 && cr > 0) {
                res = cr + res;
                carry = 0;
            }
        }
        return res;
    }
};

/**
 * 思路：
 * 以num1 = "123", num2 = "456"为例：
 * 
 *               1 2 3
 *         __*___4_5_6___
 *               7 3 8        ---->1.将乘法的值以字符串存储（做乘法的时候需要考虑进位问题）
 *             6 1 5 0        ---->2.从十位开始，将后面加上指定个数的0，在代码中使用O计数
 *      __+__4_9_2_0_0___ 
 *           5 6 0 8 8        ---->3.在本题中采用add方法将两个字符串数字相加（主要考虑进位问题）
 * 
 */
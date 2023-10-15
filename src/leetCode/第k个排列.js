/**
 * 题目：第k个排列
 * 
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * 
 *  1. "123"
    2. "132"
    3. "213"
    4. "231"
    5. "312"
    6. "321"
 *
 * 给定 n 和 k，返回第 k 个排列。
 * 说明：
 *  1.给定 n 的范围是 [1, 9]。
 *  2.给定 k 的范围是[1,  n!]。
 * 
 * 示例 1:
 * 
 *  输入: n = 3, k = 3
    输出: "213"
 *
 * 示例 2:
 * 
 *  输入: n = 4, k = 9
    输出: "2314"
 *
 */


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    if (k == 0) return;
    const dimension = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const factorial = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    let temp = n;
    let res = '';
    while (res.length < n) {
        let quotient = (k / factorial[temp - 1] >> 0);
        let remainder = k % factorial[temp - 1];
        let index = (quotient > 0 ? quotient : 0) + (remainder > 0 ? 1 : 0);
        res += dimension.splice(index, 1);
        k = remainder == 0 ? factorial[temp - 1] : remainder;
        temp--;
    }
    return res;
};


/**
 * 思路：
 * 将n以内的左右阶乘按顺序放在一个数组中，这个算法中直接给出了
 * 核心（假设n=5,k=20）：
 * 1.假如第一个数确定后，那么剩余数的组合个数为4!；如果第二个数也确定了，那么剩余数的组合个数为3！；以此内推...
 * 2.从第一个数开始，每个数应该为几？
 * 2.1.第一个数一定为k/(n-1)!,需要注意的是，假设商为0，那么一定为[1,2,3,…,n]中的第一位
 *     如果商大于0为2，那么那么不一定为[1,2,3,…,n]中的第2位，这时要考虑余数是否为0，不为零那么就要后移一位，以此类推...
 * 2.2.需要注意的是一旦余数等于0，说明后面在组合中的每一个数都为当前能取得最大那个数，为了让计算继续，将余数直接设为下一个数的阶乘。
 */
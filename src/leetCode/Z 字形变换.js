/**
 * 题目：
 * Z 字形变换
 * 
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比
 * 如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 *  输入: s = "LEETCODEISHIRING", numRows = 3
 *  输出: "LCIRETOESIIGEDHN"
 * 
 * 示例 2:
 * 
 *  输入: s = "LEETCODEISHIRING", numRows = 4
 *  输出: "LDREOEIIECIHNTSG"
 *  解释:
 * 
 *  L     D     R
 *  E   O E   I I
 *  E C   I H   N
 *  T     S     G
 */


/**
 * 解法一：
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    /**
     * 思路：
     *     - 0        6        12
     * n _ | 1     5  7     11 13
     *     | 2  4     8  10    14
     *     - 3        9        15
     * 0-3为n的索引i、0-15为s的索引j
     * 以每一行作为参考，不难得出i与j的规律：
     * (j + i) % 6 == 0 || (j - i) % 6 == 0
     * 6是如何得来的？如下：
     * numRows=4;
     * numRows+(numRows-2)=>4+(4-2)=>6
     * 可最终得出规律，只需在每一行中，每个s中的元素的索引必然和numRows的索引有如下关系：
     * (j + i) % numRows+(numRows-2) == 0 || (j - i) % numRows+(numRows-2) == 0
     * 
     * 时间复杂度为：O(s.length*numRows)
     */
    if (s.length == null || s.length == "") return "";
    if (s.length == 1 || numRows == 1) return s;
    var divisor = numRows + (numRows - 2);
    var arrStr = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < s.length; j++) {
            if ((j + i) % divisor == 0 || (j - i) % divisor == 0) {
                arrStr.push(s[j]);
            }
        }
    }
    return arrStr.join("");
};

/**
 * 解法二：
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    /**
     * 思路：
     *     - 0        6        12  6的倍数-0 或 6的倍数+0
     * n _ | 1     5  7     11 13  6的倍数-1 或 6的倍数+1
     *     | 2  4     8  10    14  6的倍数-2 或 6的倍数+2
     *     - 3        9        15  6的倍数-3 或 6的倍数+3
     * 0-3为n的索引i、0-15为s的索引j
     * 以每一行作为参考，不难得出i与j的规律：
     * i、1*6-i、1*6+i、2*6-i、2*6+i、3*6-i、3*6+i 、···
     * 继续推演：
     * x=0;
     * i、(x+1)*6-i、(x+1)*6+i、(x+2)*6-i、(x+2)*6+i、(x+3)*6-i、(x+3)*6+i 、···
     * 6是如何得来的？如下：
     * numRows=4;
     * numRows+(numRows-2)=>4+(4-2)=>6  ===>distance
     * 继续推演(将j抽象成i的函数)：
     * i、(x+1)*distance-i、(x+1)*distance+i、(x+2)*distance-i、(x+2)*distance+i、(x+3)*distance-i、(x+3)*distance+i 、···
     * 第一位的i其实也可以抽象成：0*6-i、0*6+i，只不过需要注意的是最终结果只取：0*6+i
     * 同时，第一行和最后一行出现一种情况：
     * (x+1)*distance+i=(x+2)*distance-i 如：distance=6,x=0,i=3
     *                  ————————————————
     * 6 + 3 = 12 - 3             |
     * 因此需要对第二个值去重(选择去掉x相同时前面字符)，即：j % distance == i && !time2(time2用于记录是否是x值不变情况下的第一个值,l类型为：bool)
     * 
     * 时间复杂度为：O(s.length)
     */
    if (s.length == null || s.length == "") return "";
    if (s.length == 1 || numRows == 1) return s;
    var distance = numRows + (numRows - 2);
    var arrStr = [];
    for (let i = 0; i < numRows; i++) {
        let state = 1, time2 = false, x = 0;
        for (let j = i; j < s.length;) {
            if (!(j % distance == i && !time2)) {
                arrStr.push(s[j]);
            }
            if (time2) time2 = false, state = -1, x += 1;
            else time2 = true, state = 1;
            j = x * distance + i * state;
        }
    }
    return arrStr.join("");
};
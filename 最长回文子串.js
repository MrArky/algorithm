/**
*给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
*
*示例 1：
*
*	输入: "babad"
*	输出: "bab"
*	注意: "aba" 也是一个有效答案。
*
*示例 2：
*
*	输入: "cbbd"
*	输出: "bb"
*
*/



/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    /**
     * 思路：
     * 1.依次以每个元素为中心（位置为startIndex=i，endIndex=i），
     * 2.或者每两个相邻且相等的元素为中心（位置为startIndex=i，endIndex=i+1）
     * 3.依次判断向左一位字符(left=i--)和向右一位字符(right=i++|right=(i+1)++)是否相等，如果相等依次类推
     * 4.如果不相等，记录上一次相等时的长度
     * 5.将得到的长度与(endIndex-startIndex)的差值做比较，如果大于差值，那么根据i和长度重新更新startIndex和endIndex
     * 6.循环完成后得到一个差值最大的startIndex和endIndex
     * 7.通过字符串截取方法，返回最终满足条件的字符串
     */
    var func = function (s, left, right) {
        while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
            /**
             * 此处注意上次判断成功后，为下一次计算已经将left和right赋予了新的值
             * 因此
             * left多减了1
             * right多加了1
             *  */
            left--;
            right++;
        }
        /**
         * 以s[i]作为参照物，计算left、right的位置
         * 向左时，left的值是相同的=>循环次数+1
         * 向右的，right的值不同:
         * - s[i]!=s[i+1]时：right的值为=>n(循环次数)+1
         * |
         * - s[i]==s[i+1]时：right的值为=>n(循环次数)+1+1(s[i+1]占位1))
         * 得出以下结论：
         * - s[i]!=s[i+1]时：left索引为: i-n(循环次数)-1(多 left-- 了一次)=>满足条件的索引：i-n
         * |                 right索引为: i+n(循环次数)+1(多 right++ 了一次)=>满足条件的索引：i+n
         * |
         * | s[i]==s[i+1]时：left索引为: i-n(循环次数)-1(多 left-- 了一次)=>满足条件的索引：i-n
         * -                 right索引为: i+n(循环次数)+1(多 right++ 了一次)+1(s[i+1]占位1))=>满足条件的索引：i+n
         * 理论：两数相减，求得的差值不包含被减数本身，因此计算长度需要加上被减数本身
         * 对于奇数而言，len=>(right-1)-(left+1)+1=>right-left-2+1 -
         *                                                        |-len=right-left-1
         * 对于偶数而言，len=>(right-1)-(left+1)+1=>right-left-2+1 -
         *  */
        return right - left - 1;
    }
    var startIndex = 0, endIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (s == null || s.length == 0) return "";
        let oddLen = func(s, i, i);
        let evenLen = func(s, i, i + 1);
        let maxLen = Math.max(oddLen, evenLen);//同时满足s[i]!=s[i+1]、s[i]==s[i+1]时取大值
        if (maxLen > endIndex - startIndex) {
            /**
             * 奇数长度：
             * (长度-1)/2为了得到左移动位置,其实(长度)/2,也是左移动位置，并且也是右移动位置
             * 偶数长度：
             * (长度-1)/2为左移动位置，与(偶数-2)/2也是左移动位置
             * 注意：
             * 如果是偶数，右边移动的位置就应该在左移动位置的基础上+1，因为s[i+1]的存在
             * (长度)/2 即为右移动位置，也可表示为(长度-1)/2+1
             * 结论：
             * 为了奇数偶数表达式统一：
             *  -startIndex选择：(长度-1)/2
             *  |
             *  -endIndex选择：(长度)/2
             */
            startIndex = i - Math.floor((maxLen - 1) / 2); 
            endIndex = i + Math.floor(maxLen / 2)
        }
    }
    /**
     * 按照以上逻辑，以'abcba'作为参数可知，i=2
     *  - startIndex=2 - Math.floor((5 - 1) / 2); => startIndex=0;
     *  |
     *  - endIndex=2 + Math.floor((5) / 2); => endIndex=4;
     * 得出结论： 
     * endIndex只是得到的字符串最后一位的索引位置
     * 理论：
     * String.substring函数第二个参数只会获取这个索引之前的元素，
     * 因此:  需要 endIndex + 1
     */
    return s.substring(startIndex, endIndex + 1);
};
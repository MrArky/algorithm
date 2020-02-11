/**
 * 题目：无重复字符的最长子串
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 *  示例 1:
 * 
 *  输入: "abcabcbb"
 *  输出: 3 
 *  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 示例 2:
 * 
 *  输入: "bbbbb"
 *  输出: 1
 *  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 示例 3:
 * 
 *  输入: "pwwkew"
 *  输出: 3
 *  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *  请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var map = new Map();
    var length = 0;
    for (let i = 0, j = 0, len = 0; i < s.length; i++) {
		if (length > s.length - j) break;//如果最后一个串开始的位置到结束的位置长度小于length,直接忽略这个比较。
        if (map.has(s[i])) { //如果hash表中存在字符
            let target = map.get(s[i]) + 1;//并且这个字符的位置+1在j的后面，j的索引移至这个位置（即某个不重复串的开始位置）
            if (j <= target) j = target;
        }
        len = i - j + 1;//直到出现了重复项，这时i索引即到了某个不重复串的尾部，这时i-j即为某个不重复串的长度
        length = length < len ? len : length;//那当前某个不重复串的长度和之前的最大长度比较，最较大的值更新到之前的最大长度值
        map.set(s[i], i);//将当前的新出现的重复字符的索引更新到hash表中这个字符（键）对应的值中。
    }
    return length;//遍历完字符串得到最长不重复子串的长度
};

/**
 * 思路：
 * 
 * 1.双指针（在本题中的i、j)
 * 2.hash去重，并记录索引位置匹配
 * 
 * 时间复杂度：O(n)
 */
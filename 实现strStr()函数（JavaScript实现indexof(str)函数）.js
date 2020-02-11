/**
 * 题目：实现 strStr()
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1
 * 
 * 示例 1:
 * 
 *  输入: haystack = "hello", needle = "ll"
 *  输出: 2
 * 
 * 示例 2:
 * 
 *  输入: haystack = "aaaaa", needle = "bba"
 *  输出: -1
 */


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length == 0) return 0;
    var map = new Map();
    for (let i in needle) {
        if (!map.has(i)) {
            map.set(needle[i], needle.length - i);
        }
    }
    map.set("len+1", needle.length + 1);
    for (let i = 0; i < haystack.length;) {//这里的时间复杂度(最坏的情况O(haystack.length))
        //如果haystack从索引的位置到末尾的长度已经比needle的长度小，就在也找不到结果了。
        if (needle.length > haystack.length - i) return -1;
        // for (j = 0, idx = i; j < needle.length; j++ , idx++) {
        //     if (haystack[idx] == needle[j]) {
        //         if (j == needle.length - 1) return i;
        //         continue;
        //     }
        //     else break;
        // }
        //下面字符串比较时间复杂度为O(needle.length)——见以上注释的算法
        if (haystack.slice(i, i + needle.length) == needle) return i;
        //以下通过Sunday算法提高haystack的遍历效率
        let curStr = haystack[i + needle.length];
        if (map.has(curStr)) i += map.get(curStr);
        else i += map.get("len+1");
    }
    return -1;
};

/**
 * 思路：
 * 暴力算法 + 通过Sunday算法
 *
 * 相关执行逻辑解释见注释
 *
 * 时间复杂度：最坏情况O(haystack.length*needle.length),最好情况O(haystack.length/(needle.length+1))
 */
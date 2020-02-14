/**
 * 题目：串联所有单词的子串
 * 
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 * 
 * 示例 1：
 * 
 *  输入：
 *      s = "barfoothefoobarman",
 *      words = ["foo","bar"]
 *  输出：[0,9]
 *  解释：
 *      从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 *      输出的顺序不重要, [9,0] 也是有效答案。
 * 
 * 示例 2：
 * 
 *  输入：
 *      s = "wordgoodgoodgoodbestword",
 *      words = ["word","good","best","word"]
 *  输出：[]
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    var result = [];
    var wordLength = words.length > 0 ? words[0].length : 0;
    var mateWordsLength = words.length > 0 ? words.length * words[0].length : 0;
    var map = new Map();
    for (word of words) {
        if (map.has(word)) map.set(word, map.get(word) + 1);
        else map.set(word, 1);
    }
    for (let i = 0; i < s.length - mateWordsLength + 1; i++) {
        let mateWord = s.slice(i, i + mateWordsLength);
        if (words.length > 0 && wordLength == 0) {
            result.push(i);
            continue;
        }
        var tempMap = new Map();
        for (let j = 0; j < mateWord.length; j += wordLength) {
            let tempWord = mateWord.slice(j, j + wordLength);
            if (map.has(tempWord)) {
                if (!tempMap.has(tempWord)) {
                    tempMap.set(tempWord, 1);
                }
                else {
                    if (tempMap.get(tempWord) < map.get(tempWord)) {
                        tempMap.set(tempWord, tempMap.get(tempWord) + 1);
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                break;
            }
            if (j == mateWordsLength - wordLength) {
                result.push(i);
            }
        }
    }
    return result;
};

/**
 * 思路：
 * 1.遍历words得到words所有单子的个数,例如在示例2中：
 * ------------
 * | word | 2 |
 * ------------
 * | good | 1 |
 * ------------
 * | best | 1 |
 * ------------
 * 并将其保存在一个hash表（map）中
 * 2.以每一个s中的字符作为开始位置，进行字符串判断：
 *  注意：每个单词的长度相同，可以得出每次匹配串长度mateWordsLength（16）以及每个匹配单词长度wordLength（4）
 *  1.创建一个临时hash表（tempMap）用于存匹配串中每个单词的出现数量，并与map中比较
 *  1.1.如果匹配串中的出新的单词在map中存在
 *  1.1.1.数量超过了map中对应单词的长度，那么这个匹配串则不符合要求
 *  1.1.2.数量没有超过了map中对应单词的长度，tempMap中这个单词数量加1
 *  1.2.如果匹配串中的出新的单词在map中不存在，那么这个匹配串则不符合要求
 *  第一次：|word good good good|bestword —— 不匹配 在匹配第三个单词时就会退出：good数量超出
 *          ---- ---- ---- ----
 *            1    2    3    4
 *  第二次：w|ordg oodg oodg oodb|estword —— 不匹配 在匹配第一个单词时就会退出:单词在map中不存在
 *           ---- ---- ---- ----
 *            1    2    3    4
 *  ...
 *  最后一次：wordgood|good good best word| —— 不匹配 在匹配第二个单词时就会退出：good数量超出
 *                    ---- ---- ---- ----
 *                      1    2    3    4
 * 
 *  结论：这个结果返回 []
 */
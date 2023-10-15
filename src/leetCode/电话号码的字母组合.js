/**
 * 题目：
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 示例:
 * 
 *  输入："23"
 *  输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    /**
     * 思路：
     * Map/Reduce
     * 
     * 值得注意的是，递归也是解法之一
     */
    if (!digits) return [];
    var _set = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' };
    if (digits.length == 1) return [..._set[digits[0]]];
    const numArr = digits.split('');
    const strArr = numArr.map(item => _set[item]);
    let resultArr = strArr.reduce((x, y) => {
        let tmp = []
        for (let l of x) {
            for (let r of y) {
                tmp.push(`${l}${r}`)
            }
        }
        return tmp
    });
    return resultArr;
};
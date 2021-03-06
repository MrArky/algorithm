/**
 * 题目：有效的括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 *  1.左括号必须用相同类型的右括号闭合。
 *  2.左括号必须以正确的顺序闭合。
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 *  输入: "()"
 *  输出: true
 * 
 * 示例 2:
 * 
 *  输入: "()[]{}"
 *  输出: true
 * 
 * 示例 3:
 * 
 *  输入: "(]"
 *  输出: false
 * 
 * 示例 4:
 * 
 *  输入: "([)]"
 *  输出: false
 * 
 * 示例 5:
 * 
 *  输入: "{[]}"
 *  输出: true
 * 
 */

/**
 * 思路：
 * 
 * 值得注意的是，在本题中，是检验括号的正确性，因此像"((){{{}[]}()})"这样的输入也是返回true，
 * 因为只要满足数学中的括号规则都是正确的。
 * 
 * 1.借助一个数组栈
 * 2.循环字符串中每个括号通过对象o={ "(": ")", "{": "}", "[": "]" }的hash校验，
 *   将此时括号的对应值放在数组栈中
 * 
 *   注意：
     if (arr.length == 0) {
         arr.push(o[s[i]]);
         continue;
     }             
     这个判断其实可以不要，只是为了降低时间复杂度，因为arr[0 - 1]=undefined，当数组长度为
     0时s[i] != arr[arr.length - 1]永真。

 * 3.一旦当前的括号和数组最后一个括号匹配，则删除数组中最后一个括号，否则将当前括号通过
 *   对象o={ "(": ")", "{": "}", "[": "]" }进行hash校验，将此时括号的对应值放在数组
 *   栈中。
 * 4.每次在数组栈中添加括号后，需要校验当前的数组长度和剩余为遍历字符串长度，如果数组长度
 *   大于剩余为遍历字符串长度，则返回false，因为后面的向左括号不足以消除向右的括号。
 * 5.如果到最后，数组栈的长度为0，则返回true。
 * 
 * 时间复杂度：O(n)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const o = { "(": ")", "{": "}", "[": "]" };
    var arr = [];
    if (s.length % 2 > 0) return false;
    for (let i = 0; i < s.length; i++) {
        if (arr.length == 0) {
            arr.push(o[s[i]]);
            continue;
        }
        if (s[i] != arr[arr.length - 1]) {
            if (arr.length + 1 > s.length - i) return false;
            arr.push(o[s[i]]);
        } else {
            arr.pop();
        }
    }
    return true;
};
/**
 * 题目：组合总和
 * 
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 
 *  所有数字（包括 target）都是正整数。
 *  解集不能包含重复的组合。 
 * 
 * 示例 1:
 * 
 *  输入: candidates = [2,3,6,7], target = 7,
    所求解集为:
    [
    [7],
    [2,2,3]
    ]
 *
 * 示例 2:
 * 
 *  输入: candidates = [2,3,5], target = 8,
    所求解集为:
    [
      [2,2,2,2],
      [2,3,3],
      [3,5]
    ]
 *
 */


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    var result = [], len = candidates.length;
    var exe = (idx, arr) => {
        let sum = arr.length == 0 ? 0 : arr.reduce((x, y) => { return x + y });
        if (target < sum) return;
        if (target == sum) return result.push(arr);
        for (let i = idx; i < len; i++) {
            exe(i, [...arr, candidates[i]]);
        }
    }
    exe(0, []);
    return result;
};


/**
 * 思路：
 * 此题的总体解题思路是回溯递归的思想。
 * 每一次循环，将自己的值放进数组，如果数组的所有值的和与target相等，那么这个数组是一个有效值数组。
 * 注意：
 * 1.递归过程中数组的和如果大于target，那么舍弃这个数组的结果。
 * 2.如果数组的值与target相等则将结果放入result。
 * 3.递归过程中每次数组的和如果小于target，将当前值加入数组，再次递归计算（注意索引i可以与当前值的索引相同，因为值可重复）
 */
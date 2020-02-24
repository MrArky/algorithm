/**
 * 题目：组合总和 II
 * 
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 
 *  所有数字（包括目标数）都是正整数。
 *  解集不能包含重复的组合。 
 * 
 * 例 1:
 * 
 *  输入: candidates = [10,1,2,7,6,1,5], target = 8,
    所求解集为:
    [
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6]
    ]
 *
 * 示例 2:
 * 
 *  输入: candidates = [2,5,2,1,2], target = 5,
    所求解集为:
    [
    [1,2,2],
    [5]
    ]
 *
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    var result = [], len = candidates.length;
    candidates.sort((a, b) => a - b);
    var exe = (idx, target, arr) => {
        if (target == 0) return result.push(arr);
        if (target < candidates[0]) return;
        for (let i = idx; i < len; i++) {
            if (candidates[i] > target) return;
            if (candidates[i] == candidates[i - 1] && i > idx) continue;
            exe(i + 1, target - candidates[i], [...arr, candidates[i]])
        }
    }
    exe(0, target, []);
    return result;
};


/**
 * 思路：
 * 此题的总体解题思路是回溯递归的思想。
 * 首先将所有的值由小到大排序。
 * 每一次循环，将当前索引对应的值放进数组，同时将当前的target-candidates[i]作为一个新的target传入。
 * 如果target为0，说明这个数组的值之和等于了原始传入的target。那么这个数组是一个有效值数组。
 * 注意：
 * 1.由于数组中每个值是能使用一次，因此当candidates[i] == candidates[i - 1] && i > idx时，会产生重复值，
 * 因此跳过该值与后面所有值的组合。
 * 2.exe(i + 1, target - candidates[i], [...arr, candidates[i]])，这里的“i+1”为下次数组的组合数字从
 * 当前数组candidates的下一位开始。
 */
/**
 * 题目：全排列
 * 
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 *  输入: [1,2,3]
    输出:
    [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
    ]
 *
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    res = [];
    func = (arr) => {
        if (arr.length == nums.length) {
            return res.push(arr);
        }
        for (let i = 0; i < nums.length; i++) {
            if (arr.filter(x => x == nums[i]).length > 0) continue;
            func([...arr, nums[i]]);
        }
    }
    func([]);
    return res;
};

/**
 * 思路：
 * 
 * 1.回溯递归，将每一个数与数组中的每个值进行组合
 * 2.因为每个数都是不重复的，所以通过数组每次向匹配的值向arr添加时，通过filter筛除重复添加进数组的值
 * 3.当arr数组长度和nums数组长度一致时，则这时候的arr数组即是一个解。
 * 
 */
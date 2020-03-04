/**
 * 题目：全排列 II
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 *  输入: [1,1,2]
    输出:
    [
    [1,1,2],
    [1,2,1],
    [2,1,1]
    ]
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    res = [];
    nums.sort((a, b) => a - b);
    func = ([...nums], idx) => {
        if (idx == nums.length - 1) {
            return res.push(nums);
        }
        for (let i = idx; i < nums.length; i++) {
            if (i != idx && nums[i] == nums[idx]) continue;
            nums.splice(idx, 1, ...nums.splice(i, 1, nums[idx]));//==> swap(i,idx) 交换数组中两个不同位置的值
            func(nums, idx + 1);
        }
    }
    func(nums, 0, nums.length - 1);
    return res;
};

/**
 * 思路：
 * 1.先将数组进行排序，目的：将所有相同的数放在一起
 * 2.一次拿每个数去组合其他的数，组成新的数组
 * 3.本体解法中每次拷贝一个nums：
 * 3.1.每次循环nums，将nums的i处的值和开始循环的idx的值做交换，交换后，将idx的位置向前移一位，重新拿idx的值和后面的值做交换。
 * 3.2.直到idx的值等于nums的长度减1，即得到了一个正解。
 * 
 * 注意：idx的对应的值和i对应的值相同，且i不等于idx，说明nums存在连续相同的元素，这时候只考虑最第一个元素与后面所有元素交换的结果（去重解）。
 * 
 */
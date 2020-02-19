/**
 * 题目：搜索插入位置
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，
 * 返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 *  输入: [1,3,5,6], 5
 *  输出: 2
 * 
 * 示例 2:
 * 
 *  输入: [1,3,5,6], 2
 *  输出: 1
 * 
 * 示例 3:
 * 
 *  输入: [1,3,5,6], 7
 *  输出: 4
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var start = 0; end = nums.length;
    while (end > start) {
        let middle = (start + end) / 2 >> 0;
        if (target == nums[middle]) return middle;
        if (target > nums[middle]) start = middle + 1;
        if (target < nums[middle]) end = middle;
    }
    return start;
};

/**
 * 思路：
 * 
 * 本题不难看出，采用暴力循环很容易就能找到对应的索引（当targrt<nums[i]时，返回i，
 * 如果遍历完都没有找到有效的值，则返回数组数组长度nums.length）
 * 时间复杂度为:O(n)
 * 
 * 在本题中题解中，采用了二分查找法：
 * 每次将数组一分为二，会有三种情况：
 * 1.target等于nums[middle]，则直接返回其索引
 * 2.target大于nums[middle]，将数组开始的位置start移至middle + 1
 * 3.target小于nums[middle]，将数组结束的位置end移至middle
 * 
 * 考虑到target大于最后一位时，但是end=start时会跳出循环，无法将start移至nums.length位子，
 * 因此最开始在定义nums结束位置时，定义到了nums.length位子。
 */
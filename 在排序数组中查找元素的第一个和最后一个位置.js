/**
 * 题目：在排序数组中查找元素的第一个和最后一个位置
 * 
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    var start = 0, end = nums.length - 1;
    while (end >= start) {
        if (nums[start] == nums[end] && nums[start] != target) return [-1, -1];
        if (nums[start] == nums[end] && nums[start] == target) return [start, end];
        let middle = ((start + end) / 2) >> 0;
        if (target == nums[middle]) {
            let left = middle, right = middle;
            while (nums[left - 1] == target) {
                left--;
            }
            while (nums[right + 1] == target) {
                right++;
            }
            return [left, right];
        }
        if (target < nums[middle + 1]) {
            end = middle
        }
        if (target > nums[middle]) {
            start = middle + 1;
        }
    }
    return [-1, -1];
};

/**
 * 思路：
 *
 * 首先对于一个数组寻值，且要求了时间复杂度为O(logN),那么这道题的解法了选择二分查找算法
 *
 * 最开始，数组开始位置start=0，结束位置end=nums.length-1
 *
 * 1.每次将数组一分为二(middle = ((start + end) / 2) >> 0;)：           //  >>0即为位移0位，此时会消除小数
 * 1.1.如果数组长度为奇数，那么左边长度-右边长度=1，否则两边长度相等
 * 1.2.每次得到的middle都是在左边数组最后一位
 *
 * 2.因此需要将target和nums[middle]进行比较：
 * 2.1.如果相等：那么判断middle前后位置是否有值依然和target相等，向前向后直到找不到后，得到的前面的位置left和后面位置right即为题解[left,right]
 * 2.2.如果过target < nums[middle + 1]，说明target只可能出现在左边数组中，将数组结束位置end设置为middle
 * 2.3.如果过target > nums[middle]，说明target只可能出现在又边数组中，将数组开始位置start设置为middle+1
 * 3.以此类推，直到最后nums[start]和nums[end]相等，这时的数组不能再二分：
 * 3.1.那么nums[start](nums[end])==targrt，那么得到结果[statr,end];
 * 3.2否则，没有target的索引存在，返回[-1,-1]
 *
 */
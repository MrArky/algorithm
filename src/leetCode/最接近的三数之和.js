/**
 * 题目：
 * 
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们
 * 的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 *  例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 *  与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    /**
     * 思路：
     * 1.先从小到大排序
     * 2.先第一个不变，后面使用双指针：
     * 2.1如果加起来与target相减的绝对值比nums[0] + nums[1] + nums[2]小，则交换值
     * 2.2因为从小到大排序，因此可以判断此时的和与target之间的大小，如果小于target
     *    则需要增加start的索引，提高和的值靠近target，如果大于target则需要减小end索引，
     *    降低和的值靠近target。
     * 
     * 注意：如果数组的长度小于等于3，直接返回数组所有值的和
     */
    nums.sort((a, b) => a - b);
    if (nums.length <= 3) {
        return nums.reduce(function (x, y) {
            return x + y;
        });
    }
    var temp = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1, end = nums.length - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (Math.abs(target - sum) < Math.abs(target - temp)) temp = sum;
            if (sum < target) start++;
            else if (sum > target) end--;
            else return sum;
        }
    }
    return temp;
};
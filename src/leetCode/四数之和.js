/**
 * 题目：
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存
 * 在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所
 * 有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 *  给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 *  满足要求的四元组集合为：
 *  [
 *      [-1,  0, 0, 1],
 *      [-2, -1, 1, 2],
 *      [-2,  0, 0, 2]
 *  ]
 * 
 */

/**
 * 思路：
 * 1.将四数求和转化成一个三数求和
 * 2.三数求和采用双指针提高效率
 * 3.该题存在一个值重复的问题，采用hash去重
 *  3.1在javascript中，map对象要求键值不能重复
 *  3.2将每一次的正确结果转化为map键值存入map中
 *  3.3如果map中已经存在这个键值，则忽略这个结果
 * 
 * 时间复杂度：O(n^3)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((x, y) => x - y);
    var result = [];
    var map = new Map();//hash去重
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let temp = nums[i] + nums[j];
            //此处应用双指针
            let start = j + 1;
            let end = nums.length - 1;
            while (start < end) {
                if (temp + nums[start] + nums[end] < target) {
                    start++;
                }
                else if (temp + nums[start] + nums[end] > target) {
                    end--;
                }
                else {
                    //hash去重
                    if (!map.has('' + nums[i] + nums[j] + nums[start] + nums[end])) {
                        map.set('' + nums[i] + nums[j] + nums[start] + nums[end], undefined);
                        result.push([nums[i], nums[j], nums[start], nums[end]]);
                    }
                    start++;
                }
            }
        }
    }
    return result;
};
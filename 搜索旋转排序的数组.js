/**
 * 题目：搜索旋转排序数组
 * 
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var len = nums.length;
    var start = 0, end = nums.length - 1;
    while (end - start > 0) {
        let middle = ~~((end - start + 1) / 2) - 1 + start;
        if (nums[start] <= nums[middle]) {
            if (target >= nums[start] && target <= nums[middle]) {
                end = middle;
            }
            else {
                start = middle + 1;
            }
        }
        else {
            if (target >= nums[middle + 1] && target <= nums[end]) {
                start = middle + 1;
            }
            else {
                end = middle
            }
        }
    }
    if(nums[start]!=target) return -1;
    else return start;
};

/**
 * 思路：
 * 
 * 题目中要求了时间复杂度为O(logn),因此此题的解法限定了使用二分查找求值
 * 
 * 每次将数组平分成两个数组:
 * 在本题解中，通过nums[start->middle]记录左边的数组,nums[middle+1->end]记录右边的数组
 * 
 * 因为数组被翻转过,数组被分成两部分后有以下特性：
 *  1.其中一个数组的数值是连续的且从小到大
 *  2.另一个数组不是连续的，且翻转点在这个数组中
 * 
 * 因此做一下结论：
 *  1.如果nums[start]<nums[middle]，即二分后左边的数组的为连续数组。
 *    1.1.如果target在其中，取该范围继续寻值：那么将middle设置为新的end。
 *    1.2否则target在二分后右边的数组中，此时将start设置为middle+1。
 *  2.如果与1结论相反，则数组右边为连续数组。
 *    2.1.如果target在其中，取该范围继续寻值：那么将此时将start设置为middle+1。
 *    2.2.否则target在左边的数组中，那么将middle设置为新的end。
 *  3.以此类推，进行多次二分后，知道start=end。
 *    3.1.此时只需要判断nums[start]是否为target，如果是，则此时start的值即为target的索引。
 *    3.2.否则target不存在，返回-1.
 */
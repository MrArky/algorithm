/**
 * 题目：删除排序数组中的重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1:
 * 
 *  给定数组 nums = [1,1,2], 
 *  函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 *  你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 2:
 * 
 *  给定 nums = [0,0,1,1,1,2,2,3,3,4],
 *  函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 *  你不需要考虑数组中超出新长度后面的元素。
 */

//解法一：时间复杂度O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length == 1) return 1;
    let prev = 0;//最后返回的有效数组最后一个数的索引，先从0开始
    for (let i = 1; i < nums.length; i++) {
        if (nums[prev] != nums[i]) {//如果第一个数和当前索引对应的值不相等
            prev++;//将prev索引向后移一位
            nums[prev] = nums[i]//并且将不相等的值放在prev对应索引位置上
            if (nums[i] == nums[nums.length - 1]) break;//如果当前索引的值已经是最大值（与数组最后一个值相等，即结束循环）
        }
    }
    return prev + 1;//prev最后一个有效值索引，prev+1即为有效数组长度
};


//解法二：时间复杂度O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var maxNum = nums[nums.length - 1]; //求得num中的最大值
    for (let i = 0; i < nums.length;) {
        //如果num[i]等于nums[nums.length - 1]，说明已经遍历到了最大的值，及时继续遍历，后面的也全是重复项
        //因此num[i]后面的元素全都要舍弃，所以最终可的到数组的长度为索引+1即i+1;
        if (nums[i] == maxNum) return i + 1;
        //如果当前遍历元素值和下一个元素值相等
        if (i + 1 < nums.length && nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1);//删除下一个元素
            continue;//注意，此时是索引是不变的，那当前的元素继续和本删除的元素后一个元素比较
        }
        i++;//直到当前索引对应的元素值和下一个不相等时，进入索引+1
    }
};
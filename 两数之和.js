/**
 * 题目：两数之和
 * 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 *  给定 nums = [2, 7, 11, 15], target = 9
 *  
 *  因为 nums[0] + nums[1] = 2 + 7 = 9
 *  所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map=new Map();
    const len=nums.length;
    for(let i=0;i<len;i++)
    {
        const targetNum=target-nums[i];//获取差值
        if(map.has(nums[i])) 
        {
            return [map.get(nums[i]),i];//判断map是不是包含差值，如果包含就返回
        }
        map.set(targetNum,i);//如果不包含就将差值放进map
    }
};

/**
 * 思路：
 * 
 * hash寻值
 * 
 * 1.特性：hash表的键是唯一的。
 * 2.数组每次遍历一个数，拿去和hash表中的键进行校验
 * 2.1.如果不存在：将target-num[i]的差值作为键，i作为值保存在hash表中
 * 2.2.如果存在，那么以num[i]为键在hash表中的值和i的组合即为最终的结果。
 * 
 */
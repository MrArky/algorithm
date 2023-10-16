// 生成测试用例
const nums: number[] = new Array(20 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * 希尔排序（缩小增量排序）
 * @param nums 
 */
const shellSort = (nums: number[]) => {
    let t = nums.length >>> 1; // 增量
    while (t) {
        //根据增量进行插入排序
        insertionSort(nums, t);
        t >>= 1;
    }
    console.log(nums);
}

/**
 * 带有增量的插入排序
 * @param nums 待排序数组
 * @param increment 增量
 */
const insertionSort = (nums: number[], increment: number) => {
    for (let i = increment; i < nums.length; i += increment) {
        for (let j = i - increment; j >= 0; j -= increment) {
            // 如果 nums[i] 前面的元素比它小，就交换
            if (nums[j] > nums[j + increment]) {
                // 起始时，其实 nums[j + increment] 就是 nums[i]
                [nums[j], nums[j + increment]] = [nums[j + increment], nums[j]]
            }
        }
    }
}

shellSort(nums);

/**
 * 分析：
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(1)
 * 扩展： 希尔排序有分而治之的思想，所以在能并发的环境中，各个分块可以实现并发执行而互不干扰，从而进一步缩小时间开销
 */
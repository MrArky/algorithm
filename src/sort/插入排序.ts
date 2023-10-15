// 生成测试用例
const nums: number[] = new Array(20 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * （直接）插入排序（正序）
 * @param nums 
 */
const insertionSort = (nums: number[]) => {
    for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            // 如果 nums[i] 前面的元素比它小，就交换
            if (nums[j] > nums[j + 1]) {
                // 起始时，其实 nums[j + 1] 就是 nums[i]
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    console.log(nums);
}

insertionSort(nums);


/**
 * 将每一个数单独拿出来在插入到一个有序的数组中
 * 原地修改：
 * 初始数组就是 nums 数组区间：[0,0]
 * 时间复杂度：O((n-1)*(1 + 2 + 3 + … + n-1)) ==> O((n^2)/2) ==> O(n^2)
 * 空间复杂度：O(1)
 */

// 生成测试用例
const nums: number[] = new Array(20 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * 冒泡排序（正序）
 * @param nums 
 */
const bubbleSort = (nums: number[]) => {
    for (let i = 0; i < nums.length; i++) {
        // 前面的数一定比自己小，所以 j 是从 i + 1 开始
        for (let j = i + 1; j < nums.length; j++) {
            // 正序还是倒序，取决于这个判断是大于还是小于
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    console.log(nums);
}

bubbleSort(nums);

/**
 * 分析：
 * 由于是双重for循环，时间复杂度为：O(n)
 * 修改是在原数组中进行，属于原地修改，空间复杂度为：O(1)
 */
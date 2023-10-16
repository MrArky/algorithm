// 生成测试用例
const nums: number[] = new Array(20 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * 插入排序
 * @param nums 
 */
const selectionSort = (nums: number[]) => {
    for (let i = 0; i < nums.length - 1; i++) {
        // 记录从 i 到 nums.length - 1 最小值的索引
        let minIdx = i;
        for (let j = i + 1; j < nums.length; j++) {
            // 比较值大小，交换索引
            if (nums[j] < nums[minIdx]) [minIdx, j] = [j, minIdx];
        }
        // 最后将最小值索引对应值 nums[minIdx] 与 nums[i] 的值交换
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
    console.log(nums);
}

selectionSort(nums);

/**
 * 分析：
 * 每次找到数组中剩余元素（未排序部分）最小值（最大值），插入到已排序部分的尾部
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 交换比比较需要的CPU多，所以在数组长度值较小时，选择排序比冒泡排序更快
 */
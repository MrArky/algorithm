// 生成测试用例
const nums: number[] = new Array(50 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * 计数排序
 * @param nums 
 */
const countingSort = (nums: number[]) => {
    const max = Math.max(...nums);
    const count = new Array(max + 1).fill(0);
    for (let num of nums) count[num]++;
    for (let i = 1, j = 0; i < count.length; i++) {
        while (count[i] > 0) {
            nums[j++] = i;
            count[i]--;
        }
    }
    console.log(nums);
}

countingSort(nums);

/**
 * 分析：
 * 时间复杂度：O(n + k) k 为数组中的最大值
 * 空间复杂度：O(k)
 */
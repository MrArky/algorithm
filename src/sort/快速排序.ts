// 生成测试用例
const nums: number[] = new Array(50 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * 快速排序（递归实现）
 * @param nums 
 */
export const quickSort = (nums: number[]) => {
    /**
     * 递归
     * @param start 排序开始索引
     * @param end 排序结束索引
     */
    const recursion = (start: number, end: number) => {
        if (start >= end) return;
        const key = nums[start];
        let mid = start;
        // 将小于等于 target 的值放在左边
        for (let j = end - 1; j > mid; j--) {
            if (key > nums[j]) {
                // [nums[mid], nums[j]] = [nums[j], nums[mid]];
                nums[mid] = nums[j];
                // 始终保证 mid 指针指向的的值都大于 key
                while (nums[mid] < key && mid < j) mid++;
                // 将当前 mid 指针指向的值放入之前 nums[j] 的位置
                nums[j] = nums[mid];
            }
        }
        nums[mid] = key;
        recursion(start, mid);
        recursion(mid + 1, end);
    }
    recursion(0, nums.length);
}
console.log(nums);
console.log([...nums].sort((a, b) => a - b));
quickSort(nums);

console.log(nums);


/**
 * 分析：
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(1)
 * 扩展：分而治之的思想，所以在能并发的环境中，各个分块可以实现并发执行而互不干扰，从而进一步缩小时间开销
 */
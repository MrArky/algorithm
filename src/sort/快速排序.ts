// 生成测试用例
const nums: number[] = new Array(50 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * 快速排序（递归实现）
 * @param nums 
 * @param start 排序开始索引
 * @param end 排序结束索引
 */
const quickSort = (nums: number[], start?: number, end?: number) => {
    start ??= 0;
    end ??= nums.length;
    if (start >= end) return;
    const num = nums[start];
    let mid = start;
    // 将小于等于 num 的值放在左边
    for (let j = end - 1; j >= mid;) {
        if (num > nums[j]) {
            [nums[mid], nums[j]] = [nums[j], nums[mid]];
            mid++;
        }
        else j--;
    }
    quickSort(nums, start, mid);
    // 如果 mid === start 说明 nums[start] 右边的数都是大于 nums[start]
    if (mid === start) mid++;
    quickSort(nums, mid, end);
}

quickSort(nums);

console.log(nums);


/**
 * 分析：
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(1)
 * 扩展：分而治之的思想，所以在能并发的环境中，各个分块可以实现并发执行而互不干扰，从而进一步缩小时间开销
 * 代码第25行，可以知道，如果数组大部分甚至全部单调递增就很尴尬了：虽然不需要排序，但在黑盒中反而时间复杂度 O(n^2)。
 */
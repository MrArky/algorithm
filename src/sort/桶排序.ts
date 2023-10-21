import { quickSort } from "./快速排序";

// 生成测试用例
const nums: number[] = new Array(50 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

const bucketSort = (nums: number[]) => {
    if (!nums.length) return nums;
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    // 桶大小（指的是容纳数字的范围）
    const bucketSize = 5;
    // 计算桶的个数
    const bucketCount = ((max - min) / bucketSize >> 0) + 1;
    // 建桶
    const buckets: number[][] = new Array(bucketCount).fill(0).map(() => []);
    for (let n of nums) {
        buckets[(n - min) / bucketSize >> 0].push(n);
    }
    return buckets.map(c => {
        // 每个桶内一般使用快速排序
        quickSort(c);
        return c;
    }).reduce((a, b) => a.concat(b))
}

console.log(bucketSort(nums));


/**
 * 分析：
 * 平均时间复杂度：O(n+k)，最差时间复杂度：O(n^2)
 * 空间复杂度：O(n*k)
 */
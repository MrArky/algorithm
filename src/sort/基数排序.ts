// 生成测试用例
const nums: number[] = new Array(50 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * 基数排序
 * @param nums 
 */
const radixSort = (nums: number[]) => {
    let max = Math.max(...nums);
    let k = 0;
    while (max) {
        let buckets = new Array(10).fill(0).map(() => new Array<number>()); // 0 - 9
        for (let n of nums) {
            buckets[(n / Math.pow(10, k) >> 0) % 10].push(n);
        }
        for (let i = 0, j = 0; i < 10; i++) {
            while (buckets[i].length) {
                nums[j++] = buckets[i].shift()!;
            }
        }
        max >>= ++k;
    }
    console.log(nums);
}

radixSort(nums);

/**
 * 分析：
 * 时间复杂度：O(k*(n+10))  k 为最大数字的长度 比如：12436 长度为 5
 * 空间复杂度: O(10*n)
 * 稳定算法
 */

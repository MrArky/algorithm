// 生成测试用例
const nums: number[] = new Array(50 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * 归并排序（递归实现）
 * @param nums 
 * @returns 
 */
const mergeSort = (nums: number[]): number[] => {
    const n = nums.length;
    if (n == 1) return nums;
    const mid = n >> 1;
    return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
}

/**
 * 合并两个数组为一个新的有序数组
 * @param nums1 数组1
 * @param nums2 数组2
 */
const merge = (nums1: number[], nums2: number[]): number[] => {
    const newNums: number[] = [];
    // 方法一
    // let i = 0, j = 0;
    // while (i < nums1.length && j < nums2.length) {
    //     if (nums1[i] < nums2[j]) newNums.push(nums1[i++]);
    //     else newNums.push(nums2[j++]);
    // }
    // while (i < nums1.length) newNums.push(nums1[i++]);
    // while (j < nums2.length) newNums.push(nums2[j++]);
    // 方法二：简洁写法
    while (nums1.length || nums2.length) {
        const n1 = nums1[0] ?? Infinity;
        const n2 = nums2[0] ?? Infinity;
        if (n1 < n2) newNums.push(nums1.shift()!);
        else newNums.push(nums2.shift()!);
    }
    return newNums;
}

console.log(mergeSort(nums));


/**
 * 分析：
 * 时间复杂度：O(nlogn)
 * 空间复杂度: O(n)
 */
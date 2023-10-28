// 生成测试用例
const nums: number[] = new Array(50 * Math.random() >> 0).fill(0).map(() => Math.random() * 100 >> 0);

/**
 * 做沉底操作的递归函数
 * @param idx 当前需要沉底的索引节点
 */
const dfs = (idx: number, nums: number[], length?: number) => {
    // 从左至右，left为左子节点索引，right为右子节点索引
    let left = 2 * idx + 1, right = 2 * idx + 2;
    if (left < (length ?? nums.length) && nums[left] > nums[idx]) {
        [nums[left], nums[idx]] = [nums[idx], nums[left]];
        // 其实不仅仅是需要和子元素交换值，其实需要做沉底操作
        dfs(left, nums, length);
    }
    if (right < (length ?? nums.length) && nums[right] > nums[idx]) {
        [nums[right], nums[idx]] = [nums[idx], nums[right]];
        // 其实不仅仅是需要和子元素交换值，其实需要做沉底操作
        dfs(right, nums, length);
    }
}

/**
 * 堆排序
 * 堆分为小顶堆和大顶堆，该方法中使用大顶堆
 */
const heapSort = (nums: number[]) => {
    // 常规上来讲，堆是一个完全二叉树，可以使用一个数组就能构造一个堆，所以在原数组中构造堆
    // 获取树的高度
    let h = nums.length / 2 >> 0;
    // 从倒数第二层开始对所有节点数子做沉底操作，每一层的索引为：[2^h - 1,2^(h+1)-1)
    h--;
    while (h >= 0) {
        for (let i = Math.pow(2, h) - 1; i < Math.pow(2, h + 1) - 1; i++) {
            dfs(i, nums);
        }
        h--;
    }
    // 依次取出最后一个元素，与最大值交换，然后再做沉底操作
    for (let i = nums.length - 1; i >= 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        dfs(0, nums, i);
    }
    console.log(nums);
}

console.log([...nums].sort((a, b) => a - b));
heapSort(nums);


/**
 * 分析：
 * 事件复杂度：O(nlogn)
 * 空间复杂度：O(1)
 */
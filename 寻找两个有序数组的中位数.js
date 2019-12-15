/**
 * 题目：
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * nums1 = [1, 3]
 * nums1 = [1, 3]
 * 则中位数是 2.0
 * 
 * 示例 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 则中位数是 (2 + 3)/2 = 2.5
 */



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    /**
     *思路：
     * 1.有序数组(arr)中位数计算规则：
     * 1.1.数组长度为奇数(n)时，中位数的值为:arr[n/2+1]
     * 1.2.数组长度为偶数(n)时，中位数的值为:(arr[n/2]+arr[n/2+1])/2
     * 2.时间复杂度O(log(min(m,n)))<=O(log(m+n))：
     * 2.1.使用二分查找
     * 2.2.找到一个num1中的位置(i)将nums1分成两部分
     * 2.3.找到一个num2中的位置(j)将nums2分成两部分
     * 2.4.如下
     *             left_part                |              right_part
     * nums1[0], nums1[1], ..., nums1[i-1]  |  nums1[i], nums1[i+1], ..., nums1[m-1]
     * nums2[0], nums2[1], ..., nums2[j-1]  |  nums2[j], nums2[j+1], ..., nums2[n-1]
     * 2.5.这个两个位置有如下特征：
     *   -- i + j = m - i + n - j  //(如果m+n为奇数：i + j =m - i + n - j + 1)
     *  -|                                               |
     *   -- Math.max(a[i-1],B[j-1])<=Math.min(A[i],B[j]) |
     * 2.6.将2.5进一步推演                                |
     *   -- j = ( m + n + 1 ) / 2 - i  <-----------------| 因为此处会除以2，因此偶数+1无影响，但是奇数不加1将会造成j的位置可能不对
     *   |- m <= n (由 j = ( m + n + 1 ) / 2 - i | 0 <= i <= m | j >= 0 推演)
     *   |- nums1[i] >= nums2[j-1]
     *   |- nums2[j] >= nums1[i-1]
     * 2.7.依次移动i的位置，进行比较，以2.6的结果(取反)作为条件、并先限定i的位置一定满足：0(imin)<i<m(imax)(因为m<=n,所以此时j一定满足：0<j<n):
     * 2.7.1,如果i小于取值区间的最大值(imax),并且此时以i的位置作为切分，nums[i]<nums2[j-1],说明切分的位置需要右移，即i的值太小了
     * 2.7.2,如果i大于取值区间的最小值(imin)),并且此时以i的位置作为切分，nums[i-1]>nums2[j],说明切分的位置需要左移，即i的值太大了
     * 2.8.执行完了2.7已经得到了一个正确划分的i的值和j的值，这时只需要注意的几个问题：
     * 2.8.1.i的位置为临界点0或者m处 0:左边只考虑nums2[j-1] m:右边只考虑nums2[j]
     * 2.8.2.j的位置为临界点0或者n处 0:左边只考虑nums1[i-1] n:右边只考虑nums1[i]
     * 2.8.3.排除以上情况后
     * 2.8.3.1.m+n为奇数时： Math.max(nums[i-1],nums2[j-1])
     * 2.8.3.2.m+n为偶数时：(Math.max(nums[i-1],nums2[j-1])+Math.min(nums[i],nums2[j]))
     *                      -----------------------------  -------------------------
     *                                     |左边最大值                  |右边最小值
     * --------------------------------------------------------------------------------
     */
    var m = nums1.length;
    var n = nums2.length;
    if (m > n) return findMedianSortedArrays(nums2, nums1);//此处应对2.6中的条件（m<=n）
    var imin = 0, imax = m, halflen = Math.floor((m + n + 1) / 2);
    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halflen - i;
        if (i < imax && nums1[i] < nums2[j - 1]) { //i 的值太小了
            imin = i + 1;
        } else if (i > imin && nums2[j] < nums1[i - 1]) { //i 的值太大了
            imax = i - 1;
        } else {
            let maxLeft = 0;
            if (i == 0) {
                maxLeft = nums2[j - 1];
            } else if (j == 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            if ((m + n) % 2 == 1) return maxLeft;
            let minRight = 0;
            if (i == m) {
                minRight = nums2[j];
            } else if (j == n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }
            return (maxLeft + minRight) / 2
        }
    }
};
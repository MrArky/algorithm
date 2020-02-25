/**
 * 题目：接雨水
 * 
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 *     |                            ___
 *    3|            ___            |   |___     ___
 *    2|    ___    |   |___     ___|   |   |___|   |___
 *    1|___|___|___|___|___|___|___|___|___|___|___|___|___
 *       0   1   0   2   1   0   1   3   2   1   2   1
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。
 * 
 * 示例:
 * 
 *  输入: [0,1,0,2,1,0,1,3,2,1,2,1]
    输出: 6
 *
 */


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var left = 0, right = height.length - 1;
    var result = 0;
    var left_max = 0, right_max = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= left_max ? (left_max = height[left]) : result += (left_max - height[left]);
            ++left;
        }
        else {
            height[right] >= right_max ? (right_max = height[right]) : result += (right_max - height[right]);
            --right;
        }
    }
    return result;
};

/**
 * 思路：
 * 双指针
 */
/**
 * 题目：螺旋矩阵
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 示例 1:
 * 
 *  输入:
    [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
    ]
    输出: [1,2,3,6,9,8,7,4,5]
 *
 * 示例 2:
 * 
 *  输入:
    [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
    ]
    输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var result = [], left = [];
    var len = matrix.length, start = 0;
    for (let i = 0; i < len; i++) {
        let tempArr = matrix[i].slice(start, matrix[i].length - start);
        if (i == start) {
            result = result.concat(tempArr);
            if (i == len - 1) break;
        }
        else if (i < len - 1) {
            result.push(matrix[i][matrix[i].length - 1 - start]);
            if (tempArr == 1) break;
            if (tempArr.length > 1) left.unshift(matrix[i][start]);
        }
        else {
            result = result.concat(tempArr.reverse(), left);
            if (tempArr.length <= 2) break;
            left.length = 0;
            i = start++;
            len--;
        }
    }
    return result;
};

/**
 *拿一个start从0开始做标识,left=[]存左边的值
 *循环数组,i为索引：
 *[
 *[ 1, 2, 3, 4, 5 ],   -- [ 1, 2, 3, 4, 5 ]
 *[ 6, 7, 8, 9, 10 ],  -- [ 1, 2, 3, 4, 5,10 ] 10-> matrix[i].slice(start, matrix[i].length - start)，left[6] 6=> matrix[start]
 *[ 11,12,13,14,15 ],  -- [ 1, 2, 3, 4, 5,10,15 ] 15-> matrix[i].slice(start, matrix[i].length - start)，left[11,6] 11=> matrix[start]
 *[ 17,18,19,20,21 ],  -- [ 1, 2, 3, 4, 5,10,15,21 ] 21-> matrix[i].slice(start, matrix[i].length - start)，left[17,11,6] 17=> matrix[start]
 *[ 22,23,24,25,26 ]   -- 将倒叙后的数组并入[ 1, 2, 3, 4, 5,10,15,21 ] ==> [1, 2, 3, 4, 5,10,15,21,26,25,24,23,22 ]
 *]                       将left也并入[1, 2, 3, 4, 5,10,15,21,26,25,24,23,22 ] ==> [1, 2, 3, 4, 5,10,15,21,26,25,24,23,22,17,11,6 ]
 *循环完一遍start++；
 *以此类推。
 */
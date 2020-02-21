/**
 * 题目：解数独
 * 
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 一个数独的解法需遵循如下规则：
 *  1.数字 1-9 在每一行只能出现一次。
 *  2.数字 1-9 在每一列只能出现一次。
 *  3.数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 空白格用 '.' 表示。
 * 
 *  "5","3",".",".","7",".",".",".","."
    "6",".",".","1","9","5",".",".","."
    ".","9","8",".",".",".",".","6","."
    "8",".",".",".","6",".",".",".","3"
    "4",".",".","8",".","3",".",".","1"
    "7",".",".",".","2",".",".",".","6"
    ".","6",".",".",".",".","2","8","."
    ".",".",".","4","1","9",".",".","5"
    ".",".",".",".","8",".",".","7","9"
 *
 * Note:
 *  1.给定的数独序列只包含数字 1-9 和字符 '.' 。
 *  2.你可以假设给定的数独只有唯一解。
 *  3.给定数独永远是 9x9 形式的。
 * 
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    var n = 3;
    var N = n * n;
    createtwoDArr = () => {
        var arr = new Array(N);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
        return arr;
    }
    var rows = createtwoDArr();
    var columns = createtwoDArr();
    var boxes = createtwoDArr();
    var tempboard;
    var sudokuSolved = false;
    couldPlace = (d, row, col) => {
        var idx = (~~(row / n)) * n + ~~(col / n);
        return rows[row][d] + columns[col][d] + boxes[idx][d] == 0;
    }
    placeNumber = (d, row, col) => {
        var idx = (~~(row / n)) * n + ~~(col / n);
        rows[row][d]++;
        columns[col][d]++;
        boxes[idx][d]++;
        tempboard[row][col] = d.toString();
    }
    removeNumber = (d, row, col) => {
        var idx = (~~(row / n)) * n + ~~(col / n);
        rows[row][d]--;
        columns[col][d]--;
        boxes[idx][d]--;
        tempboard[row][col] = '.';
    }
    placeNextNumbers = (row, col) => {
        if ((col == N - 1) && (row == N - 1)) {
            sudokuSolved = true;
        }
        else {
            if (col == N - 1) backtrack(row + 1, 0);
            else backtrack(row, col + 1);
        }
    }
    backtrack = (row, col) => {
        if (tempboard[row][col] == '.') {
            for (let d = 1; d < 10; d++) {
                if (couldPlace(d, row, col)) {
                    placeNumber(d, row, col);
                    placeNextNumbers(row, col);
                    if (!sudokuSolved) removeNumber(d, row, col);
                }
            }
        }
        else placeNextNumbers(row, col);
    }
    exe = ((board) => {
        tempboard = board;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (board[i][j] != '.') {
                    placeNumber(board[i][j], i, j);
                }
            }
        }
        backtrack(0, 0);
    })(board);
};


/**
 * 思路：
 * 
 * 回溯算法
 * 
 */